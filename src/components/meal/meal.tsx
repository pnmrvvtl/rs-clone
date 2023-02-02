import styles from './meal.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MealPopup from "../meal-popup/meal-popup";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function Meal() {
    return (
        <div className={styles.container}>
            {/* <MealPopup /> */}
            <div className={styles['background-img']}>
                <div className={styles['content-wrapper']}>
                    <DescriptionBox />
                </div>
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

const DescriptionBox = () => {
    return (
        <div className={styles['description-box-wrapper']}>
            <div className={styles['description-box']}>
                <h1 className={styles['description-box__title']}>hear will be long dish name</h1>
                <Text />
                <aside className={styles['description-box__time-info']}>
                    <span className={styles['description-box__time-icon']}>
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span className={styles['description-box__time-qty']}>10m</span>
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
    )
}