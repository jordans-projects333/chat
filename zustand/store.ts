import { create } from 'zustand'



export const useStore = create((set) => ({
    editToggle: false,
    editInitialText: '',
    monthIndex: 0
    }
))