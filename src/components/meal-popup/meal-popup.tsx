import styles from './meal.popup.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react";
import {Result} from "../../types/meals-api-types";


export default function MealPopup (props: {meal: Result, isVisible: boolean}) {

    const meal = props.meal;
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        window.scrollTo(0, 0);
    }, [props.meal]);

    useEffect(() => {
        setVisible(false);
        window.scrollTo(0, 0);
    }, []);

    const {nutrients} = meal.nutrition;

    return (
        <div className={styles.container} style={{display: isVisible ? 'flex' : 'none', height: `${document.body.scrollHeight}px`}}>
            <div className={styles.window}>
                <div
                    onClick={() => setVisible(false)}
                    className={styles.xmark}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
                <div className={styles['description']}>
                    <img
                        src={`${meal.image}`}
                        className={styles['description__img']}>
                    </img>
                    <div className={styles['description__text']}>
                        <h2 className={styles['description__title']}>
                            {meal.title}
                        </h2>
                        <div className={styles['description__time-serving']}>
                            <span className={styles['summary__time-qty']}>{meal.readyInMinutes}m</span>
                            <span className={styles['summary__skill-level']}>Hard</span>
                        </div>
                        <p
                            className={styles['description__description-text']}
                            dangerouslySetInnerHTML={{__html: `${meal.summary}`}}>
                        </p>
                    </div>
                </div>
                <div className={styles['composition']}>
                    <div className={styles['composition__ingredients']}>
                        <h1 className={styles['composition__title']}>Ingredients</h1>
                        <ul className={styles['composition__list']}>
                            {
                                meal.extendedIngredients.map((el, i) => (
                                    <li key={el.name} className={styles['ingredient']}>
                                        <span>{i + 1}</span>{el.original}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles['composition__other']}>
                        <div className={styles['composition__nutrients']}>
                            <h3 className={styles['composition__title']}>
                                Nutritional Information
                            </h3>
                            <div className={styles['composition__blocks']}>
                                <div className={styles['composition__block-carbs']}>
                                    <div className={styles['composition__block-line']}></div>
                                    <span className={styles['composition__block-name']}>NET CARBS</span>
                                    <span className={styles['composition__block-weight']}>
                                        {nutrients.filter((el: any) => el.name === "Net Carbohydrates")[0].amount}g
                                    </span>
                                    <span className={styles['composition__block-percent']}>
                                        {meal.nutrition.caloricBreakdown.percentCarbs}%
                                    </span>
                                </div>
                                <div className={styles['composition__block-protein']}>
                                    <div className={styles['composition__block-line']}></div>
                                    <span className={styles['composition__block-name']}>PROTEIN</span>
                                    <span className={styles['composition__block-weight']}>
                                        {nutrients.filter((el: any) => el.name === "Protein")[0].amount}g
                                    </span>
                                    <span className={styles['composition__block-percent']}>
                                        {meal.nutrition.caloricBreakdown.percentProtein}%
                                    </span>
                                </div>
                                <div className={styles['composition__block-fat']}>
                                    <div className={styles['composition__block-line']}></div>
                                    <span className={styles['composition__block-name']}>FAT</span>
                                    <span className={styles['composition__block-weight']}>
                                        {nutrients.filter((el: any) => el.name === "Fat")[0].amount}g
                                    </span>
                                    <span className={styles['composition__block-percent']}>
                                        {meal.nutrition.caloricBreakdown.percentFat}%
                                    </span>
                                </div>
                            </div>

                            <div className={styles['composition__line']}>
                                <div className={styles['composition__satiety-score']}>
                                    <span className={styles['name']}>SATIETY SCORE</span>
                                    <span className={styles['property']}>
                                        {nutrients.filter((el: any) => el.name === "Calories")[0].amount}g
                                    </span>
                                </div>
                                <div className={styles['composition__total-carbs']}>
                                    <span className={styles['name']}>TOTAL CARBS</span>
                                    <span className={styles['property']}>
                                        {nutrients.filter((el: any) => el.name === "Carbohydrates")[0].amount}g
                                    </span>
                                </div>
                                <div className={styles['composition__fiber']}>
                                    <span className={styles['name']}>FIBER</span>
                                    <span className={styles['property']}>
                                        {nutrients.filter((el: any) => el.name === "Fiber")[0].amount}g
                                    </span>
                                </div>
                            </div>

                            <div className={styles['instructions']}>
                                <h3 className={styles['instructions-title']}>Instructions</h3>
                                <ul className={styles['instructions-list']}>
                                    {
                                        meal.analyzedInstructions[0].steps.map(el => (
                                            <li key={el.number}><span>{el.number}</span>{el.step}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}