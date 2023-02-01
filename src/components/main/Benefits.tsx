import React from 'react'
import styles from '../../pages/main-page/main-page.module.scss'
import motive from '../../assets/image/motivate.svg'
import life from '../../assets/image/life.svg'
import peace from '../../assets/image/peace.svg'
import simple from '../../assets/image/simple.svg'

export default function Benefits() {
  const benefits = [
    {
      img: `${motive}`,
      title: 'Stay motivated',
      text: 'Connect with thousands of people on similar journeys. It’s better together!'
    },
    {
      img: `${simple}`,
      title: 'Delight in simplicity',
      text: 'Weight loss minus the guessing and counting. Just follow along.'
    },
    {
      img: `${life}`,
      title: 'Take your life back',
      text: 'Countless members have lost weight and improved their health.'
    },
    {
      img: `${peace}`,
      title: 'Feel peace of mind',
      text: 'We only give advice we can back up with strong science.'
    }
  ]

  return (
    <section className={styles.benefits}>
      <h2 className={styles["benefits-title"]}>Healthy, simple & effective weight loss</h2>
      <ul className={styles["benefits-list"]}>
        {benefits.map((benefit, id) => (
          <li key={id} className={styles.benefit}>
            <img className={styles["benefit-img"]} src={benefit.img} alt="motivated"></img>
            <div className={styles["benefit-title"]}>{benefit.title}</div>
            <span className={styles["benefit-text"]}>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <button className={styles["benefit-btn"]}>Start free trial</button>
    </section>
  )
}