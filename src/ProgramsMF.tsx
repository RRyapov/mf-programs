import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import { Container, Footer, MainBackground } from "./shared/Container";
import { Reset } from "styled-reset";

import ProgramsPage from "@pages/ProgramPage";
import DetailedProgramPage from "@pages/DetailedProgramPage";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 120000,
		},
	},
});

const ProgramsMF: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<MainBackground>
					<Container>
						<Reset />
						<Routes>
							<Route
								path="/programs"
								element={<ProgramsPage />}
							/>
							<Route
								path="/programs:id"
								element={<DetailedProgramPage />}
							/>
						</Routes>
						<Outlet />
					</Container>
					<Footer />
				</MainBackground>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default ProgramsMF;
