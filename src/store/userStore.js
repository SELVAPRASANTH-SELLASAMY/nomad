import { create } from "zustand";
export const useUser = create((set) => ({
    user: null,
    setUser: (userData) => set({user: userData})
}));