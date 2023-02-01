import styles from './main-page.module.scss';
import photo from '../../assets/hf.jpg';

export default function () {
    return (
        <div className={styles.container}>
            Main-Page
            <div className={styles['image-container']}></div>
            <img src={photo} width={100} height={100}/>
        </div>
    )
}