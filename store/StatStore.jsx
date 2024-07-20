import {create} from "zustand";



export const useStatsStore = create((set) => ({
  selectedStat: 1,
  setSelectedStat: (id) => set({ selectedStat: id }),
}));