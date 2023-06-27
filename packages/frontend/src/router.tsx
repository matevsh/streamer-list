import {createBrowserRouter} from "react-router-dom";
import {Root} from "./pages/Root.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    }
])