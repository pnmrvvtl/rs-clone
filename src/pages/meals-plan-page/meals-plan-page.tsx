import styles from './meals-plan.page.module.scss';
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/user-context';
import {MealCardInfo} from "../../types/meal-card-info";
import MealCard from "../../components/meal-card/meal-card";
import Carousel from 'react-material-ui-carousel'
import {MealsByParametersResponse} from "../../types/meals-api-types";
import MealsApi from "../../api/meals-api";


export default function MealsPlanPage() {
    const {userData} = useContext(UserContext);
    let [someMeals, setSomeMeals] = useState<MealsByParametersResponse>();

    useEffect(() => {
        //api calls here

        new MealsApi().getMealsByParameters({
            query: 'pasta',
            cuisine: 'italian',
            excludeCuisine: 'greek',
            diet: 'vegetarian',
            intolerances: 'gluten',
            equipment: 'pan',
            includeIngredients: 'tomato,cheese',
            excludeIngredients: 'eggs',
            type: 'main course',
            instructionsRequired: true,
            fillIngredients: false,
            addRecipeInformation: false,
            titleMatch: 'Crock Pot',
            maxReadyTime: 20,
            ignorePantry: true,
            sort: 'calories',
            sortDirection: 'asc',
            minCarbs: 10,
            maxCarbs: 100,
            minProtein: 10,
            maxProtein: 100,
            minCalories: 50,
            maxCalories: 800,
            minFat: 10,
            maxFat: 100,
            minAlcohol: 0,
            maxAlcohol: 100,
            minCaffeine: 0,
            maxCaffeine: 100,
            minCopper: 0,
            maxCopper: 100,
            minCalcium: 0,
            maxCalcium: 100,
            minCholine: 0,
            maxCholine: 100,
            minCholesterol: 0,
            maxCholesterol: 100,
            minFluoride: 0,
            maxFluoride: 100,
            minSaturatedFat: 0,
            maxSaturatedFat: 100,
            minVitaminA: 0,
            maxVitaminA: 100,
            minVitaminC: 0,
            maxVitaminC: 100,
            minVitaminD: 0,
            maxVitaminD: 100,
            minVitaminE: 0,
            maxVitaminE: 100,
            minVitaminK: 0,
            maxVitaminK: 100,
            minVitaminB1: 0,
            maxVitaminB1: 100,
            minVitaminB2: 0,
            maxVitaminB2: 100,
            minVitaminB5: 0,
            maxVitaminB5: 100,
            minVitaminB3: 0,
            maxVitaminB3: 100,
            minVitaminB6: 0,
            maxVitaminB6: 100,
            minVitaminB12: 0,
            maxVitaminB12: 100,
            minFiber: 0,
            maxFiber: 100,
            minFolate: 0,
            maxFolate: 100,
            minFolicAcid: 0,
            maxFolicAcid: 100,
            minIodine: 0,
            maxIodine: 100,
            minIron: 0,
            maxIron: 100,
            minMagnesium: 0,
            maxMagnesium: 100,
            minManganese: 0,
            maxManganese: 100,
            minPhosphorus: 0,
            maxPhosphorus: 100,
            minPotassium: 0,
            maxPotassium: 100,
            minSelenium: 0,
            maxSelenium: 100,
            minSodium: 0,
            maxSodium: 100,
            minSugar: 0,
            maxSugar: 100,
            minZinc: 0,
            maxZinc: 100,
            offset: 0,
            number: 10,
            limitLicense: false,
            ranking: 2
        }).then((res) => setSomeMeals(res));
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
    console.log(`somemeals = ${someMeals}`);
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
                            // display: 'none',
                            backgroundColor: 'rgb(200,200,200)',
                            color: 'rgba(5, 170, 88)'
                        }
                    }}
                    navButtonsWrapperProps={{
                        style: {
                            top: '-15%',
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
                    {someMeals?.results.map((item, i) => (
                            <MealCard key={i} mealCardInfo={
                                {difficult: 'hard', duration: 45, rating: 4.5, keto: 6, day: '', foodTime: '', imageUrl: item.image,
                                title: item.title}
                            } isColumnLayout={false}/>))
                    }
                </div>
            </section>
            {/*<section style={{width: '200px'}}>*/}
            {/*    {JSON.stringify(userData)}*/}
            {/*</section>*/}
        </div>
    )
}