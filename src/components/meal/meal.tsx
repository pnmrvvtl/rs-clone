import styles from './meal.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";
import ErrorPage from "../../pages/error-page/error-page";
// import { CommentBankSharp } from '@mui/icons-material';

export default function Meal() {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const { mealsByParametersResponse } = useContext(UserContext);
    console.log(mealsByParametersResponse)
    const meal = mealsByParametersResponse.results.filter((el) => el.id === +id!)[0];

    // console.log(meal.summary)

    if (!meal) {
        return <ErrorPage />
    }

    return (
        <div className={styles.container}>
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
                    <Ingredients />
                    <div className={styles['main-content']}>
                        <RecipeSection />
                        <Tip />
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
                <p dangerouslySetInnerHTML={{__html:`${props.summary}`}}></p>
                <aside className={styles['summary__time-info']}>
                    <span className={styles['summary__time-icon']}>
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span className={styles['summary__time-qty']}>{props.duration}m</span>
                    <span className={styles['summary__time-level']}>Beginner</span>
                </aside>
            </div>
        </div>
    )
}

const Ingredients = () => {
    return (
        <div className={styles['ingredients']}>
            <h3>Ingredients</h3>
            <Text />
        </div>
    )
}

const RecipeSection = () => {
    return (
        <div className={styles['instructions']}>
            <h3 className={styles['instructions-title']}>Instructions</h3>
            <ul className={styles['instructions-list']}>
                <li><span>1</span><Text /></li>
                <li><span>2</span><Text /></li>
                <li><span>3</span><Text /></li>
                <li><span>4</span><Text /></li>
            </ul>
        </div>
    )
}

const Tip = () => {
    return (
        <div className={styles.tip}>
            <h3>Tip!</h3>
            <Text />
        </div>
    )
}

const Text = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
    )
}