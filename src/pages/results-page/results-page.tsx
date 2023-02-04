import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {UserContext} from '../../context/user-context';
import styles from './results-page.module.scss';
import {MealCardInfo} from "../../types/meal-card-info";
import MealCard from "../../components/meal-card/meal-card";
import Carousel from 'react-material-ui-carousel'


export default function ResultsPage() {
    console.log('render')
    const {userData} = useContext(UserContext);

    useEffect(() => {
        //api calls here

    }, [/*userData*/]);

    const meals: MealCardInfo[] = [
        {
            difficult: 'easy',
            day: 'Sun',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Sun',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Sun',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Mon',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Mon',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Mon',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Tue',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Tue',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Tue',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Wed',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Wed',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Wed',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Thu',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Thu',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Thu',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Fri',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Fri',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Fri',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Sat',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Sat',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
        {
            difficult: 'easy',
            day: 'Sat',
            duration: 15,
            foodTime: 'lunch',
            keto: 7,
            imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=500&h=275&fit=crop',
            rating: 4.6,
            title: 'Keto turkey plate'
        },
    ];
    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className={styles.container}>
            <section className={styles['current-meals']}>
                <h2>Next meals</h2>
                <Carousel
                    indicatorIconButtonProps={{
                        style: {
                            padding: '5px',
                            fontSize: '1rem',
                            color: 'rgba(149, 149, 149)', // 2
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: 'rgba(64, 64, 64)',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                        }
                    }}
                    indicatorContainerProps={{
                        style: {}

                    }}
                    IndicatorIcon={daysArray}
                    autoPlay={false}
                    animation={'slide'}
                    duration={700}
                    navButtonsProps={{
                        style: {
                            // display: 'none'
                        }
                    }}
                    navButtonsAlwaysVisible={true}>
                    {
                        Array.from([1, 2, 3, 4, 5, 6, 7]).map((elem, idx) => {
                            return (<div className={styles.meals}>
                                {meals.slice((elem - 1) * 3, elem * 3)
                                    .map((item, i) => (
                                        <MealCard key={(i + 1) * elem} mealCardInfo={item} isColumnLayout={true}/>))
                                }
                            </div>)
                        })
                    }
                </Carousel>
            </section>
            <section className={styles['recipe-collections']}>
                <h2>Recipe collections</h2>
                <div className={styles.collection}>
                    <div className={styles['collection-item']}>On a budget</div>
                    <div className={styles['collection-item']}>High protein</div>
                    <div className={styles['collection-item']}>Top 30</div>
                    <div className={styles['collection-item']}>Chicken</div>
                    <div className={styles['collection-item']}>Family-friendly</div>
                    <div className={styles['collection-item']}>No-cook</div>
                </div>
            </section>
            <section className={styles['dinner-ideas']}>
                <h2>Dinner ideas</h2>
                <div className={styles['ideas-cards']}>
                    {meals.slice(0, 10)
                        .map((item, i) => (
                            <MealCard key={i} mealCardInfo={item} isColumnLayout={false}/>))
                    }
                </div>
            </section>
            {/*<section style={{width: '200px'}}>*/}
            {/*    {JSON.stringify(userData)}*/}
            {/*</section>*/}
        </div>
    )
}