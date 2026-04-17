
import { createBrowserRouter } from "react-router";
import Mainlayout from "../components/mainlayout/Mainlayout";
import Detailspage from "../components/pages/detailspage/Detailspage";
import Homepage from "../components/pages/Homepage/Homepage";
import Timeline from "../components/pages/timeline/Timeline";
import ErrorPage from "../components/pages/errorpage/ErrorPage";
import Stats from "../components/stats/Stats";

export const router = createBrowserRouter([{

        path:'/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                index: true,
               Component: Homepage,
            },
            {
              path: '/details',
              Component: Detailspage,
            },
            {
                path: '/timeline',
                Component: Timeline
            },
            {
                path: '/friends/:id',
                Component: Detailspage
            },
            {
                path: '/stats',
                Component: Stats,
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])
