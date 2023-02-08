
export type FitnessApiResponse<T> = {
    data: T
    status: number
    result: string
}
export interface BMIParams {
    age: number
    weight: number
    height: number
}

export interface DailyCaloryParams extends BMIParams {
    gender: string,
    activitylevel: string
}

export interface MacrosParams extends DailyCaloryParams {
    goal: string
}

export type Calory = {
    bmr: number,
    goals: {
        maintaine: number,
        mildLoss: {
            weigth: string,
            calory: number
        },
        loss: {
            weigth: string,
            calory: number
        },
        extremeLoss: {
            weigth: string,
            calory: number
        },
        mildGain: {
            weigth: string,
            calory: number
        },
        gain: {
            weigth: string,
            calory: number
        },
        extremeGain: {
            weigth: string,
            calory: number
        }
    }
}

export type BMI = {
    bmi: number
    health: string
    healthy_bmi_range: string
}

export type Macros = {
    calorie: number,
    balanced: {
        protein: number
        fat: number
        carbs: number
    },
    lowfat: {
        protein: number
        fat: number
        carbs: number
    },
    lowcarbs: {
        protein: number
        fat: number
        carbs: number
    },
    highprotein: {
        protein: number
        fat: number
        carbs: number
    }
}