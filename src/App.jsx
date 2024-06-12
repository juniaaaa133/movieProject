import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from './routes/layout/Main'
import { Home ,Detail, Upcoming, Popular, SearchPage} from './routes/page';
import { loader as homeLoader} from "./pages/home/Home"
import {loader as detailLoader} from "./pages/Detail/Detail"
import {loader as upcomingLoader} from './pages/upcoming/Upcoming'
import {loader as popularLoader} from './pages/popular/Popular'
import {loader as searchLoader} from './pages/searchPage/SearchPage'
import Error from "./pages/error/Error";

function App() {

const router = createBrowserRouter([
        {
            path : "/",
            element :<Main />,
            errorElement : <Error />,
            children : [
                {
                    index : true,
                    element : <Home />,
                    loader : homeLoader
                },
                {
                    path : '/upcomings',
                    element : <Upcoming />,
                    loader : upcomingLoader,
                },
                {
                    path : '/populars',
                    element : <Popular />,
                    loader : popularLoader
                },
                {
                    path : '/movies/:id',
                    element : <Detail />,
                    loader : detailLoader
                },
                {
                    path : '/movies/search-movies/:query',
                    element : <SearchPage />,
                    loader : searchLoader
                },
            ]
        }
    ])

return <RouterProvider router={router} />
}

export default App
