import styles from './meals-plan.page.module.scss';
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/user-context';
import {MealCardInfo} from "../../types/meal-card-info";
import MealCard from "../../components/meal-card/meal-card";
import Carousel from 'react-material-ui-carousel'
import {Link} from "react-router-dom";
import ErrorPage from "../error-page/error-page";
import ReactPaginate from 'react-paginate';


export default function MealsPlanPage() {
    const {userData, mealsByParametersResponse} = useContext(UserContext);

    useEffect(() => {
        //api calls here


    }, [/*userData*/]);

    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if (!userData.isEditedByUser) {
        return <ErrorPage/>;
    }

    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const dinnerIdeas = mealsByParametersResponse.results.slice(daysArray.length * ((userData.mealsCount || 3)), mealsByParametersResponse.results.length);
    const currentItems = dinnerIdeas.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(dinnerIdeas.length / itemsPerPage);

    const handlePageClick = (event: {selected: number}) => {
        const newOffset = (event.selected * itemsPerPage) % mealsByParametersResponse.results.length;
        setItemOffset(newOffset);
    };


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
                            return (<div key={idx} className={styles.meals}>
                                {
                                    mealsByParametersResponse.results.slice((elem - 1) * (userData.mealsCount || 3), elem * (userData.mealsCount || 3))
                                        .map((item, i) => {
                                            const meal = mealsByParametersResponse.results[(elem - 1) * (userData.mealsCount || 3) + i];
                                            return (
                                                <Link to={`/meal/${meal.id}`}>
                                                    <MealCard key={(i + 1) * elem} mealCardInfo={{
                                                        duration: meal.cookingMinutes + meal.readyInMinutes + meal.preparationMinutes,
                                                        day: daysArray[idx],
                                                        foodTime: i === 0 ? "Breakfast" : (i === 1 ? "Lunch" : "Dinner"),
                                                        imageUrl: meal.image,
                                                        title: meal.title,
                                                        calories: meal.nutrition.nutrients[0].amount,
                                                        protein: meal.nutrition.nutrients[1].amount,
                                                        carbs: meal.nutrition.nutrients[2].amount,
                                                        fats: meal.nutrition.nutrients[3].amount,
                                                        likes: meal.likes + meal.aggregateLikes
                                                    }} isColumnLayout={true}/>
                                                </Link>)
                                        })
                                }
                            </div>)
                        })
                    }
                </Carousel>
            </section>
            {/*<section className={styles['recipe-collections']}>*/}
            {/*    <h2>Recipe collections</h2>*/}
            {/*    <div className={styles.collection}>*/}
            {/*        <div className={styles['collection-item']}>On a budget</div>*/}
            {/*        <div className={styles['collection-item']}>High protein</div>*/}
            {/*        <div className={styles['collection-item']}>Top 30</div>*/}
            {/*        <div className={styles['collection-item']}>Chicken</div>*/}
            {/*        <div className={styles['collection-item']}>Family-friendly</div>*/}
            {/*        <div className={styles['collection-item']}>No-cook</div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className={styles['dinner-ideas']}>
                <h2>Dinner ideas</h2>
                <div className={styles['ideas-cards']}>
                    {currentItems.map((item, i) => (
                            <MealCard key={i} mealCardInfo={
                                {
                                    duration: item.cookingMinutes + item.readyInMinutes + item.preparationMinutes,
                                    day: '',
                                    foodTime: '',
                                    imageUrl: item.image,
                                    title: item.title,
                                    calories: item.nutrition.nutrients[0].amount,
                                    protein: item.nutrition.nutrients[1].amount,
                                    carbs: item.nutrition.nutrients[2].amount,
                                    fats: item.nutrition.nutrients[3].amount,
                                    likes: item.likes + item.aggregateLikes
                                }
                            } isColumnLayout={false}/>
                        ))
                    }
                </div>
            </section>
            {/*<section style={{width: '200px'}}>*/}
            {/*    {JSON.stringify(userData)}*/}
            {/*</section>*/}
            <ReactPaginate
                className={styles.pagination}
                activeClassName={styles.selected}
                nextClassName={styles.next}
                previousClassName={styles.previous}
                containerClassName={styles.next}
                disabledClassName={styles.disabled}
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
            />
        </div>
    )
}