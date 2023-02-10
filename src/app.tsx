import React, { useEffect, useState } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import ErrorPage from "./pages/error-page/error-page";
import MainPage from "./pages/main-page/main-page";
import DataPage from "./pages/data-page/data-page";
import ResultsPage from "./pages/results-page/results-page";
import Meal from "./components/meal/meal";

import { UserData } from "./types/user-data";
import { UserContext } from "./context/user-context";
import { MealsByParametersResponse } from "./types/meals-api-types";
import MealsPlanPage from "./pages/meals-plan-page/meals-plan-page";
import { BMI, Calory, Macros, IdealWeight } from "./types/fitness-api-types";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation />} errorElement={<Navigation><ErrorPage /></Navigation>}>
            <Route index element={<MainPage />} />
            <Route path="meal/:id" element={<Meal />} />
            <Route path="data-collection" element={<DataPage />} />
            <Route path="research-results" element={<ResultsPage />} />
            <Route path="meals-page" element={<MealsPlanPage />} />
        </Route>
    )
);

export const App = () => {
    const localStorageUserData = localStorage.getItem('user-data');
    const localStorageMeals = localStorage.getItem('meals-data');
    const localStorageBMI = localStorage.getItem('bmi-data');
    const localStorageCalories = localStorage.getItem('calories-data');
    const localStorageMacros = localStorage.getItem('macros-data');
    const localStorageWeight = localStorage.getItem('weight-data')

    const isSavedToLocalStorage = localStorageUserData &&
        localStorageMeals &&
        localStorageBMI &&
        localStorageCalories &&
        localStorageMacros &&
        localStorageWeight;
    const [userData, setUserData] =
        useState<UserData>(isSavedToLocalStorage ? JSON.parse(localStorageUserData) :
            {
                isEditedByUser: false,
                currentAge: 0,
                cmHeight: 170,
                currentKgWeight: 90,
                goalKgWeight: 70,
                selectedSex: '',
                currentGoals: [],
                healthConditions: [],
                foodAtTheMoment: [],
                foodScenario: [],
                foodCuisines: [],
                foodKinds: [],
                foodAvoidProteins: [],
                foodAvoidOthers: [],
                foodBudget: '',
                basicActivities: '',
                weightProgramm: [],
                pastPains: '',
                foodCookTime: '',
                foodCookSkills: '',
                foodCookCarb: '',
                foodCookProtein: '',
                mealsCount: 3,
            });

    const [mealsByParametersResponse, setMealsByParametersResponse] =
        useState<MealsByParametersResponse>(isSavedToLocalStorage ? JSON.parse(localStorageMeals) : {
            number: 0,
            offset: 0,
            results: [],
            totalResults: 0
        });
    const [fitnessApiResponse, setFitnessApiResponse] =
        useState<{ bmi: BMI, macros: Macros, calories: Calory, idealWeight: IdealWeight }>(

            isSavedToLocalStorage ?
                {
                    bmi: JSON.parse(localStorageBMI),
                    calories: JSON.parse(localStorageCalories),
                    macros: JSON.parse(localStorageMacros),
                    idealWeight: JSON.parse(localStorageWeight)
                } : {
                    bmi: {
                        bmi: 0,
                        health: '',
                        healthy_bmi_range: ''
                    },
                    calories: {
                        bmr: 0,
                        goals: {
                            maintaine: 0,
                            mildLoss: {
                                weigth: '',
                                calory: 0
                            },
                            loss: {
                                weigth: '',
                                calory: 0
                            },
                            extremeLoss: {
                                weigth: '',
                                calory: 0
                            },
                            mildGain: {
                                weigth: '',
                                calory: 0
                            },
                            gain: {
                                weigth: '',
                                calory: 0
                            },
                            extremeGain: {
                                weigth: '',
                                calory: 0
                            }
                        }
                    },
                    macros: {
                        calorie: 0,
                        balanced: {
                            protein: 0,
                            fat: 0,
                            carbs: 0,
                        },
                        lowfat: {
                            protein: 0,
                            fat: 0,
                            carbs: 0,
                        },
                        lowcarbs: {
                            protein: 0,
                            fat: 0,
                            carbs: 0,
                        },
                        highprotein: {
                            protein: 0,
                            fat: 0,
                            carbs: 0,
                        }
                    },
                    idealWeight: {
                        Hamwi: 0,
                        Devine: 0,
                        Miller: 0,
                        Robinson: 0,
                    }
                });

    return (
        <>
            <React.StrictMode>
                <UserContext.Provider value={{
                    userData,
                    setUserData,
                    mealsByParametersResponse,
                    setMealsByParametersResponse,
                    fitnessApiResponse,
                    setFitnessApiResponse
                }}>
                    <RouterProvider router={router} />
                </UserContext.Provider>
            </React.StrictMode>
        </>
    )
}