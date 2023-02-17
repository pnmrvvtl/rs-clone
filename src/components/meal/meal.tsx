import { useParams } from 'react-router';
import { useContext, useEffect } from 'react';

import styles from './meal.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../context/user-context';
import ErrorPage from '../../pages/error-page/error-page';
import { ResultMeal, ExtendedIngredient, Step, Nutrient } from '../../types/meals-api-types';

export default function Meal() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { mealsByParametersResponse } = useContext(UserContext);
  const meal = mealsByParametersResponse.filter((el) => el.id === +id!)[0];

  const { nutrients } = meal.nutrition;
  if (!meal) {
    return <ErrorPage />;
  }

  return (
    <main className={styles.container}>
      <div className={styles['description-wrapper']}>
        <div className={styles['description__content-wrapper']}>
          <DescriptionBox title={meal.title} duration={meal.readyInMinutes} summary={meal.summary} />
        </div>
        <img className={styles['description__meal-img']} src={`${meal.image}`} alt="dish"></img>
      </div>

      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <section className={styles['ingredients']}>
            <h3>Ingredients</h3>
            <IngredientsList extendedIngredients={meal.extendedIngredients} />
          </section>

          <div className={styles['main-content']}>
            <div className={styles['composition__other']}>
              <Instructions steps={meal.analyzedInstructions[0]?.steps} />
              <Nutritional nutrients={nutrients} meal={meal} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['for-margin-bottom']}></div>
    </main>
  );
}

const DescriptionBox = (props: { title: string; duration: number; summary: string }) => {
  return (
    <div className={styles['summary-wrapper']}>
      <section className={styles['summary']}>
        <h1 className={styles['summary__title']}>{props.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: `${props.summary}` }}></p>
        <aside className={styles['summary__time-info']}>
          <span className={styles['summary__time-icon']}>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <span className={styles['summary__time-qty']}>{props.duration}m</span>
          <span className={styles['summary__skill-level']}>Hard</span>
        </aside>
      </section>
    </div>
  );
};

const IngredientsList = (props: { extendedIngredients: ExtendedIngredient[] }) => {
  return (
    <ul className={styles['ingredients-list']}>
      {props.extendedIngredients.map((el) => (
        <li key={el.name} className={styles['ingredient']}>
          <span>
            {el.amount} {el.unit}
          </span>
          <div className="image-wrapper">
            <img src={'https://spoonacular.com/cdn/ingredients_100x100/' + el.image} alt="ingredients" />
          </div>
          <span className={styles.name}>{el.name}</span>
        </li>
      ))}
    </ul>
  );
};

const Instructions = (props: { steps: Step[] }) => {
  return (
    <section className={styles['instructions']}>
      <h3 className={styles['instructions-title']}>Instructions</h3>
      <ul className={styles['instructions-list']}>
        {props.steps.map((el) => (
          <li key={el.number}>
            <span>{el.number}</span>
            {el.step}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Nutritional = (props: { nutrients: Nutrient[]; meal: ResultMeal }) => {
  return (
    <section className={styles['composition__nutrients']}>
      <h3 className={styles['composition__title']}>Nutritional Information</h3>
      <div className={styles['composition__blocks']}>
        <div className={styles['composition__block-carbs']}>
          <div className={styles['composition__block-line']}></div>
          <span className={styles['composition__block-name']}>NET CARBS</span>
          <span className={styles['composition__block-weight']}>
            {props.nutrients.filter((el) => el.name.toLowerCase() === 'net carbohydrates')[0]?.amount}g
          </span>
          <span className={styles['composition__block-percent']}>
            {props.meal.nutrition.caloricBreakdown.percentCarbs}%
          </span>
        </div>
        <div className={styles['composition__block-protein']}>
          <div className={styles['composition__block-line']}></div>
          <span className={styles['composition__block-name']}>PROTEIN</span>
          <span className={styles['composition__block-weight']}>
            {props.nutrients.filter((el) => el.name.toLowerCase() === 'protein')[0]?.amount}g
          </span>
          <span className={styles['composition__block-percent']}>
            {props.meal.nutrition.caloricBreakdown.percentProtein}%
          </span>
        </div>
        <div className={styles['composition__block-fat']}>
          <div className={styles['composition__block-line']}></div>
          <span className={styles['composition__block-name']}>FAT</span>
          <span className={styles['composition__block-weight']}>
            {props.nutrients.filter((el) => el.name.toLowerCase() === 'fat')[0]?.amount}g
          </span>
          <span className={styles['composition__block-percent']}>
            {props.meal.nutrition.caloricBreakdown.percentFat}%
          </span>
        </div>
      </div>

      <div className={styles['composition__line']}>
        {props.nutrients.map((el) => (
          <div className={styles['composition__item']}>
            <span className={styles['name']}>{el.name}</span>
            <div className={styles['property-persens']}>
              <span className={styles['property']}>
                {el.amount}
                {el.unit}
              </span>
              <span className={styles['persens']}>{el.percentOfDailyNeeds}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};