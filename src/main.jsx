import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  
import Home from './assets/home/Home';
import About from './assets/About/About';
import Contact from './assets/Contact/Contact';
import MealDb from './assets/MealDb/MealDb';
import ShowMore from './assets/show/ShowMore';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element: <About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path:'meal',
        element:<MealDb></MealDb>,
        loader:()=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
      },
      {
        path:'/showDetails',
        element:<ShowMore></ShowMore>,

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
