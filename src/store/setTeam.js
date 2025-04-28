import { create } from 'zustand';

const setTeamStore = create((set) =>({    
    Team: [null, null, null],
    // setSingleTeam: (char) => set((state) => {
    //     let newTeam = [...state.Team];
    //     let index = newTeam.indexOf(null);
    //     if (index !== -1) {
    //         newTeam[index] = char;
    //     }
    //     return { Team: newTeam };
    // }),
    setSingleTeam: (char, slot) => set((state) => {
        const newTeam = [...state.Team];
        newTeam[slot] = char; // Gán trực tiếp vào đúng vị trí
        return { Team: newTeam };
    }),
}))

export default setTeamStore