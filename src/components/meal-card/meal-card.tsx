import React, { useContext, useState } from 'react';

import { MealCardInfo } from '../../types/meal-card-info';

import styles from './meal-card.module.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';

type MealCardProps = {
  clickOnCardHandler?: React.MouseEventHandler<HTMLDivElement>;
  mealCardInfo: MealCardInfo;
  isColumnLayout: boolean;
  isFavourite: boolean;
  fromFavourite?: boolean;
};

export default function MealCard(props: MealCardProps) {
  const { title, calories, imageUrl, fats, day, foodTime, protein, duration, carbs, likes, id } =
    props.mealCardInfo;

  const navigate = useNavigate();
  const { favouritesMeals, setFavouritesMeals } = useContext(UserContext);
  const [isInFavourites, setIsInFavourites] = useState(props.isFavourite);

  const handleFavouriteClick = () => {
    if (favouritesMeals.some((el) => el === id)) {
      setFavouritesMeals([...favouritesMeals.filter((inEl) => inEl !== id)]);
      setIsInFavourites(false);
      localStorage.setItem('favourites', JSON.stringify(favouritesMeals.filter((inEl) => inEl !== id)));
    } else {
      setFavouritesMeals([...favouritesMeals, id]);
      setIsInFavourites(true);
      localStorage.setItem('favourites', JSON.stringify([...favouritesMeals, id]));
    }
  };

  return (
    <div
      onClick={(event) => {
        if (props.isColumnLayout && !(event.target as HTMLElement).classList.contains(styles.star)) {
          navigate(`/meal/${id}`);
        }
        if (props.clickOnCardHandler && !(event.target as HTMLElement).classList.contains(styles.star)) {
          props.clickOnCardHandler(event);
        }
      }}
      className={`${styles.meal} ${!props.isColumnLayout && styles.rowed}`}
    >
      <div
        className={styles['meal-image']}
        title={'Meal image:' + title}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <div>
          {day && <span title={'Meal day'}>{day}</span>}
          {foodTime && <span title={'Meal time'}>{foodTime}</span>}
        </div>
        <div>
          <div>
            <span title="protein">{protein} g</span>
            <span title="carbs">{carbs} g</span>
            <span title="fats">{fats} g</span>
          </div>
          <span
            className={`${styles.star} ${isInFavourites && styles.favourite} ${
              props.fromFavourite && styles.favourite
            }`}
            onClick={handleFavouriteClick}
          >
            ★
          </span>
        </div>
      </div>
      <div className={styles['meal-title']}>
        <h5 title={'Meal title: ' + title}>{title}</h5>
        <span title={'likes'}>♥</span>
        <span title={'likes'}> {likes} </span>|{' '}
        <svg
          width="15"
          height="15"
          viewBox="0 0 17 17"
          className="m-0 mr-0.5 opacity-60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M7.64455 2.12091C4.42455 2.12091 1.81705 4.73424 1.81705 7.95424C1.81705 11.1742 4.42455 13.7876 7.64455 13.7876C10.8704 13.7876 13.4837 11.1742 13.4837 7.95424C13.4837 4.73424 10.8704 2.12091 7.64455 2.12091ZM7.65038 12.6209C5.07205 12.6209 2.98371 10.5326 2.98371 7.95424C2.98371 5.37591 5.07205 3.28758 7.65038 3.28758C10.2287 3.28758 12.317 5.37591 12.317 7.95424C12.317 10.5326 10.2287 12.6209 7.65038 12.6209Z"
              fill="#404040"
            ></path>
            <path
              d="M7.94205 5.03754H7.06705V8.53754L10.1295 10.375L10.567 9.65754L7.94205 8.10004V5.03754Z"
              fill="#404040"
            ></path>
          </g>
        </svg>
        <span title={'duration'}>{duration} min. </span>|
        <span title={'calories'}>
          {' '}
          {calories}
          {' kcal'}
        </span>
      </div>
    </div>
  );
}
