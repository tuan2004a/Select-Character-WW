// import React, { useEffect } from 'react';
// import useCharacterStore from "../../store/characterStore";
// import axios from 'axios';
// const SelectCharacter = () => {

//     const { characters, setCharacters, selectCharacter, selectedCharacter } = useCharacterStore();

//     useEffect(() =>{
//         axios.get("http://localhost:3001/characters")
//             .then(res => {
//                 setCharacters(res.data)

//                 if(res.data.length > 0){
//                     selectCharacter(res.data[0])
//                 }
//             })
//             .catch(err => console.log(err))
//     },[selectCharacter,setCharacters])


//     return (
//         <div className='flex flex-wrap gap-5 w-full'>
//             { characters.map((char) => (
//                 <div key={char.id} onClick={() => selectCharacter(char)}
//                         className={`${ selectedCharacter?.id === char.id ? "outline-3 outline-offset-3 outline-white scale-105" : ""} transition-all duration-300  border-2 border-neutral-600 rounded-lg h-37 relative flex items-start overflow-hidden`}>
//                     <img className='size-30' src={char.avatar} alt={char.name} />
//                     <span className='absolute bottom-0 text-lg w-full bg-neutral-900 text-right block font-semibold py-0.5 pr-1 border-t-4 border-[#edeab5] shadow-[0px_0px_50px_5px_#edeab5]'>
//                         Lv. {char.level}
//                     </span>
//                 </div>
//             ) ) }
//         </div>
//     );
// };


// export default SelectCharacter