import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProjectDetails } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
				path: "/project/:id", // Dynamic route for individual projects
				element: <ProjectDetails />,
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
};

export default App;
