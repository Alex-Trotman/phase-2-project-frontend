// routes.js
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
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
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
