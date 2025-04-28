import { useState } from 'react';

const useOpenSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSingle, setIsOpenSingle] = useState(false);
    const [isOpenMulti, setIsOpenMulti] = useState(false);

    return {
        isOpen,setIsOpen,

        isOpenSingle,setIsOpenSingle,

        isOpenMulti,setIsOpenMulti
    };
};

export default useOpenSelect;