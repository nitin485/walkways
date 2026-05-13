import "./App.css";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product",
          element: <Shop />,
        },
      ],
    },
  ]);

  return (

    
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import './App.css'
// import MainLayout from './layout/MainLayout'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainLayout />
//     }
//   ]);

//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App;
