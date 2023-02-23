import { DailyCaloryParams, BMIParams, IdealWeightParams, MacrosParams } from './../types/fitness-api-types';

import FitnessApi from '../api/fitness-api';

const dailyCaloryParams: DailyCaloryParams = {
  age: 18,
  gender: 'male',
  height: 180,
  weight: 80,
  activitylevel: 1,
};

describe('getDailyCaloric', () => {
  test('should get daily calory', async () => {
    const fakeFetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            calories: 2200,
          },
        }),
    });
    global.fetch = fakeFetch;
    const api = new FitnessApi('fakeurl');
    const result = await api.getDailyCalory(dailyCaloryParams);
    expect(result).toEqual({
      calories: 2200,
    });
  });
});

const bmiParams: BMIParams = {
  age: 26,
  weight: 80,
  height: 178,
};

describe('getBMI', () => {
  test('should get body mass index', async () => {
    const fakeFetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            bmi: 20,
          },
        }),
    });

    global.fetch = fakeFetch;
    const api = new FitnessApi('fakeurl');
    const result = await api.getBMI(bmiParams);
    expect(result).toEqual({
      bmi: 20,
    });
  });
});

const marcosParams: MacrosParams = {
  age: 25,
  gender: 'male',
  height: 180,
  weight: 70,
  activitylevel: '5',
  goal: 'extremelose',
};
describe('getMacrosAmount', () => {
  test('should get macronutrients', async () => {
    const fakeFetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            calorie: 1642.75,
            balanced: {
              protein: 97.0566866267464,
              fat: 45.249401197604705,
              carbs: 211.8196606786426,
            },
          },
        }),
    });

    global.fetch = fakeFetch;
    const api = new FitnessApi('fakeurl');
    const result = await api.getMacrosAmount(marcosParams);
    expect(result).toEqual({
      calorie: 1642.75,
      balanced: {
      protein: 97.0566866267464,
      fat: 45.249401197604705,
      carbs: 211.8196606786426,
      },
    });
  });
});

const idealWeightParams: IdealWeightParams = {
  gender: 'male',
  height: 185,
};

describe('getIdealWeight', () => {
  test('should get ideal weight', async () => {
    const fakeFetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            Hamwi: 77.34,
            Devine: 75.53,
            Miller: 71.85,
            Robinson: 73.09,
          },
        }),
    });

    global.fetch = fakeFetch;
    const api = new FitnessApi('fakeurl');
    const result = await api.getIdealWeight(idealWeightParams);
    expect(result).toEqual({
      Hamwi: 77.34,
      Devine: 75.53,
      Miller: 71.85,
      Robinson: 73.09,
    });
  });
});
