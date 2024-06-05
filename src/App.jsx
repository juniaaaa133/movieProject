import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./routes/layout/Main";
import { ProductDetail,Home,About,Products } from './routes/page';

function App() {

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

return <RouterProvider router={router} />
}

export default App
