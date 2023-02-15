import React, { createContext } from 'react';
import { UserData } from '../types/user-data';
import { MealsByParametersResponse } from '../types/meals-api-types';
import { BMI, Calory, Macros, IdealWeight } from '../types/fitness-api-types';

interface IUserContext {
  userData: UserData;
  setUserData: React.Dispatch<UserData>;
  mealsByParametersResponse: MealsByParametersResponse;
  setMealsByParametersResponse: React.Dispatch<MealsByParametersResponse>;
  fitnessApiResponse: { bmi: BMI; macros: Macros; calories: Calory; idealWeight: IdealWeight };
  setFitnessApiResponse: React.Dispatch<{
    bmi: BMI;
    macros: Macros;
    calories: Calory;
    idealWeight: IdealWeight;
  }>;
  favouritesMeals: number[];
  setFavouritesMeals: React.Dispatch<number[]>;
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
    weightProgramm: '',
    pastPains: '',
    foodCookTime: '',
    foodCookSkills: '',
    foodCookCarb: '',
    foodCookProtein: '',
    mealsCount: 3,
  },
  setUserData: () => false,
  setMealsByParametersResponse: () => false,
  mealsByParametersResponse: {
    number: 0,
    offset: 0,
    results: [],
    totalResults: 0,
  },
  fitnessApiResponse: {
    bmi: {
      bmi: 0,
      health: '',
      healthy_bmi_range: '',
    },
    calories: {
      bmr: 0,
      goals: {
        'maintain weight': 0,
        'Mild weight loss': {
          calory: 0,
        },
        'Weight loss': {
          calory: 0,
        },
        'Extreme weight loss': {
          calory: 0,
        },
        'Mild weight gain': {
          calory: 0,
        },
        'Weight gain': {
          calory: 0,
        },
        'Extreme weight gain': {
          calory: 0,
        },
      },
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
      },
    },
    idealWeight: {
      Hamwi: 0,
      Devine: 0,
      Miller: 0,
      Robinson: 0,
    },
  },
  favouritesMeals: [],
  setFavouritesMeals: () => false,
  setFitnessApiResponse: () => false,
});
