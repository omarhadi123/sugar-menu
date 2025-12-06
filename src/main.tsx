import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import "./index.css";
import App from "./App.tsx";
import Confirm from "@features/confirm/components/Confirm.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/confirm",
            element: <Confirm />,
        },
    ],
    {
        basename: "/sugar-menu/",
    }
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
