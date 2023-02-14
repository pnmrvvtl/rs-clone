import styles from "./error-page.module.scss";
import fork from '../../assets/image/forks.jpg'

export default function ErrorPage() {
  return (
    <div className={styles.error}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.text}>
          The Page You Are Looking For Was Not Found
        </p>
        <img className={styles['error-image']} src={fork}></img>
    </div>
  );
}
