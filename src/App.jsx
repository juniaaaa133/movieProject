import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./routes/layout/Main";
import { ProductDetail,Home,About,Products } from './routes/page';
import { loader as productLoader } from "./components/Products";
import { loader as productDetailLoader } from "./components/ProductDetail";
import { loader as userLoader } from "./components/Users";
import { loader as userDetailLoader } from "./components/UserDetail";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Error from "./components/Error";


function App() {

const router = createBrowserRouter([
        {
            path : "/",
            element :<Main />,
            errorElement : <Error/>,
            children : [
                {
                    index : true,
                    element : <Home />
                },
                {
                    path : '/about',
                    element : <About />
                },
                {
                    path : '/products',
                    element : <Products />,
                    loader : productLoader
                },
                {
                    path : "/products/:id",
                    element : <ProductDetail />,
                    loader : productDetailLoader
                },
                {
                    path : '/users',
                    element : <Users />,
                    loader : userLoader
                },
                {
                    path : "/users/:id",
                    element : <UserDetail />,
                    loader : userDetailLoader
                }
            ]
        }
    ])

return <RouterProvider router={router} />
}

export default App
