export type FitnessApiResponse<T> = {
  data: T;
  status: number;
  result: string;
};

export interface BMIParams {
  age: number;
  weight: number;
  height: number;
}

export interface DailyCaloryParams extends BMIParams {
  gender: string;
  activitylevel: number | string;
}

export type IdealWeightParams = Pick<DailyCaloryParams, 'gender' | 'height'>;

export interface MacrosParams extends DailyCaloryParams {
  goal: string;
}

export type CaloryWeight = {
  calory: number;
};

export type CaloryGoals = {
  'maintain weight': number;
  'Mild weight loss': CaloryWeight;
  'Weight loss': CaloryWeight;
  'Extreme weight loss': CaloryWeight;
  'Mild weight gain': CaloryWeight;
  'Weight gain': CaloryWeight;
  'Extreme weight gain': CaloryWeight;
};

export type Calory = {
  bmr: number;
  goals: CaloryGoals;
};

export type BMI = {
  bmi: number;
  health: string;
  healthy_bmi_range: string;
};

export type Macros = {
  calorie: number;
  balanced: {
    protein: number;
    fat: number;
    carbs: number;
  };
  lowfat: {
    protein: number;
    fat: number;
    carbs: number;
  };
  lowcarbs: {
    protein: number;
    fat: number;
    carbs: number;
  };
  highprotein: {
    protein: number;
    fat: number;
    carbs: number;
  };
};

export type IdealWeight = {
  Hamwi: number;
  Devine: number;
  Miller: number;
  Robinson: number;
};