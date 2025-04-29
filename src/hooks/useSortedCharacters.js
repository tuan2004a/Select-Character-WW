// src/hooks/useSortedCharacters.js
import dataCharactersStore from "../store/characterStore";
import setTeamStore from "../store/setTeam";

const useSortedCharacters = () => {
    const { characters } = dataCharactersStore();
    const { Team } = setTeamStore();

    const validTeam = Team.filter(Boolean);
    const selectedTeamIds = validTeam.map(member => member.id);

    const sortedCharacters = [
        ...validTeam,
        ...characters.filter(char => !selectedTeamIds.includes(char.id)),
    ];

    return sortedCharacters;
};

export default useSortedCharacters;
