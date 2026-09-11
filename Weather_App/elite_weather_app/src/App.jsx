
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/about',
    element: <h1>This page is about us</h1>
  }
]);
function Router() {


  return (
    <RouterProvider router={router} />
  )
}

export default Router
