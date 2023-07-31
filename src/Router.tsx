// import React from 'react'
// import ReactDOM from 'react-dom/client'
import {
 Navigate,
 createBrowserRouter,
 NavLink
} from "react-router-dom";

import { App } from './App'
import { Dashboard } from "./components/dashboard";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <div>not found</div>,
  children: [
   {
    path: "/",
    element: <div>
     <h4>Choisissez un user </h4>
     <ul>
      <li>
       <NavLink to={`/user/12`}>user 12</NavLink>
      </li>
      <li>
       <NavLink to={`/user/18`}>user 18</NavLink>
      </li>
     </ul>
    </div>,
   },
   {
    path: "/user/:id",
    element: <Dashboard />
   },
   {
    path: "/404",
    element: <div>
     <p>
      not found
      <br /><br />
      <NavLink to={`/`}>RETOUR</NavLink>
     </p>

    </div>
   },
   {
    path: "/*",
    element: <Navigate to="/404" replace />
   }
  ]
 },

]);

export { router }
