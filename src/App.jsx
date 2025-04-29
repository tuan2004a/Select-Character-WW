import CardHero from './component/CardHero';
import SelectResonator from './component/SelectCharacter/IndexSetTeam';
import useOpenSelect from './hooks/useOpenSelect';
import setTeamStore from './store/setTeam';
import useCurrentSlot from './store/useCurrentSlot';

function App() {

    const {Team, setSingleTeam} = setTeamStore();

    const { isOpen, setIsOpen, isOpenMulti, setIsOpenMulti, isOpenSingle, setIsOpenSingle } = useOpenSelect();

    const {setCurrentSlot} = useCurrentSlot();

    const handleOpenSingle = (slot) => {
        setIsOpenSingle(true);
        setIsOpenMulti(false); 
        setIsOpen(true);
        setCurrentSlot(slot);
        setSingleTeam(slot, useCurrentSlot )
        // console.log("single", slot);
    };

    const handleOpenMulti = () => {
        setIsOpenSingle(false);
        setIsOpenMulti(true);
        setIsOpen(true);
        // console.log("multi");/
    };

    return (
        <div className='min-w-screen h-[100vh] bg-no-repeat bg-center bg-cover bg-[url(/background.png)] fixed'>
            <div className='mt-15'>
                <div className='flex items-center justify-center size-full gap-30'>
                    {[0, 1, 2].map((slot) => (
                        <button key={slot} onClick={() => {  handleOpenSingle(slot)}} >
                            <CardHero char={Team[slot]} /> 
                        </button>
                    ))}
                </div>
                <div  className='h-[20vh] w-full flex items-center justify-end space-x-7 px-15'>
                    <button onClick={ ()=> handleOpenMulti()} className='relative block h-[67px] overflow-hidden rounded-tl-lg rounded-br-lg'>
                        <img src="/btn-quickSetUp.jpg" alt="" />
                        <p className='absolute top-1/2 left-1/2 -translate-1/2 text-2xl font-bold text-nowrap'>Quick Setup</p>
                    </button>
                    <button  className='relative block h-[67px] overflow-hidden rounded-tl-lg rounded-br-lg'>
                        <img src="/button-bg.png" alt="" />
                        <p className='absolute top-1/2 left-1/2 -translate-1/2 text-3xl font-bold'>Deploy</p>
                    </button>
                </div>
            </div>

            <div className={`${isOpen ? "" : "hidden"} fixed text-white px-20 inset-0 z-50 h-[100vh] min-w-screen backdrop-blur-md bg-linear-to-b from-black vite-[#000000b3] vite-[55%] to-[#0009]`}>
                <SelectResonator 
                    isOpenMulti={isOpenMulti} 
                    isOpenSingle={isOpenSingle} 
                    setIsOpen={setIsOpen} 
                />
            </div>
        </div>
    )
}

export default App;
