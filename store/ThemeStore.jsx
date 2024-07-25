import create from 'zustand';

const useThemeStore = create((set) => ({
  theme: '',
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;