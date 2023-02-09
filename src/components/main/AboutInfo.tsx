import React from 'react'
import styles from '../../pages/main-page/main-page.module.scss'
import {useNavigate} from "react-router-dom";

export default function AboutInfo() {
  const navigator = useNavigate();

  return (
    <section className={styles["about"]}>
      <h1 className={styles["about-title"]}>A healthier life starts now!</h1>
      <h5 className={styles["about-subtitle"]}>
        Custom meal plans, delicious recipes and grocery lists <br/> to help you stay fit and feel better.
      </h5>
      <button className={styles["about-btn"]} onClick={() => navigator('/data-collection')}>Start program</button>
    </section>
  )
}
