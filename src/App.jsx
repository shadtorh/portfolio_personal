import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";

const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-base-200">
    <span className="loading loading-spinner loading-lg text-primary" />
  </div>
);

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
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
