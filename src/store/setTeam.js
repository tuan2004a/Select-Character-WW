import { create } from 'zustand';

const setTeamStore = create((set) =>({    
    Team: [null, null, null],
    setSingleTeam: (char, slot) => set((state) => {
        const newTeam = [...state.Team];

        const currentIndex = newTeam.findIndex((c) => c?.id === char.id);
        const targetChar = newTeam[slot];

        if (currentIndex === slot) return state;

        if (currentIndex !== -1 && targetChar) {
            newTeam[currentIndex] = targetChar;
            newTeam[slot] = char;
        } else {
            if (currentIndex !== -1) {
                newTeam[currentIndex] = null;
            }
            newTeam[slot] = char;
        }

        // newTeam[slot] = char; 
        return { Team: newTeam };
    }),
}))

export default setTeamStore