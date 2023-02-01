import styles from './footer.module.scss';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a href='https://github.com/adwasar' target="_blank" rel="noopener noreferrer">Vladislav Bryl</a>
                <a href='https://github.com/pnmrvvtl' target="_blank" rel="noopener noreferrer">Vitalii Ponomarov</a>
                <a href='https://github.com/zhannach' target="_blank" rel="noopener noreferrer">Zhanna Chaikovska</a>
            </div>
            <div>2022Q3</div>
            <a href='https://rs.school/js/' target="_blank" rel="noopener noreferrer">
                <div className={styles.logo}></div>
            </a>
        </div>
    )
        ;
}