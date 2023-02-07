import React from 'react'
import styles from '../../pages/results-page/results-page.module.scss'

export default function MealPlan() {

  return (
    <section className={styles["meal-plan"]}>
     <h2 className={styles["plan-title"]}>Meal plans designed for your results</h2>
     <p className={styles["plan-text"]}>We do the planning so you can focus on cooking and <br/> enjoying healthy, delicious food.</p>
     <button className={styles["plan-button"]}>Get my meal plan</button>
    </section>
  )

}   