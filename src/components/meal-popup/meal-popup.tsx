import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ResultMeal } from '../../types/meals-api-types';

import styles from './meal-popup.module.scss';

type MealPopupProps = {
  meal: ResultMeal;
};

export default function MealPopup(props: MealPopupProps) {
  const { nutrition, title, readyInMinutes, image, summary, extendedIngredients, analyzedInstructions } =
    props.meal;
  const { nutrients } = nutrition;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, [props.meal]);

  useEffect(() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className={styles.container}
      style={{ display: isVisible ? 'flex' : 'none', height: `${document.body.scrollHeight}px` }}
      onClick={(event) => {
        if ((event.target as HTMLElement).classList.contains(styles.container)) {
          setVisible(false);
        }
      }}
    >
      <div className={styles.window}>
        <div onClick={() => setVisible(false)} className={styles.xmark}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <section className={styles['description']}>
          <img src={`${image}`} className={styles['description__img']} alt="dish"></img>
          <div className={styles['description__text']}>
            <h2 className={styles['description__title']}>{title}</h2>
            <div className={styles['description__time-serving']}>
              <span className={styles['summary__time-qty']}>{readyInMinutes}m</span>
              <span className={styles['summary__skill-level']}>Hard</span>
            </div>
            <p
              className={styles['description__description-text']}
              dangerouslySetInnerHTML={{ __html: `${summary}` }}
            ></p>
          </div>
        </section>
        <div className={styles['composition']}>
          <section className={styles['composition__ingredients']}>
            <h1 className={styles['composition__title']}>Ingredients</h1>
            <ul className={styles['composition__list']}>
              {extendedIngredients.map((el, i) => (
                <li key={el.name} className={styles['ingredient']}>
                  <span>{i + 1}</span>
                  {el.original}
                </li>
              ))}
            </ul>
          </section>
          <div className={styles['composition__other']}>
            <section className={styles['composition__nutrients']}>
              <h3 className={styles['composition__title']}>Nutritional Information</h3>
              <div className={styles['composition__blocks']}>
                <div className={styles['composition__block-protein']}>
                  <div className={styles['composition__block-line']}></div>
                  <span className={styles['composition__block-name']}>PROTEIN</span>
                  <span className={styles['composition__block-weight']}>
                    {nutrients.filter((el) => el.name === 'Protein')[0].amount}g
                  </span>
                  <span className={styles['composition__block-percent']}>
                    {nutrition.caloricBreakdown.percentProtein}%
                  </span>
                </div>
                <div className={styles['composition__block-carbs']}>
                  <div className={styles['composition__block-line']}></div>
                  <span className={styles['composition__block-name']}>NET CARBS</span>
                  <span className={styles['composition__block-weight']}>
                    {nutrients.filter((el) => el.name.toLowerCase() === 'carbohydrates')[0].amount}g
                  </span>
                  <span className={styles['composition__block-percent']}>
                    {nutrition.caloricBreakdown.percentCarbs}%
                  </span>
                </div>
                <div className={styles['composition__block-fat']}>
                  <div className={styles['composition__block-line']}></div>
                  <span className={styles['composition__block-name']}>FAT</span>
                  <span className={styles['composition__block-weight']}>
                    {nutrients.filter((el) => el.name === 'Fat')[0].amount}g
                  </span>
                  <span className={styles['composition__block-percent']}>
                    {nutrition.caloricBreakdown.percentFat}%
                  </span>
                </div>
              </div>

              <div className={styles['composition__line']}>
                <div className={styles['composition__satiety-score']}>
                  <span className={styles['name']}>SATIETY SCORE</span>
                  <span className={styles['property']}>
                    {nutrients.filter((el) => el.name === 'Calories')[0].amount}g
                  </span>
                </div>
                <div className={styles['composition__total-carbs']}>
                  <span className={styles['name']}>TOTAL CARBS</span>
                  <span className={styles['property']}>
                    {nutrients.filter((el) => el.name === 'Carbohydrates')[0].amount}g
                  </span>
                </div>
                <div className={styles['composition__fiber']}>
                  <span className={styles['name']}>FIBER</span>
                  <span className={styles['property']}>
                    {nutrients.filter((el) => el.name === 'Fiber')[0].amount}g
                  </span>
                </div>
              </div>

              <div className={styles['instructions']}>
                <h3 className={styles['instructions-title']}>Instructions</h3>
                <ul className={styles['instructions-list']}>
                  {analyzedInstructions[0].steps.map((el) => (
                    <li key={el.number}>
                      <span>{el.number}</span>
                      {el.step}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}