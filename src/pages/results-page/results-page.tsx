import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import BMI from '../../components/results/bmi';
import styles from '../../pages/results-page/results-page.module.scss'
import { UserContext } from "../../context/user-context";
import Article from '../../components/results/article';
import BmiChart from '../../components/results/bmi-chart';
import MealPlan from '../../components/results/meal-plan';
import GymMap from '../../components/results/gymMap';

export default function ResultsPage() {
    const { userData } = useContext(UserContext);

    useEffect(() => {
        //api calls here

    }, [/*userData*/]);

    return (
        <main className={styles.content}>
            <Article/>
            <h1 className={styles["result-title"]}>Your results</h1>
            <section className={styles.bmi}>
                <BMI />
                <BmiChart />
                {/* <section style={{width: '200px'}}>
               {JSON.stringify(userData)}
            </section> */}
            </section>
            <MealPlan />
            <GymMap/>
        </main>

    )
}