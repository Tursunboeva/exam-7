import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import { SuspenseComponent as Suspense } from "../utils";
const Home = lazy(() => import('../routes/home/Home'));
const Auth = lazy(() => import('../routes/auth/Auth'));
const Login = lazy(() => import('../routes/auth/login/Login'));
const SignUp = lazy(() => import('../routes/auth/signUp/SignUp'));
const Users = lazy(() => import('../routes/users/Users')); 
const Createusers= lazy(()=>import('../routes/create/Createuser')) ; 
const NotFound = lazy(() => import('../routes/not-found/NotFound'));

const RouteController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "/auth",
      element: <Suspense><Auth/></Suspense>,
      children: [
        {
          path: "/auth/login",
          element: <Suspense><Login/></Suspense>
        },
        {
          path: "/auth/signup",
          element: <Suspense><SignUp/></Suspense>
        }
      ]
    },
    {
      path: "/users/:id",
      element: <Suspense><Users/></Suspense>
    },
    {
      path: "/create",
      element: <Suspense><Createusers/></Suspense>
  },
    {
      path: "*",
      element: <Suspense><NotFound/></Suspense>
    }
  ]);
};
export default RouteController;
