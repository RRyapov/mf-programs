import { createRoot } from "react-dom/client";
import ProgramsMF from "./ProgramsMF";
import { createBrowserRouter } from "react-router-dom";
import { LazyDetailedProgramPage, LazyProgramsPage } from "./pages";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
	throw new Error("root not found");
}

const container = createRoot(root);

container.render(<ProgramsMF />);
