import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="programs" element={<ProgramsPage />} />
        </Routes>
        <Routes>
          <Route path="programs/:id" element={<DetailedProgramPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default ProgramsMF;
