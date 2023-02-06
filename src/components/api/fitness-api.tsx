import {
    BMIParams,
    DailyCaloryParams,
    MacrosParams, BMI, Calory, Macros,
    FitnessApiResponse
} from '../../types/fitness-api-types'
import { fitnessApiKey } from '../../api-key'


export default class FitnessApi {
    baseUrl: string
    headers: Record<string, string>

    constructor(
        baseUrl: string = 'https://fitness-calculator.p.rapidapi.com',
        headers: Record<string, string> = {
            'X-RapidAPI-Key': fitnessApiKey,
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    ) {
        this.baseUrl = baseUrl
        this.headers = headers
    }

    async getData<T, S>(path: string, queryParams: T): Promise<S> {
        let queryString = ''
        for (const key in queryParams) {
            queryString += `&${key}=${queryParams[key]}`
        }
        const response = await fetch(`${this.baseUrl}/${path}?${queryString.slice(1)}`, {
            headers: this.headers
        })
        const apiRes: FitnessApiResponse<S> = await response.json()
        return apiRes.data
    }

    async getDailyCalory(params: DailyCaloryParams): Promise<Calory> {
        return await this.getData<DailyCaloryParams, Calory>('dailycalorie', params)
    }

    async getBMI(params: BMIParams): Promise<BMI> {
        return await this.getData<BMIParams, BMI>('bmi', params)
    }

    async getMacrosAmount(params: MacrosParams): Promise<Macros> {
        return await this.getData<MacrosParams, Macros>('macrocalculator', params)
    }
}


