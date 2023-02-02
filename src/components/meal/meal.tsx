import styles from './meal.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function Meal() {
    return (
        <div className={styles.container}>
            <div className={styles['background-img']}>
                <div className={styles['content-wrapper']}>
                    <DescriptionBox />
                </div>
            </div>
            <div className={styles['content-wrapper']}>
                <div className={styles.recipe}>
                    <RecipeIngredients />
                    <RecipeSection />
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

const RecipeIngredients = () => {
    return (
        <div className={styles['recipe-ingredients']}>
            <h3>Ingredients</h3>
            <Text />
        </div>
    )
}

const RecipeSection = () => {
    return (
        <div className={styles['recipe-section']}>
            <h3 className={styles['recipe-steps-title']}>Instructions</h3>
            <ol className={styles['recipe-steps-list']}>
                <li><Text /></li>
                <li>some step</li>
                <li>some step</li>
                <li>some step</li>
                <li>some step</li>
                <li>some step</li>
            </ol>
        </div>
    )
}

const Text = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
        </div>
    )
}