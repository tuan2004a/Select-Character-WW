import React from 'react';

const CardHero = () => {
    return (
        <div className='z-20 h-[35rem] w-[18rem] relative before:absolute before:z-20 before:inset-0 before:size-full before:border-2 before:border-[#fffdd3] before:shadow-[0px_0px_20px_0px_#fffdd380] before:translate-x-[10px] before:translate-y-[10px]'>
            <div className='z-10 absolute inset-0 size-full overflow-hidden'>
                <img className='' src="/background-card.png" alt="" />
            </div>
            <div className='absolute size-full overflow-hidden z-50'>
                <img className='object-cover z-40 translate-y-10 scale-150' src="/backgroundCharacter/bg-Cantarella.png" alt="" />
            </div>
            <div className='z-10 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-6 after:blur-lg after:bg-white after:rounded-full'>
                <img width="50px" className='block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="/add.svg" alt="hero" />
            </div>
            <div className='absolute left-0 bottom-0 pl-5 pb-3 pt-15 text-white z-50 bg-gradient-to-b bg-transparent to-black to-50% w-full overflow-hidden'>
                <div className='flex items-center'>
                    <p className='font-medium text-xl text-[#ece5d8] tracking-widest'>Lv.<span className='ml-0.5 tracking-normal'>50</span></p>
                    <img className='w-5.5  ml-2' src="/Element/Aero.png" alt="" />
                </div>
                <div>
                    <p className='font-semibold text-2xl text-left'>Shorekeeper</p>
                </div>
            </div>
        </div>
    )
}

export default CardHero
