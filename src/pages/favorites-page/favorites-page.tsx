import styles from './favorites-page.module.scss';

import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import MealCard from '../../components/meal-card/meal-card';

const FavoritesPage = () => {
  const { favouritesMeals } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1>Here is your favourite meals</h1>
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