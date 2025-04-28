import { create } from 'zustand';

const setTeamStore = create((set) =>({    
    Team: [null, null, null],
    setSingleTeam: (char) => set((state) => {
        let newTeam = [...state.Team];
        let index = newTeam.indexOf(null);
        if (index !== -1) {
            newTeam[index] = char;
        }
        return { Team: newTeam };
    }),
}))

export default setTeamStore