import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import BMI from '../../components/results/bmi';
import styles from '../../pages/results-page/results-page.module.scss'
import { UserContext } from "../../context/user-context";
import Article from '../../components/results/article';
import BmiChart from '../../components/results/bmi-chart';
import MealPlan from '../../components/results/meal-plan';
import GymMap from '../../components/results/gymMap';
import ErrorPage from "../error-page/error-page";

export default function ResultsPage() {
    const { userData,fitnessApiResponse } = useContext(UserContext);
    const { bmi, calories, macros, idealWeight} = fitnessApiResponse;
    useEffect(() => {
        //api calls here
 
    }, [/*userData*/]);

    if(!userData.isEditedByUser) {
        return <ErrorPage/>;
    }

    return (
        <main className={styles.content}>
            <Article/>
            <h1 className={styles["result-title"]}>Your results</h1>
            <section className={styles.bmi}>
                <BMI macros={macros} bmi={bmi} idealWeight={idealWeight} calories={calories}/>
                <BmiChart /> 
            </section>
            <MealPlan />
            <GymMap/>
        </main>

    )
}