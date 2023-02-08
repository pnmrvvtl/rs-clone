import React from 'react'
import styles from '../../pages/results-page/results-page.module.scss'
import {BMI, Macros} from "../../types/fitness-api-types";

export default function BMI(props: {macros: Macros, bmi: BMI}) {
    const {bmi, macros} = props;


  return (
    <section className={styles["bmi-results"]}>
      <div className={styles.title}>Daily caloric:
        <span className={styles.value}> {macros.calorie}</span>
      </div>
      <div className={styles.title}>Your goal:
        <span className={styles.value}> mild weight loss</span>
      </div>
      <div className={styles.title}>BMI:
        <span className={styles.value}> {bmi.bmi}</span>
      </div>
      <div className={styles.title}>Ideal weight:
        <span className={styles.value}> 75 kg</span>
      </div>
    </section>
  )

}