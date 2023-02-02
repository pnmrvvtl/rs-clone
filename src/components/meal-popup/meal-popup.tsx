import styles from './meal.popup.module.scss';

export default function MealPopup() {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                Modal <br/>
                window
            </div>
            <button className={styles.close}>Close</button>
        </div>
    )
}