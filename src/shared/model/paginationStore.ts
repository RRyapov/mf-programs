import { create } from "zustand";

type CurrentPageState = {
  selectedCurrentPage: number;
  selectCurrentPage: (newPageNumber: number) => void;
};

export const useCurrentPage = create<CurrentPageState>((set) => ({
  selectedCurrentPage: 1,
  selectCurrentPage: (newPageNumber: number) =>
    set(() => ({ selectedCurrentPage: newPageNumber })),
}));
