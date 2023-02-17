import React from 'react'
import styles from '../../pages/results-page/results-page.module.scss'
import bowl from '../../assets/image/results/bowl.jpeg'
import measure from '../../assets/image/results/measure.jpeg'
import avocado from '../../assets/image/results/avocado.jpeg'
import shrimp from '../../assets/image/results/shrimp.jpeg'

export default function TopGalery() {
  return (
    <div className={styles["result-aticle"]}>
      <img src={measure} className={styles["result-img"]} alt="measure"></img>
      <img src={avocado} className={styles["result-img"]} alt="avocado"></img>
      <img src={bowl} className={styles["result-img"]} alt="bowl"></img>
      <img src={shrimp} className={styles["result-img"]} alt="shrimp"></img>
    </div>
  )
}
