import React from 'react';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';

const CardHero = ({char}) => {

    const bgChar = useRef(null);
    useEffect(() => {
        if (bgChar.current ) {
            gsap.fromTo(bgChar.current, {
                x: 80, opacity:0
            },{
                x: 0,opacity:1, duration: 0.3,delay: 0.1, ease: 'power3.out'
            })
        }
    }, [char]);

    return (
        <div className=' z-20 h-[35rem] w-[18rem] relative before:absolute before:z-20 before:inset-0 before:size-full before:border-2 before:border-[#fffdd3] before:shadow-[0px_0px_20px_0px_#fffdd380] before:translate-x-[10px] before:translate-y-[10px]'>
            { char ? (
                <div className='size-full' >
                    <div className='z-10 absolute inset-0 size-full overflow-hidden'>
                        <img src="/background-card.png" />
                    </div>
                    <div className='absolute size-full overflow-hidden z-50'>
                        <img ref={bgChar} className='object-cover z-40 translate-y-10 scale-150' src={char.background} alt={char.name} />
                    </div>
                    <div className='absolute left-0 bottom-0 pl-5 pb-3 pt-15 text-white z-50 bg-gradient-to-b bg-transparent to-black to-50% w-full overflow-hidden'>
                        <div  className='flex items-center'>
                            <p className='font-medium text-xl text-[#ece5d8] tracking-widest'>Lv.<span className='ml-0.5 tracking-normal'>{char.level}</span></p>
                            <img className='w-5.5  ml-2' src={char.element.icon} alt={char.element.type} />
                        </div>
                        <div>
                            <p className='font-semibold text-2xl text-left'>{char.name}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='z-10 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-6 after:blur-lg after:bg-white after:rounded-full'>
                    <img width="50px" className='block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="/add.svg" alt="hero" />
                </div>
            )}
        </div>
    )
}

export default CardHero
