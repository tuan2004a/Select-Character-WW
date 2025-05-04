import { create } from 'zustand';

const useCharacterStore = create((set) => ({
    characters: [],
    setCharacters: (data) => set({ characters: data }),
    selectedCharacter: null,
    setSelectedCharacter: (character) => set({ selectedCharacter: character }),
}));

export default useCharacterStore;