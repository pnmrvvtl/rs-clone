import React, { createContext } from "react";
import {UserData} from "../types/user-data";
import {MealsByParametersResponse} from "../types/meals-api-types";

interface IUserContext {
    userData: UserData,
    setUserData:React.Dispatch<UserData>,
    mealsByParametersResponse: MealsByParametersResponse,
    setMealsByParametersResponse: React.Dispatch<MealsByParametersResponse>
}

export const UserContext = createContext<IUserContext>({userData:{
    isEditedByUser: false,
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
    }
});