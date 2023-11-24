// routes.js
import Home from "./pages/Home";
import Orders from "./pages/Orders";
// import Login from "./pages/Login";
// import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: <Orders />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
