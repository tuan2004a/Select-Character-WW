import React from 'react';
const Header = ({setIsOpen}) => {

    return (
        <div className='w-full flex items-center justify-between'>
            <h2 className='font-semibold text-2xl leading-normal'>Select Resonator</h2>
            <button onClick={()=> {setIsOpen(false)}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 16L0 24L8 13H11V16Z" fill="#FFFACF"/>
                    <path d="M13 16L24 24L16 13H13V16Z" fill="#FFFACF"/>
                    <path d="M13 8L24 0L16 11H13V8Z" fill="#FFFACF"/>
                    <path d="M11 8L0 0L8 11H11V8Z" fill="#FFFACF"/>
                    <path d="M12 18L15 21L12 24L9 21L12 18Z" fill="#4C493C"/>   
                    <path d="M21 9L24 12L21 15L18 12L21 9Z" fill="#4C493C"/>
                    <path d="M3 9L6 12L3 15L0 12L3 9Z" fill="#4C493C"/>
                    <path d="M12 0L15 3L12 6L9 3L12 0Z" fill="#4C493C"/>
                </svg>
            </button>
        </div>
    )
}

export default Header
