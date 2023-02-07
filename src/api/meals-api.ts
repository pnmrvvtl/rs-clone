import {mealsApiKey} from "../api-key";
import axios from "axios";
import {
    MealByIdResponse,
    MealsByParametersQuery,
    MealsByParametersResponse,
} from "../types/meals-api-types";

export default class MealsApi {
    baseUrl: string
    headers: Record<string, string>

    constructor(
        baseUrl: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        headers: Record<string, string> = {
            'X-RapidAPI-Key': mealsApiKey,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    ) {
        this.baseUrl = baseUrl
        this.headers = headers
    }

    async getData<QueryParamsType, ResponseParamsType>(path: string, queryParams: QueryParamsType | undefined): Promise<ResponseParamsType> {
        const options = {
                method: 'GET',
                url: `${this.baseUrl}/${path}`,
                params: queryParams,
                headers: {
                    'X-RapidAPI-Key': '10cad0d3femshd472710c018634bp1633dbjsnca6775c47de1',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };
        const response = await axios.request(options);
        console.log(response);
        if (response.status === 200) {
            console.log(response.data)
            return await response.data;
        } else {
            throw new Error(`Error in getting meals API, path = ${path},  query = ${JSON.stringify(queryParams)}`);
        }
    }

    async getMealsByParameters(params: MealsByParametersQuery): Promise<MealsByParametersResponse> {
        return await this.getData<MealsByParametersQuery, MealsByParametersResponse>('recipes/complexSearch', params);
    }

    async getMealById(mealId: number): Promise<MealByIdResponse> {
        return await this.getData<undefined, MealByIdResponse>(`recipes/${mealId}/information`, undefined);
    }
}