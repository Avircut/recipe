import { useState } from "react";
import "./app.scss";
import Header from "./assets/components/ui/Header/Header";
import PageWrapper from "./assets/components/ui/PageWrapper/PageWrapper";
import Main from './assets/pages/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDice,faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from "./assets/pages/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<Main/>,
  },
  {
    path:"/menu/",
    element: <Menu/>
  },
  {
  }
])

library.add(faDice,faSquarePlus, faMagnifyingGlass,faChevronDown);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
