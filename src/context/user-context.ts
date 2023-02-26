import React, { createContext } from 'react';
import { User, UserData } from '../types/user-data';
import { ResultMeal } from '../types/meals-api-types';
import { BMI, Calory, Macros, IdealWeight, FitnessApiCollection } from '../types/fitness-api-types';

interface IUserContext {
  userData: UserData;
  user: User;
  setUser: React.Dispatch<User>;
  setUserData: React.Dispatch<UserData>;
  mealsByParametersResponse: ResultMeal[];
  setMealsByParametersResponse: React.Dispatch<ResultMeal[]>;
  fitnessApiResponse: FitnessApiCollection;
  setFitnessApiResponse: React.Dispatch<{
    bmi: BMI;
    macros: Macros;
    calories: Calory;
    idealWeight: IdealWeight;
  }>;
  favouritesMeals: ResultMeal[];
  setFavouritesMeals: React.Dispatch<ResultMeal[]>;
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
  mealsByParametersResponse: [],
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
  user: { uid: '', email: '' },
  setUser: () => false,
});
