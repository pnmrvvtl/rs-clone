import React, { useContext, useEffect } from 'react';

import { UserContext } from "../../context/user-context";
import BMI from '../../components/results/bmi';
import BmiChart from '../../components/results/bmi-chart';
import MealPlan from '../../components/results/meal-plan';
import GymMap from '../../components/results/gymMap';
import ErrorPage from "../error-page/error-page";
import TopGalery from '../../components/results/top-galery';

import styles from '../../pages/results-page/results-page.module.scss'

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
            <TopGalery/>
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