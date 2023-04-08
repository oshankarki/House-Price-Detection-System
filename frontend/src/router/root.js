import { createBrowserRouter } from "react-router-dom";

import Home from "client/home/views/Index";
import Login from "auth/Login";
import Register from "auth/Register";
import ClientLayout from "client/common/Layout"
import Predict from "predict/predict";





const router = createBrowserRouter([
    {
        element: <ClientLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            ,
            {
                path: "predict",
                element: <Predict />
            }
        ]
    }
]);

export default router;