import styles from './meal.popup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MealPopup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div
                    onClick={closeWindow}
                    className={styles.xmark}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={styles['description']}>
                    <div className={styles['description__img']}></div>
                    <div className={styles['description__text']}>
                        <h3 className={styles['description__week-day-time']}>
                            MONDAY LUNCH
                        </h3>
                        <h2 className={styles['description__title']}>
                            Here will be long meal name
                        </h2>
                        <div className={styles['description__time-serving']}>
                            <span className={styles['description__time']}>10m</span>
                            <span className={styles['description__serving']}>1 serving</span>
                        </div>
                        <p className={styles['description__description-text']}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
                        </p>
                    </div>
                </div>
                <div className={styles['composition']}>
                    <div className={styles['composition__ingredients']}>
                        <h1 className={styles['composition__title']}>Ingredients</h1>
                        <ul className={styles['composition__list']}>
                            <li>75 ml mayonnaise</li>
                            <li>75 ml mayonnaise</li>
                            <li>75 ml mayonnaise</li>
                            <li>75 ml mayonnaise</li>
                            <li>75 ml mayonnaise</li>
                            <li>75 ml mayonnaise</li>
                        </ul>
                    </div>
                    <div className={styles['composition__other']}>
                        <div className={styles['composition__nutrients']}>
                            <h3 className={styles['composition__title']}>
                                High protein moderate low carb
                            </h3>
                            <div className={styles['composition__blocks']}>
                                <div className={styles['composition__block-carbs']}>
                                    <div className={styles['composition__block-line']}></div>
                                    <span className={styles['composition__block-name']}>NET CARBS</span>
                                    <span className={styles['composition__block-weight']}>7g</span>
                                    <span className={styles['composition__block-percent']}>4%</span>
                                </div>
                                <div className={styles['composition__block-protein']}>
                                    <div className={styles['composition__block-line']}></div>
                                    <span className={styles['composition__block-name']}>PROTEIN</span>
                                    <span className={styles['composition__block-weight']}>34g</span>
                                    <span className={styles['composition__block-percent']}>20%</span>
                                </div>
                                <div className={styles['composition__block-fat']}>
                                <div className={styles['composition__block-line']}></div>
                                    <span className={styles['composition__block-name']}>FAT</span>
                                    <span className={styles['composition__block-weight']}>58g</span>
                                    <span className={styles['composition__block-percent']}>76%</span>
                                </div>
                            </div>

                            <div className={styles['composition__line']}>
                                <div className={styles['composition__fiber']}>
                                    <span className={styles['name']}>FIBER</span>
                                    <span className={styles['property']}>4g</span>
                                </div>
                                <div className={styles['composition__total-carbs']}>
                                    <span className={styles['name']}>TOTAL CARBS</span>
                                    <span className={styles['property']}>10g</span>
                                </div>
                                <div className={styles['composition__satiety-score']}>
                                    <span className={styles['name']}>SATIETY SCORE</span>
                                    <span className={styles['property']}>48</span>
                                </div>
                            </div>

                            <div className={styles['instructions']}>
                                <h3 className={styles['instructions-title']}>Instructions</h3>
                                <ul className={styles['instructions-list']}>
                                    <li><span>1</span><Text /></li>
                                    <li><span>2</span><Text /></li>
                                    <li><span>3</span><Text /></li>
                                    <li><span>4</span><Text /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

const closeWindow = () => {
    console.log(1);
}

export { MealPopup }