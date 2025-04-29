import { create } from 'zustand';
import useCharacterStore from './characterStore';
import setTeamStore from './setTeam';

const sortedCharacterStore = create(() => ({
    getSortedCharacters: () => {
        const characters = useCharacterStore.getState().characters;
        const Team = setTeamStore.getState().Team;
        const validTeam = Team.filter(Boolean);
        const selectedTeamIds = validTeam.map(member => member.id);

        return [
            ...validTeam,
            ...characters.filter(char => !selectedTeamIds.includes(char.id)),
        ];
    }
}));

export default sortedCharacterStore;
