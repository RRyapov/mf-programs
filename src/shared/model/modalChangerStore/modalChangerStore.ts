import { create } from "zustand";
import { ModalChangeTypes } from "@shared/types/types";

export const useChangeModalWindow = create<ModalChangeTypes>((set) => ({
  openModalState: false,
  setOpenModalState: (newState: boolean) => set(() => ({ openModalState: newState })),
}));
