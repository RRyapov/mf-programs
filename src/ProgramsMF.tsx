import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Container, Footer, MainBackground } from "./shared/Container";
import { Reset } from "styled-reset";

import ProgramsPage from "@pages/ProgramPage";

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
			<MainBackground>
				<Container>
					<Reset />
					{/* <Routes>
						<Route
							path="/programs"
							element={<ProgramsPage />}
						/>
					</Routes> */}
					<Outlet />
				</Container>
				<Footer />
			</MainBackground>
		</QueryClientProvider>
	);
};

export default ProgramsMF;
