import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import ErrorPage from "./pages/error-page/error-page";
import MainPage from "./pages/main-page/main-page";
import DataPage from "./pages/data-page/data-page";
import ResultsPage from "./pages/results-page/results-page";
import Meal from "./components/meal/meal";
import MealPopup from "./components/meal-popup/meal-popup";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation/>} errorElement={<Navigation><ErrorPage /></Navigation>}>
            <Route index element={<MainPage/>}/>
            <Route path="data" element={<DataPage/>}/>
            <Route path="results" element={<ResultsPage/>} />
            <Route path="meals" element={<Meal/>} />
            <Route path="meal-popup" element={<MealPopup/>} />
        </Route>
    )
);

export const App = () => {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    )
}