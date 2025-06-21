import React from 'react';
import H3Title from '../../../atoms/text/H3Title';
import PContent from '../../../atoms/text/PContent';

interface DownProps {
    className?: string;
}

const Down: React.FC<DownProps> = ({ className = '' }) => {
    return (
        <div className="w-full h-1/3 flex flex-col items-center justify-center">
           <H3Title className="font-bold text-dark text-center">
            Nos espaces de lectures
           </H3Title>
           <div>
            <PContent className="text-center text-dark">
            Découvrez nos différents espaces de lectures conçus pour offrir une 
              </PContent>
             <PContent className="text-center text-dark">
                expérience de lecture adapté à chaque âge et besoin
              </PContent> 
           </div>
           
        </div>
    );
};

export default Down;