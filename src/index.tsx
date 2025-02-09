import { createRoot } from "react-dom/client";
import ProgramsMF from "./ProgramsMF";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyDetailedProgramPage } from "./pages";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
	throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: "/",
		element: <ProgramsMF />,
		children: [
			{
				path: "/programs/:id",
				element: (
					<Suspense fallback={"Загрузка..."}>
						<LazyDetailedProgramPage />
					</Suspense>
				),
			},
		],
	},
]);

container.render(<RouterProvider router={router} />);
