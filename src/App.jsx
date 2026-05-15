import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectDetails } from "./components";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
