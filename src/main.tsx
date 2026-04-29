import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout.tsx";
import {Ui} from "./pages/UI/UI.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/UI",
				element: <Ui />
			}
		]
	},
	{
		path: "*",
		element: <div>not found</div>
	}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
