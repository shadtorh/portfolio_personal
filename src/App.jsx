import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectDetails } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
	},
	{
		path: "/project/:id", // Dynamic route for individual projects
		element: <ProjectDetails />,
	},
]);

const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};

export default App;
