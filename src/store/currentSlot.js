import { create } from 'zustand';

const CurrentSlotStore = create((set) => ({
    currentSlot: null, 
    setCurrentSlot: (slot) => set({ currentSlot: slot }),
}));

export default CurrentSlotStore;