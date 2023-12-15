import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import routes from "./routes.js";
import App from "./App.js";
import { MyProvider } from "./MyContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <MyProvider>
          <App />
        </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();