import React, {createContext, useState} from "react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import ErrorPage from "./pages/error-page/error-page";
import MainPage from "./pages/main-page/main-page";
import DataPage from "./pages/data-page/data-page";
import ResultsPage from "./pages/results-page/results-page";
import Meal from "./components/meal/meal";
import MealPopup from "./components/meal-popup/meal-popup";
import {UserData} from "./types/user-data";
import {UserContext} from "./context/user-context";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation/>} errorElement={<Navigation><ErrorPage/></Navigation>}>
            <Route index element={<MainPage/>}/>
            <Route path="data" element={<DataPage/>}/>
            <Route path="results" element={<ResultsPage/>}/>
            <Route path="meals" element={<Meal/>}/>
            <Route path="meal-popup" element={<MealPopup/>}/>
        </Route>
    )
);

export const App = () => {
    const [userData, setUserData] = useState<UserData>({
        isEditedByUser: false,
        cmHeight: 170,
        currentKgWeight: 90,
        goalKgWeight: 70,
        selectedSex: '',
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
        pastPains: '',
        foodCookTime: '',
        foodCookSkills: '',
        foodCookCarb: '',
        foodCookProtein: '',
        mealsCount: 3,
        lunchLeftovers: '',
    });

    return (
        <>
            <React.StrictMode>
                <UserContext.Provider value={{userData, setUserData}}>
                    <RouterProvider router={router}/>
                </UserContext.Provider>
            </React.StrictMode>
        </>
    )
}