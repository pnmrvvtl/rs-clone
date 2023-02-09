import React, { createContext } from "react";
import { UserData } from "../types/user-data";
import { MealsByParametersResponse } from "../types/meals-api-types";
import { BMI, Calory, Macros, IdealWeight } from "../types/fitness-api-types";

interface IUserContext {
    userData: UserData,
    setUserData: React.Dispatch<UserData>,
    mealsByParametersResponse: MealsByParametersResponse,
    setMealsByParametersResponse: React.Dispatch<MealsByParametersResponse>,
    fitnessApiResponse: { bmi: BMI, macros: Macros, calories: Calory, idealWeight: IdealWeight },
     setFitnessApiResponse: React.Dispatch<{ bmi: BMI, macros: Macros, calories: Calory, idealWeight: IdealWeight }>
}

export const UserContext = createContext<IUserContext>({
    userData: {
        isEditedByUser: false,
        currentAge: 0,
        cmHeight: 170,
        currentKgWeight: 90,
        goalKgWeight: 70,
        selectedSex: 'male',
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
        pastPains: '',
        foodCookTime: '',
        foodCookSkills: '',
        foodCookCarb: '',
        foodCookProtein: '',
        mealsCount: 3,
        lunchLeftovers: '',
    },
    setUserData: () => false,
    setMealsByParametersResponse: () => false,
    mealsByParametersResponse: {
        number: 0,
        offset: 0,
        results: [],
        totalResults: 0
    },
    fitnessApiResponse: {
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
    },

    setFitnessApiResponse: () => false
})
