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
        loader: () => fetch('https://fahim-crud-server-15s1luhr7-nurmorshed7987-gmailcom.vercel.app/totalData')
      },
      {
        path: '/home/:id',
        element: <UpdateData></UpdateData>,
        loader: ({params}) => fetch(`https://fahim-crud-server-15s1luhr7-nurmorshed7987-gmailcom.vercel.app/addData/${params.id}`)
      },
    ]
  },
]);