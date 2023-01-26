import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Navigation from "./components/navigation";
import Analytics from "./pages/analytics";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigation/>}>
            <Route index element={<h2>Index</h2>} />
            <Route path="game1" element={<h2>Game1</h2>} />
            <Route path="game2" element={<h2>Game2</h2>} />
            <Route path="game3" element={<h2>Game3</h2>} />
            <Route path="analytics" element={<Analytics/>} />
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