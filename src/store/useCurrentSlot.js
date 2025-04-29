import { create } from 'zustand';

const useCurrentSlot = create((set) => ({
    currentSlot: null, 
    setCurrentSlot: (slot) => set({ currentSlot: slot }),
    clearCurrentSlot: () => set({ currentSlot: null }),
}));

export default useCurrentSlot;