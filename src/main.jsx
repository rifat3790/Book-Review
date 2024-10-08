import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Route/Route';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/listed_book',
        element: <ListedBooks></ListedBooks>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
