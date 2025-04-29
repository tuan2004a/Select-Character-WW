import React from 'react';
import dataCharactersStore from "../../../store/characterStore";
import useFetch from '../../../hooks/useFetch';
import useSortedCharacters from '../../../hooks/useSortedCharacters';
// import setTeamStore from '../../../store/setTeam';
// import useCurrentSlot from '../../../hooks/useCurrentSlot';

const BoxChar = () => {
    useFetch();
    const { setSelectedCharacter,selectedCharacter } = dataCharactersStore();
    const sortedCharacters = useSortedCharacters();

    // const {currentSlot} = useCurrentSlot();
    // const {Team} = setTeamStore();

    // const validTeam = Team.filter(Boolean);
    // const selectedTeamIds = validTeam.map(member => member.id);

    // const sortedCharacters = [
    //     ...validTeam,
    //     ...characters.filter(char => !selectedTeamIds.includes(char.id)),
    // ];

    return (
        <div className='flex flex-wrap gap-5 w-full h-full '>
            {sortedCharacters?.map((char) => (
                <div key={char.id} onClick={()=>{setSelectedCharacter(char)}} 
                    className={`${selectedCharacter.id === char.id ? "outline-3 outline-offset-3 outline-white scale-105" : ""} transition-all duration-300  border-2 border-neutral-600 rounded-lg h-35 relative flex items-start overflow-hidden`}>
                    <img className='size-26.5' src={char.avatar} alt={char.name} />
                    <span className='absolute bottom-0 text-lg w-full bg-neutral-900 flex items-center justify-between font-semibold py-px   px-1 border-t-4 border-[#edeab5] shadow-[0px_0px_50px_5px_#edeab5]'>
                        <img className='size-5' src={char.element.icon} alt={null} />
                        Lv. {char.level}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default BoxChar