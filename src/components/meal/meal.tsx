import styles from './meal.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/user-context";

export default function Meal() {
    let {id} = useParams();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [id]);

    const {mealsByParametersResponse} = useContext(UserContext);
    const meal = mealsByParametersResponse.results.filter((el) => el.id === +id!)[0];

    return (
        <div className={styles.container}>
            <div className={styles['background-img']} style={{backgroundImage: `url('${meal.image}')`}}>
                <div className={styles['content-wrapper']}>
                    <DescriptionBox title={meal.title} duration = {meal.readyInMinutes}/>
                </div>
            </div>
            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <Ingredients/>
                    <div className={styles['main-content']}>
                        <RecipeSection/>
                        <Tip/>
                    </div>
                </div>
            </div>
            <div className={styles['for-margin-bottom']}></div>
        </div>
    )
}

const DescriptionBox = (props: { title: string , duration: number}) => {
    return (
        <div className={styles['description-box-wrapper']}>
            <div className={styles['description-box']}>
                <h1 className={styles['description-box__title']}>{props.title}</h1>
                <Text/>
                <aside className={styles['description-box__time-info']}>
                    <span className={styles['description-box__time-icon']}>
                        <FontAwesomeIcon icon={faClock}/>
                    </span>
                    <span className={styles['description-box__time-qty']}>{props.duration}m</span>
                    <span className={styles['description-box__time-level']}>Beginner</span>
                </aside>
            </div>
        </div>
    )
}

const Ingredients = () => {
    return (
        <div className={styles['ingredients']}>
            <h3>Ingredients</h3>
            <Text/>
        </div>
    )
}

const RecipeSection = () => {
    return (
        <div className={styles['instructions']}>
            <h3 className={styles['instructions-title']}>Instructions</h3>
            <ul className={styles['instructions-list']}>
                <li><span>1</span><Text/></li>
                <li><span>2</span><Text/></li>
                <li><span>3</span><Text/></li>
                <li><span>4</span><Text/></li>
            </ul>
        </div>
    )
}

const Tip = () => {
    return (
        <div className={styles.tip}>
            <h3>Tip!</h3>
            <Text/>
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