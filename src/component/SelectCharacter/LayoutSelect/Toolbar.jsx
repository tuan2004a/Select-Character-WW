import React from 'react';
import useCharacterStore from '../../../store/characterStore';

const Toolbar = () => {
    const { selectedCharacter } = useCharacterStore();

    const handleClickSelect = () =>{
        console.log(selectedCharacter);
    }

    return (
        <div className='flex items-center justify-between'>
            <div>
                <button className='size-10 bg-[#29271e] rounded-full border-2 border-[#32312d] text-[#f7df92]'>
                    <i className="fa-solid fa-filter"></i>
                </button>
            </div>
            <button onClick={()=> {handleClickSelect()}} className='relative block h-[60px] overflow-hidden rounded-tl-lg rounded-br-lg text-black'>
                <img className='object-center object-cover' src="/btn-quickSetUp.jpg" alt="" />
                <p className='absolute top-1/2 left-1/2 -translate-1/2 text-[26px] font-bold text-nowrap'>Quick Setup</p>
            </button>
        </div>
    )
}

export default Toolbar
