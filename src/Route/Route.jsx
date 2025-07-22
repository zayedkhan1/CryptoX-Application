import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Coin from "../Pages/Coin";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>  ,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/coin/:coinId',
          element:<Coin></Coin>
        }
    ]
  },
]);
export default router;