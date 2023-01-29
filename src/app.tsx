import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import HistoryPage from "./pages/history-page/history-page";
import ErrorPage from "./pages/error-page/error-page";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation/>} errorElement={<Navigation><ErrorPage /></Navigation>}>
            <Route index element={<h2>Index</h2>}/>
            <Route path="location" element={<h2>Location</h2>}/>
            <Route path="today" element={<h2>Today</h2>} />
            <Route path="week" element={<h2>History</h2>} />
            <Route path="history" element={<HistoryPage/>} />
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