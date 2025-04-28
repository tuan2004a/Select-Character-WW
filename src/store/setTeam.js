import { create } from 'zustand';

const setTeamStore = create((set) =>({    
    Team: [null, null, null],
    addCharacterToPosition: (character, position) => set((state) => {
        const newTeam = [...state.Team];
        newTeam[position] = character;
        return { Team: newTeam };
    }),
}))

export default setTeamStore