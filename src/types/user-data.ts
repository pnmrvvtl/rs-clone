export type UserData = {
  isEditedByUser: boolean;
  currentAge: number;
  cmHeight: number;
  currentKgWeight: number;
  goalKgWeight: number;
  selectedSex: string;
  currentGoals: string[];
  healthConditions: string[];
  weightProgramm: string;
  foodAtTheMoment: string[];
  foodScenario: string[];
  foodCuisines: string[];
  foodKinds: string[];
  foodAvoidProteins: string[];
  foodAvoidOthers: string[];
  foodBudget: string;
  basicActivities: string;
  pastPains: string;
  foodCookTime: string;
  foodCookSkills: string;
  foodCookCarb: string;
  foodCookProtein: string;
  mealsCount: number;
};

export type User = {
  uid: string;
  email: string;
};

export enum UserStatus {
  NEW = 'new',
  OLD = 'old',
  UNSET = '',
}