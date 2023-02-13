export type MealsApiResponse<T> = {
    data: T
    status: number
    result: string
}

export interface MealsByParametersQuery {
    query: string,
    addRecipeNutrition: boolean,
    cuisine?: string,
    excludeCuisine?: string,
    diet?: string,
    intolerances?: string,
    equipment?: string,
    includeIngredients?: string,
    excludeIngredients?: string,
    type?: string,
    instructionsRequired: boolean,
    fillIngredients: boolean,
    addRecipeInformation: boolean,
    titleMatch?: string,
    maxReadyTime?: number,
    ignorePantry?: boolean,
    sort?: string,
    sortDirection?: 'asc' | 'desc' | '',
    minCarbs?: number,
    maxCarbs?: number,
    minProtein?: number,
    maxProtein?: number,
    minCalories?: number,
    maxCalories?: number,
    minFat?: number,
    maxFat?: number,
    minAlcohol?: number,
    maxAlcohol?: number,
    minCaffeine?: number,
    maxCaffeine?: number,
    minCopper?: number,
    maxCopper?: number,
    minCalcium?: number,
    maxCalcium?: number,
    minCholine?: number,
    maxCholine?: number,
    minCholesterol?: number,
    maxCholesterol?: number,
    minFluoride?: number,
    maxFluoride?: number,
    minSaturatedFat?: number,
    maxSaturatedFat?: number,
    minVitaminA?: number,
    maxVitaminA?: number,
    minVitaminC?: number,
    maxVitaminC?: number,
    minVitaminD?: number,
    maxVitaminD?: number,
    minVitaminE?: number,
    maxVitaminE?: number,
    minVitaminK?: number,
    maxVitaminK?: number,
    minVitaminB1?: number,
    maxVitaminB1?: number,
    minVitaminB2?: number,
    maxVitaminB2?: number,
    minVitaminB5?: number,
    maxVitaminB5?: number,
    minVitaminB3?: number,
    maxVitaminB3?: number,
    minVitaminB6?: number,
    maxVitaminB6?: number,
    minVitaminB12?: number,
    maxVitaminB12?: number,
    minFiber?: number,
    maxFiber?: number,
    minFolate?: number,
    maxFolate?: number,
    minFolicAcid?: number,
    maxFolicAcid?: number,
    minIodine?: number,
    maxIodine?: number,
    minIron?: number,
    maxIron?: number,
    minMagnesium?: number,
    maxMagnesium?: number,
    minManganese?: number,
    maxManganese?: number,
    minPhosphorus?: number,
    maxPhosphorus?: number,
    minPotassium?: number,
    maxPotassium?: number,
    minSelenium?: number,
    maxSelenium?: number,
    minSodium?: number,
    maxSodium?: number,
    minSugar?: number,
    maxSugar?: number,
    minZinc?: number,
    maxZinc?: number,
    offset?: number,
    number?: number,
    limitLicense?: boolean,
    ranking?: number
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
    // nutrients: Nutrient[]
    caloricBreakdown: any
    flavonoids: any
    ingredients: any
    nutrients: any
    properties: any
    weightPerServing: any
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