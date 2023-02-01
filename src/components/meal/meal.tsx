import styles from './meal.module.scss';
import photo from "../../assets/hf.jpg";

export default function Meal() {
    return (
        <div className={styles.container}>
            Meal
            <div className={styles['image-container']}></div>
            <img src={photo} width={100} height={100}/>
        </div>
    )
}