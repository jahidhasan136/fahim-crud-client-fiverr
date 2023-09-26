import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import EditData from "../Pages/Home/EditData/EditData";
import UpdateData from "../Pages/Home/UpdateData/UpdateData";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/editData',
        element: <EditData></EditData>,
        loader: () => fetch('http://localhost:5000/totalData')
      },
      {
        path: '/home/:id',
        element: <UpdateData></UpdateData>,
        loader: ({params}) => fetch(`http://localhost:5000/addData/${params.id}`)
      },
    ]
  },
]);