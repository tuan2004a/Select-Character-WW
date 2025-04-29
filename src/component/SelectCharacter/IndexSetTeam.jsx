import {React} from 'react';
import Toolbar from './LayoutSelect/Toolbar';
import Header from './LayoutSelect/Header';
import BoxChar from './MultiSelectRessonators/BoxChar';
import InforChar from './SingleSelectResonator/InforChar';

const Index = ({setIsOpen, isOpenSingle, isOpenMulti}) => {

    return (
        <div className="size-full flex flex-col justify-between">
            <nav className="h-[55px] w-full flex items-center justify-center">
                <Header setIsOpen={setIsOpen} titleSingle="Select Resonator" titleMulti="Select The Resonators"   />
            </nav>
            <section className="h-auto grow px-15 ">

                {isOpenSingle == true && (
                    <div className="Single w-full flex items-start gap-x-15">
                        <div className="w-[42%]">
                            <BoxChar/>
                        </div>
                        <div className="">
                            <InforChar/>
                        </div>
                    </div>
                )}
                {isOpenMulti == true && (
                    <div className="Multi">
                        <BoxChar/>
                    </div>
                )}
            </section>
            <section className="w-full h-[70px] mb-5">
                <Toolbar setIsOpen={setIsOpen}/>
            </section>
        </div>
    )
}

export default Index
