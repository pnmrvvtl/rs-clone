import React from 'react'
import styles from '../../pages/results-page/results-page.module.scss'

export default function BMI() {

  return (
    <section className={styles["bmi-results"]}>
      <div className={styles.title}>Daily caloric:
        <span className={styles.value}> 1705</span>
      </div>
      <div className={styles.title}>Your goal:
        <span className={styles.value}> mild weight loss</span>
      </div>
      <div className={styles.title}>BMI:
        <span className={styles.value}> 20.06</span>
      </div>
      <div className={styles.title}>Ideal weight:
        <span className={styles.value}> 75 kg</span>
      </div>
    </section>
  )

}