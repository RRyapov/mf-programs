import { lazy } from "react";

export const LazyDetailedProgramPage = lazy(
	() => import("../../DetailedProgramPage")
);
