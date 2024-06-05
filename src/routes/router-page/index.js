import { createBrowserRouter, useRoutes } from "react-router-dom";
import { ProductDetail,Home,About,Products } from "../page";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path : "/",
        element :<Main />,
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
                element : <Products />
            },
            {
                path : "/products/:id",
                element : <ProductDetail />
            }
        ]
    }
])

export default router;