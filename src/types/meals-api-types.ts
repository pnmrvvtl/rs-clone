export type MealsApiResponse<T> = {
    data: T
    status: number
    result: string
}

export interface MealsByParametersQuery {
    addRecipeNutrition: boolean,
    query: string,
    cuisine: string | undefined,
    excludeCuisine: string | undefined,
    diet: string | undefined,
    intolerances: string | undefined,
    equipment: string | undefined,
    includeIngredients: string | undefined,
    excludeIngredients: string | undefined,
    type: string | undefined,
    instructionsRequired: boolean,
    fillIngredients: boolean,
    addRecipeInformation: boolean,
    titleMatch: string | undefined,
    maxReadyTime: number,
    ignorePantry: boolean,
    sort: string,
    sortDirection: 'asc' | 'desc' | '',
    minCarbs: number | undefined,
    maxCarbs: number | undefined,
    minProtein: number | undefined,
    maxProtein: number | undefined,
    minCalories: number | undefined,
    maxCalories: number | undefined,
    minFat: number | undefined,
    maxFat: number | undefined,
    minAlcohol: number | undefined,
    maxAlcohol: number | undefined,
    minCaffeine: number | undefined,
    maxCaffeine: number | undefined,
    minCopper: number | undefined,
    maxCopper: number | undefined,
    minCalcium: number | undefined,
    maxCalcium: number | undefined,
    minCholine: number | undefined,
    maxCholine: number | undefined,
    minCholesterol: number | undefined,
    maxCholesterol: number | undefined,
    minFluoride: number | undefined,
    maxFluoride: number | undefined,
    minSaturatedFat: number | undefined,
    maxSaturatedFat: number | undefined,
    minVitaminA: number | undefined,
    maxVitaminA: number | undefined,
    minVitaminC: number | undefined,
    maxVitaminC: number | undefined,
    minVitaminD: number | undefined,
    maxVitaminD: number | undefined,
    minVitaminE: number | undefined,
    maxVitaminE: number | undefined,
    minVitaminK: number | undefined,
    maxVitaminK: number | undefined,
    minVitaminB1: number | undefined,
    maxVitaminB1: number | undefined,
    minVitaminB2: number | undefined,
    maxVitaminB2: number | undefined,
    minVitaminB5: number | undefined,
    maxVitaminB5: number | undefined,
    minVitaminB3: number | undefined,
    maxVitaminB3: number | undefined,
    minVitaminB6: number | undefined,
    maxVitaminB6: number | undefined,
    minVitaminB12: number | undefined,
    maxVitaminB12: number | undefined,
    minFiber: number | undefined,
    maxFiber: number | undefined,
    minFolate: number | undefined,
    maxFolate: number | undefined,
    minFolicAcid: number | undefined,
    maxFolicAcid: number | undefined,
    minIodine: number | undefined,
    maxIodine: number | undefined,
    minIron: number | undefined,
    maxIron: number | undefined,
    minMagnesium: number | undefined,
    maxMagnesium: number | undefined,
    minManganese: number | undefined,
    maxManganese: number | undefined,
    minPhosphorus: number | undefined,
    maxPhosphorus: number | undefined,
    minPotassium: number | undefined,
    maxPotassium: number | undefined,
    minSelenium: number | undefined,
    maxSelenium: number | undefined,
    minSodium: number | undefined,
    maxSodium: number | undefined,
    minSugar: number | undefined,
    maxSugar: number | undefined,
    minZinc: number | undefined,
    maxZinc: number | undefined,
    offset: number | undefined,
    number: number | undefined,
    limitLicense: boolean,
    ranking: number | undefined
}

export interface Result {
    vegetarian: boolean
    vegan: boolean
    glutenFree: boolean
    dairyFree: boolean
    veryHealthy: boolean
    cheap: boolean
    veryPopular: boolean
    sustainable: boolean
    lowFodmap: boolean
    weightWatcherSmartPoints: number
    gaps: string
    preparationMinutes: number
    cookingMinutes: number
    aggregateLikes: number
    healthScore: number
    creditsText: string
    sourceName: string
    pricePerServing: number
    extendedIngredients: ExtendedIngredient[]
    id: number
    title: string
    readyInMinutes: number
    servings: number
    sourceUrl: string
    image: string
    imageType: string
    summary: string
    cuisines: string[]
    dishTypes: string[]
    diets: string[]
    occasions: any[]
    analyzedInstructions: AnalyzedInstruction[]
    usedIngredientCount: number
    missedIngredientCount: number
    missedIngredients: MissedIngredient[]
    usedIngredients: UsedIngredient[]
    unusedIngredients: any[]
    likes: number
    nutrition: Nutrition
}

export interface ExtendedIngredient {
    id: number
    aisle: string
    image: string
    consistency: string
    name: string
    nameClean: string
    original: string
    originalName: string
    amount: number
    unit: string
    meta: string[]
    measures: Measures
}

export interface Measures {
    us: Us
    metric: Metric
}

export interface Us {
    amount: number
    unitShort: string
    unitLong: string
}

export interface Metric {
    amount: number
    unitShort: string
    unitLong: string
}

export interface AnalyzedInstruction {
    name: string
    steps: Step[]
}

export interface Step {
    number: number
    step: string
    ingredients: Ingredient[]
    equipment: Equipment[]
    length?: Length
}

export interface Ingredient {
    id: number
    name: string
    localizedName: string
    image: string
}

export interface Equipment {
    id: number
    name: string
    localizedName: string
    image: string
}

export interface Length {
    number: number
    unit: string
}

export interface MissedIngredient {
    id: number
    amount: number
    unit: string
    unitLong: string
    unitShort: string
    aisle: string
    name: string
    original: string
    originalName: string
    meta: string[]
    extendedName?: string
    image: string
}

export interface UsedIngredient {
    id: number
    amount: number
    unit: string
    unitLong: string
    unitShort: string
    aisle: string
    name: string
    original: string
    originalName: string
    meta: string[]
    extendedName?: string
    image: string
}

export interface Nutrition {
    nutrients: Nutrient[]
}

export interface Nutrient {
    name: string
    amount: number
    unit: string
}

export interface MealsByParametersResponse {
    results: Result[]
    offset: number
    number: number
    totalResults: number
}

export interface MealByIdResponse {
    id: number,
    title: string,
    image: string,
    readyInMinutes: number,
}