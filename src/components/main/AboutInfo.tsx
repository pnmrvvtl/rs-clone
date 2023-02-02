import React from 'react'
import styles from '../../pages/main-page/main-page.module.scss'

export default function AboutInfo() {
  return (
    <section className={styles["about"]}>
      <h1 className={styles["about-title"]}>A healthier life starts now!</h1>
      <h5 className={styles["about-subtitle"]}>
        Custom meal plans, delicious recipes and grocery lists <br/> to help you stay fit and feel better.
      </h5>
      <div className={styles["about-img"]}></div>
      <button className={styles["about-btn"]}>Start free trial</button>
    </section>
  )
}
