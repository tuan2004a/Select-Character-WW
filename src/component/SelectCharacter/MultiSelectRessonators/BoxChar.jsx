import React from 'react';
import dataCharactersStore from "../../../store/characterStore";
import useFetch from '../../../hooks/useFetch';
// import useSortedCharacters from '../../../hooks/useSortedCharacters';
import setTeamStore from '../../../store/setTeam';
// import useCurrentSlot from '../../../hooks/useCurrentSlot';

const BoxChar = () => {
    useFetch();
    const { setSelectedCharacter,selectedCharacter, getSortedCharacters } = dataCharactersStore();
    // const sortedCharacters = useSortedCharacters();
    const sortedCharacters = getSortedCharacters();
    // const { currentSlot } = useCurrentSlot();
    // console.log(currentSlot)
    const { Team } = setTeamStore();
    

    return (
        <div className='flex flex-wrap gap-5 w-full h-full '>
            {sortedCharacters?.map((char) => (
                <div key={char.id} onClick={()=>{setSelectedCharacter(char)}} 
                    className={`${selectedCharacter && selectedCharacter?.id === char.id ? "outline-3 outline-offset-3 outline-white scale-105" : ""} transition-all duration-300  border-2 border-neutral-600 rounded-lg h-35 relative flex items-start overflow-hidden  `}>
                    <img className='size-26.5' src={char.avatar} alt={char.name} />
                    <span className='absolute bottom-0 text-lg w-full bg-neutral-900 flex items-center justify-between font-semibold py-px px-1 border-t-4 border-[#edeab5] shadow-[0px_0px_50px_5px_#edeab5]'>
                        <img className='size-5' src={char.element.icon} alt={null} />
                        Lv. {char.level}
                    </span>
                    {Team.some(member => member && member.id === char.id) && (
                        <span className='absolute bottom-1/5 right-1/2 translate-y-2 size-6.5 text-amber-300 border-3 border-amber-400 rounded-md flex items-center justify-center bg-gray-700 font-medium shadow-[inset_0px_0px_6px_0px_#ffb900] text-lg leading-none'>
                            {Team.findIndex(member => member && member.id === char.id) + 1}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default BoxChar