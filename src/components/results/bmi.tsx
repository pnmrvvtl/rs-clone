import React from 'react'
import styles from '../../pages/results-page/results-page.module.scss'
import {BMI, IdealWeight, Macros} from "../../types/fitness-api-types";
import { UserData } from '../../types/user-data';

export default function BMI(props: {macros: Macros, bmi: BMI, idealWeight: IdealWeight}) {
    const {bmi, macros, idealWeight} = props;
      
    const weightResponseValues = Object.values(idealWeight)
    const sumValues = weightResponseValues.reduce((sum, value) => sum + value, 0)
    const averageWeight = Math.ceil(sumValues / weightResponseValues.length)


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
        <span className={styles.value}> {averageWeight} kg</span>
      </div>
    </section>
  )

}