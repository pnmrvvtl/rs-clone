import styles from './meal.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";
import ErrorPage from "../../pages/error-page/error-page";
// import { CommentBankSharp } from '@mui/icons-material';
import { ExtendedIngredient, Step } from "../../types/meals-api-types";
import { MealPopup } from '../meal-popup/meal-popup';

export default function Meal() {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const { mealsByParametersResponse } = useContext(UserContext);
    const meal = mealsByParametersResponse.results.filter((el) => el.id === +id!)[0];

    const { nutrients } = meal.nutrition;
    console.log(nutrients);
    if (!meal) {
        return <ErrorPage />
    }

    return (
        <div className={styles.container}>
            {/* < MealPopup /> */}
            <div className={styles['description-wrapper']}>
                <div className={styles['description__content-wrapper']}>
                    <DescriptionBox title={meal.title} duration={meal.readyInMinutes} summary={meal.summary} />
                </div>
                <img
                    className={styles['description__meal-img']}
                    src={`${meal.image}`}>
                </img>
            </div>

            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <div className={styles['ingredients']}>
                        <h3>Ingredients</h3>
                        <IngredientsList extendedIngredients={meal.extendedIngredients} />
                    </div>



                    <div className={styles['main-content']}>
                        <div className={styles['composition__other']}>
                            <Instructions steps={meal.analyzedInstructions[0].steps} />

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
                                    {
                                        nutrients.map((el: any) =>
                                            <div className={styles['composition__item']}>
                                                <span className={styles['name']}>{el.name}</span>
                                                <div className={styles['property-persens']}>
                                                    <span className={styles['property']}>{el.amount}{el.unit}</span>
                                                    <span className={styles['persens']}>
                                                        {el.percentOfDailyNeeds}%
                                                    </span>
                                                </div>

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['for-margin-bottom']}></div>
        </div>
    )
}


const DescriptionBox = (props: { title: string, duration: number, summary: string }) => {
    return (
        <div className={styles['summary-wrapper']}>
            <div className={styles['summary']}>
                <h1 className={styles['summary__title']}>{props.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: `${props.summary}` }}></p>
                <aside className={styles['summary__time-info']}>
                    <span className={styles['summary__time-icon']}>
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span className={styles['summary__time-qty']}>{props.duration}m</span>
                    <span className={styles['summary__skill-level']}>Hard</span>
                </aside>
            </div>
        </div>
    )
}

const IngredientsList = (props: { extendedIngredients: ExtendedIngredient[] }) => {
    return (
        <ul>
            {
                props.extendedIngredients.map((el, i) => (
                    <li key={el.name} className={styles['ingredient']}>
                        <span>{i + 1}</span>{el.original}
                    </li>
                ))
            }
        </ul>

    )
}

const Instructions = (props: { steps: Step[] }) => {
    return (
        <div className={styles['instructions']}>
            <h3 className={styles['instructions-title']}>Instructions</h3>
            <ul className={styles['instructions-list']}>
                {
                    props.steps.map(el => (
                        <li key={el.number}><span>{el.number}</span>{el.step}</li>
                    ))
                }
            </ul>
        </div>
    )
}