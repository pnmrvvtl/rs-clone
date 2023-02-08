import React from 'react'
import styles from '../../pages/main-page/main-page.module.scss'
import step1 from '../../assets/image/main/step-1.jpg'
import step2 from '../../assets/image/main/step-2.jpg'
import step3 from '../../assets/image/main/step-3.jpg'
import {useNavigate} from "react-router-dom";

export default function Instuction() {
  const benefits = [
    {
      img: `${step1}`,
      title: 'Take the quiz',
      text: 'The free quiz only takes a few minutes.'
    },
    {
      img: `${step2}`,
      title: 'Get your personalized plan',
      text: 'We’ll create a meal plan that matches your preferences and needs.'
    },
    {
      img: `${step3}`,
      title: 'Take it one step at a time',
      text: 'Our expert guidance keeps you on the right track.'
    },
  ];

    const navigator = useNavigate();

    return (
    <section className={styles.instructions}>
      <h4 className={styles["benefits-sub"]}>HOW IT WORKS</h4>
      <h2 className={styles["benefits-subtitle"]}>You tell us your goals.</h2>
      <h2 className={styles["benefits-title"]}>We’ll help you get there.</h2>
      <ul className={styles["instructions-list"]}>
        {benefits.map((benefit, id) => (
          <li key={id} className={styles.instruction}>
            <img className={styles["instruction-img"]} src={benefit.img} alt="motivated"></img>
            <div className={styles["benefit-title"]}>{benefit.title}</div>
            <span className={styles["benefit-text"]}>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <button className={styles["benefit-btn"]} onClick={() => navigator('/data-collection')}>Start program</button>
    </section>
  )
}