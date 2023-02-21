//libs
import React, { useContext } from 'react';
//context
import { UserContext } from '../../context/user-context';
//components
import MealCard from '../../components/meal-card/meal-card';
//styles
import styles from './favorites-page.module.scss';

const FavoritesPage = () => {
  const { favouritesMeals } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1>
        {favouritesMeals.length
          ? 'Here is your favourite meals'
          : 'Sorry, you dont have favourite meals now. Click on star on meal card to add this meal to favourite.'}
      </h1>
      <div className={styles.meals}>
        {favouritesMeals.map((meal, idx) => {
          return (
            <MealCard
              key={idx}
              mealCardInfo={{
                id: meal.id,
                duration: meal.cookingMinutes + meal.readyInMinutes + meal.preparationMinutes,
                day: '',
                foodTime: '',
                imageUrl: meal.image,
                title: meal.title,
                calories: meal.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'calories')[0]
                  .amount,
                protein: meal.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0]
                  .amount,
                carbs: meal.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0]
                  .amount,
                fats: meal.nutrition.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0].amount,
                likes: meal.likes + meal.aggregateLikes,
              }}
              isColumnLayout={true}
              isFavourite={true}
              fromFavourite={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;