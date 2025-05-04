import React from 'react';
import dataCharactersStore from '../../../store/characterStore';

const InforChar = () => {

    const {selectedCharacter} = dataCharactersStore();
    if(!selectedCharacter)return null;

    var star = [];
    for(let i=0; i<selectedCharacter.weapon.star; i++){
        star.push(
            <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 12.5C17.6197 11.4299 13.7822 9.70934 12.5 0C11.2453 7.95344 9.33887 11.3725 0 12C9.13903 13.8179 11.3682 17.1431 12.5 25C13.2628 16.8787 15.8825 14.0538 25 12.5Z" fill="#FDB93B"/>
            </svg>
        )
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>
                {selectedCharacter.name}
            </h1>

            {/* combat roles */}
            <div className='flex flex-wrap mt-5'>
                <p className='flex items-center text-[21px] font-semibold leading-tight bg-red-500/20 text-red-500 px-2 rounded-xs'>
                    <img className='size-5 outline-none mr-1' src={null} alt="" />
                    Electro DMG Amplification
                </p>
            </div>
            {/* combat roles */}

            {/* weapons */}
            <div className='mt-5 w-lg h-47 relative overflow-hidden border border-black'>
                <img className='w-full h-full object-cover ' src={selectedCharacter.weapon.imgWeapon} alt={selectedCharacter.weapon.title} />
                <span className="absolute top-1 left-1 size-10 bg-no-repeat w-auto text-[16.5px] flex items-center font-medium text-neutral-400 px-2 py-1 rounded">
                    <img className='size-6 mr-2.5' src={selectedCharacter.element.icon} alt={null} />
                    | Lv. <strong className='text-[17px] text-amber-500 ml-1.5'>{selectedCharacter.weapon.level}</strong>
                </span>
                <div className='w-full bg-black absolute bottom-0 px-3 flex items-center justify-between'>
                    <div className='flex justify-center'>   
                        {/* <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 12.5C17.6197 11.4299 13.7822 9.70934 12.5 0C11.2453 7.95344 9.33887 11.3725 0 12C9.13903 13.8179 11.3682 17.1431 12.5 25C13.2628 16.8787 15.8825 14.0538 25 12.5Z" fill="#FDB93B"/>
                        </svg> */}
                        {star}

                    </div>
                    <div className='flex items-center space-x-5'>
                        <span className='flex items-center text-xl leading-none font-medium'>
                            <img className='size-6 mr-1' src={selectedCharacter.weapon.Stats.ATK.icon} alt={null} />
                            {selectedCharacter.weapon.Stats.ATK.atk}
                        </span>
                        <span className='flex items-center text-xl leading-none font-medium'>
                            <img className='size-6 mr-1' src={selectedCharacter.weapon.Stats.Stats2.icon} alt={null} />
                            {selectedCharacter.weapon.Stats.Stats2.stats}
                        </span>
                    </div>
                </div>
            </div>
            {/* weapons */}


            {/* skill Character */}
            <div className='flex space-x-5 mt-5'>
                <div className='size-20 rounded-sm border border-neutral-700 relative flex items-center justify-center'>
                    <div className='rounded-xs size-[90%] border-2 border-neutral-500'>
                        
                    </div>
                    <span className='block absolute size-[5px] top-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] top-2 right-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 right-2 border border-neutral-600 rounded-full'></span>
                </div>
                <div className='size-20 rounded-sm border border-neutral-700 relative flex items-center justify-center'>
                    <div className='rounded-xs size-[90%] border-2 border-neutral-500'>
                        
                    </div>
                    <span className='block absolute size-[5px] top-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] top-2 right-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 right-2 border border-neutral-600 rounded-full'></span>
                </div>
                <div className='size-20 rounded-sm border border-neutral-700 relative flex items-center justify-center'>
                    <div className='rounded-xs size-[90%] border-2 border-neutral-500'>
                        
                    </div>
                    <span className='block absolute size-[5px] top-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] top-2 right-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 right-2 border border-neutral-600 rounded-full'></span>
                </div>
                <div className='size-20 rounded-sm border border-neutral-700 relative flex items-center justify-center'>
                    <div className='rounded-xs size-[90%] border-2 border-neutral-500'>
                        
                    </div>
                    <span className='block absolute size-[5px] top-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] top-2 right-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 left-2 border border-neutral-600 rounded-full'></span>
                    <span className='block absolute size-[5px] bottom-2 right-2 border border-neutral-600 rounded-full'></span>
                </div>
            </div>
            {/* skill Character */}

        </div>
    )
}

export default InforChar
