import {create} from "zustand";



export const useToolsStore = create((set) => ({
  selectedStat: 10,
  setSelectedTool: (id) => set({ selectedStat: id }),
}));