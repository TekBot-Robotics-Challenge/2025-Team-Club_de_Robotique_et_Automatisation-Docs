import React, { useRef } from 'react';
import { useCenteredBackgroundImage } from "../../../atoms/images/useCenteredBackgroundImage";
import ValidationBtn from '../../../atoms/button/ValidationBtn';
import ValidationBtnNegatif from '../../../atoms/button/ValidationBtnNegatif';
import H2Title from '../../../atoms/text/H2Title';
import H3Title from '../../../atoms/text/H3Title';
import PContent from '../../../atoms/text/PContent';

interface UpProps {
    className?: string;
}

const Up: React.FC<UpProps> = ({ className }) => {

    const divLaptopBgRef = useRef<HTMLDivElement>(null);

    useCenteredBackgroundImage(divLaptopBgRef, "/images/home-page/hero-section/bg-laptop-img.png", {
        screen_size: {
            mobile_s: "0%",
            mobile_m: "0%",
            mobile_l: "0%",
            tablet: "100%",
            laptop: "100%",
            laptop_l: "100%",
            desktop: "120%",
            k_screen: "125%",
        },
        zoom_by_screen_size: {
            mobile_s: 0,
            mobile_m: 0,
            mobile_l: 0,
            tablet: 1.6,
            laptop: 1.2,
            laptop_l: 1.4,
            desktop: 1,
            k_screen: 1,
        },
    });

    return (
        <div
            ref={divLaptopBgRef}
            className="relative h-2/3 w-full flex flex-col items-start justify-end tablet:custom-radius-bottom-corner"
        >

            {/* Fond flou progressif */}

            <div
                className="absolute top-0 left-0 h-full w-full z-0 pointer-events-none custom-radius-bottom-corner"
                style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                }}
            ></div>

            {/* Ton contenu passe au-dessus */}
            <div className="z-10 h-full tablet:h-3/4 w-full tablet:w-2/3 p-4 bg-transparent flex flex-col items-center justify-around custom-radius-left-bottom-corner">
                <H3Title className='w-full  text-white font-bold hidden tablet:block' >Un monde magique de lecture pour les petits</H3Title>
                <H2Title className='text-white font-bold tablet:hidden' >Un monde magique de lecture pour les petits</H2Title>
                <PContent className='text-white font-light'>Un cadre chalereux pour acceuillir les enfants de 3 à 8 ans et leurs mamans dans un univers de découverte et d'immagination</PContent>
                <div className='w-full h-1/5 flex flex-row items-center justify-start gap-1 tablet:gap-8'>
                    <ValidationBtn>
                        Nos espaces
                    </ValidationBtn>
                    <ValidationBtnNegatif>
                        Contactez
                    </ValidationBtnNegatif>
                </div>
            </div>
        </div>

    );
};

export default Up;