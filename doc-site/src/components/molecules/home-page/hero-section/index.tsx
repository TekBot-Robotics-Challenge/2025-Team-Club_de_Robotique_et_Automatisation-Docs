import React from 'react';
import Up from "./Up"
import Down from "./Down"


const HeroSection: React.FC = () => {
    return (
        <div className="border-2 border-green-500 h-full w-full max-w-[1440px] max-h-[1040px] flex items-center justify-center tablet:custom-radius-bottom-corner">
            <div className='h-full w-[95%] tablet:w-[90%] flex flex-col items-center justify-center'>
                <Up/>
                <Down/>
                 
            </div>
        </div>
    );
};

export default HeroSection;