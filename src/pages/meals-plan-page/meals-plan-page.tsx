import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import ReactPaginate from 'react-paginate';
import Carousel from 'react-material-ui-carousel';

import MealCard from '../../components/meal-card/meal-card';
import ErrorPage from '../error-page/error-page';
import MealPopup from '../../components/meal-popup/meal-popup';

import { UserContext } from '../../context/user-context';
import { ResultMeal } from '../../types/meals-api-types';

import styles from './meals-plan.page.module.scss';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Sorting from '../../types/sorting';

export default function MealsPlanPage() {
  const {
    DEFAULT,
    CALORIES_ASC,
    CARBS_ASC,
    CARBS_DESC,
    FATS_ASC,
    FATS_DESC,
    PROTEINS_ASC,
    PROTEINS_DESC,
    CALORIES_DESC,
  } = Sorting;
  const { userData, mealsByParametersResponse, favouritesMeals } = useContext(UserContext);
  const [popupMeal, setPopupMeal] = useState<ResultMeal>(mealsByParametersResponse.results[0]);
  const [sorting, setSorting] = useState(Sorting.DEFAULT);
  const [search, setSearch] = useState('');

  const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (!userData.isEditedByUser) {
    return <ErrorPage />;
  }

  const ITEMS_PER_PAGE = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  let dinnerIdeas = mealsByParametersResponse.results.slice(
    daysArray.length * (userData.mealsCount || 3),
    mealsByParametersResponse.results.length,
  );
  if (search !== '') {
    dinnerIdeas = dinnerIdeas.filter((meal) => {
      return (
        (meal.title && meal.title.toLowerCase().includes(search)) ||
        (meal.summary && meal.summary.toLowerCase().includes(search)) ||
        (meal.extendedIngredients &&
          meal.extendedIngredients.some((elem) => elem.name.toLowerCase().includes(search))) ||
        (meal.nutrition.nutrients &&
          meal.nutrition.nutrients.some((elem) => elem.name.toLowerCase().includes(search))) ||
        (meal.nutrition.ingredients &&
          meal.nutrition.ingredients.some((elem) => elem.name.toLowerCase().includes(search)))
      );
    });
  }
  if (sorting !== DEFAULT) {
    switch (sorting) {
      case CALORIES_ASC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'calories')[0].amount -
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'calories')[0].amount
          );
        });
        break;
      case CALORIES_DESC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'calories')[0].amount -
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'calories')[0].amount
          );
        });
        break;
      case PROTEINS_ASC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0].amount -
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0].amount
          );
        });
        break;
      case PROTEINS_DESC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0].amount -
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0].amount
          );
        });
        break;
      case CARBS_ASC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0].amount -
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0].amount
          );
        });
        break;
      case CARBS_DESC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0].amount -
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0].amount
          );
        });
        break;
      case FATS_ASC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0].amount -
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0].amount
          );
        });
        break;
      case FATS_DESC:
        dinnerIdeas = dinnerIdeas.sort((meal1, meal2) => {
          return (
            meal2.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0].amount -
            meal1.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0].amount
          );
        });
        break;
    }
  }

  const currentItems = dinnerIdeas.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dinnerIdeas.length / ITEMS_PER_PAGE);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % mealsByParametersResponse.results.length;
    setItemOffset(newOffset);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };
  const handleSorting = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSorting(+event.target.value);
  };

  return (
    <div className={styles.container}>
      <MealPopup meal={popupMeal} />
      <section className={styles['current-meals']}>
        <h2>Next meals</h2>
        <Carousel
          indicatorIconButtonProps={{
            style: {
              padding: '5px',
              fontSize: '1rem',
              color: 'rgba(149, 149, 149)', // 2
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: 'rgba(64, 64, 64)',
              fontWeight: 'bold',
              textDecoration: 'underline',
            },
          }}
          indicatorContainerProps={{
            style: {},
          }}
          IndicatorIcon={daysArray}
          autoPlay={false}
          animation={'slide'}
          duration={700}
          navButtonsProps={{
            style: {
              // display: 'none',
              backgroundColor: 'rgb(200,200,200)',
              color: 'rgba(5, 170, 88)',
            },
          }}
          navButtonsWrapperProps={{
            style: {
              top: '-15%',
            },
          }}
          navButtonsAlwaysVisible={true}
        >
          {Array.from([1, 2, 3, 4, 5, 6, 7]).map((elem, idx) => {
            return (
              <div key={idx} className={styles.meals}>
                {mealsByParametersResponse.results
                  .slice((elem - 1) * (userData.mealsCount || 3), elem * (userData.mealsCount || 3))
                  .map((item, i) => {
                    const meal =
                      mealsByParametersResponse.results[(elem - 1) * (userData.mealsCount || 3) + i];
                    return (
                      <MealCard
                        key={(i + 1) * elem}
                        mealCardInfo={{
                          id: meal.id,
                          duration: meal.cookingMinutes + meal.readyInMinutes + meal.preparationMinutes,
                          day: daysArray[idx],
                          foodTime: i === 0 ? 'Breakfast' : i === 1 ? 'Lunch' : 'Dinner',
                          imageUrl: meal.image,
                          title: meal.title,
                          calories: meal.nutrition.nutrients.filter(
                            (el) => el.name.toLowerCase() === 'calories',
                          )[0].amount,
                          protein: meal.nutrition.nutrients.filter(
                            (el) => el.name.toLowerCase() === 'protein',
                          )[0].amount,
                          carbs: meal.nutrition.nutrients.filter(
                            (el) => el.name.toLowerCase() === 'carbohydrates',
                          )[0].amount,
                          fats: meal.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0]
                            .amount,
                          likes: meal.likes + meal.aggregateLikes,
                        }}
                        isColumnLayout={true}
                        isFavourite={favouritesMeals.some((favEl) => favEl.id === meal.id)}
                      />
                    );
                  })}
              </div>
            );
          })}
        </Carousel>
      </section>

      <section className={styles['dinner-ideas']}>
        <div className={styles.filters}>
          <h2>Dinner ideas</h2>
          <TextField
            id="outlined-basic"
            label="Search by parameters"
            variant="outlined"
            value={search}
            onChange={handleSearch}
          />
          <TextField id="sorting" value={String(sorting)} label="Sorting" select onChange={handleSorting}>
            <MenuItem value={DEFAULT}>Default sorting</MenuItem>
            <MenuItem value={CALORIES_ASC}>Sorting by calories ASC</MenuItem>
            <MenuItem value={CALORIES_DESC}>Sorting by calories DESC</MenuItem>
            <MenuItem value={PROTEINS_ASC}>Sorting by proteins ASC</MenuItem>
            <MenuItem value={PROTEINS_DESC}>Sorting by proteins DESC</MenuItem>
            <MenuItem value={CARBS_ASC}>Sorting by carbs ASC</MenuItem>
            <MenuItem value={CARBS_DESC}>Sorting by carbs DESC</MenuItem>
            <MenuItem value={FATS_ASC}>Sorting by fats ASC</MenuItem>
            <MenuItem value={FATS_DESC}>Sorting by fats DESC</MenuItem>
          </TextField>
        </div>
        <div className={styles['ideas-cards']}>
          {currentItems.map((item, i) => (
            <MealCard
              clickOnCardHandler={() => setPopupMeal({ ...item })}
              key={i}
              mealCardInfo={{
                id: item.id,
                duration: item.cookingMinutes + item.readyInMinutes + item.preparationMinutes,
                day: '',
                foodTime: '',
                imageUrl: item.image,
                title: item.title,
                calories: item.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'calories')[0]
                  .amount,
                protein: item.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0]
                  .amount,
                carbs: item.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0]
                  .amount,
                fats: item.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0].amount,
                likes: item.likes + item.aggregateLikes,
              }}
              isColumnLayout={false}
              isFavourite={favouritesMeals.some((favEl) => favEl.id === item.id)}
            />
          ))}
        </div>
      </section>
      <ReactPaginate
        className={styles.pagination}
        activeClassName={styles.selected}
        nextClassName={styles.next}
        previousClassName={styles.previous}
        containerClassName={styles.next}
        disabledClassName={styles.disabled}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </div>
  );
}
