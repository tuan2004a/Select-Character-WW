import { create } from 'zustand';
import setTeamStore from './setTeam';

const useCharacterStore = create((set, get) => ({
    characters: [],
    setCharacters: (data) => set({ characters: data }),
    selectedCharacter: null,
    setSelectedCharacter: (character) => set({ selectedCharacter: character }),
    getSortedCharacters: () => {
        const characters = get().characters;
        const Team = setTeamStore.getState().Team;
        const validTeam = Team.filter(Boolean);
        const selectedTeamIds = validTeam.map(member => member.id);
        return [
            ...validTeam,
            ...characters.filter(char => !selectedTeamIds.includes(char.id)),
        ];
    },
}));

export default useCharacterStore;