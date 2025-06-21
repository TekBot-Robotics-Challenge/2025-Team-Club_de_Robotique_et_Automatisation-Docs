import React, { useRef } from 'react';
import HeroSection from '~/components/molecules/home-page/hero-section';
import { useCenteredBackgroundImage } from "../../atoms/images/useCenteredBackgroundImage";

interface HomePageProps {
    // Vous pouvez ajouter des props ici si nécessaire
}
const HomePage: React.FC<HomePageProps> = () => {

    const btnRef = useRef<HTMLDivElement>(null);

    const divMobileBgRef = useRef<HTMLDivElement>(null);

    useCenteredBackgroundImage(btnRef, "/images/home-page/hero-section/bg_grid.svg", {
        screen_size: {
            mobile_s: "0%",
            mobile_m: "0%",
            mobile_l: "0%",
            tablet: "150%",
            laptop: "120%",
            laptop_l: "108%",
            desktop: "85%",
            k_screen: "62%",
        },
        zoom_by_screen_size: {
            mobile_s: 0,
            mobile_m: 0,
            mobile_l: 0,
            tablet: 1,
            laptop: 1.2,
            laptop_l: 0.97,
            desktop: 1,
            k_screen: 1,
        },
    });


    useCenteredBackgroundImage(divMobileBgRef, "/images/home-page/hero-section/bg-mobile-img.png", {
        screen_size: {
            mobile_s: "100%",
            mobile_m: "100%",
            mobile_l: "100%",
            tablet: "0%",
            laptop: "0%",
            laptop_l: "0%",
            desktop: "0%",
            k_screen: "0%",
        },
        zoom_by_screen_size: {
            mobile_s: 1.5,
            mobile_m: 1.3,
            mobile_l: 1.1,
            tablet: 1,
            laptop: 1,
            laptop_l: 1,
            desktop: 1,
            k_screen: 1,
        },
    });


    return (
        <div className="home-page relative bg-secondary overflow-hidden">


            <section ref={btnRef} className='h-[100vh] w-screen max-h-[1040px] bg-white flex items-center justify-center relative tablet:custom-radius-bottom-corner z-10'>

                <HeroSection />

                <div ref={divMobileBgRef} className='h-2/3 w-full tablet:hidden flex items-center justify-center absolute top-0 left-0 inset-0 -z-10'>
                    <div
                        className="tablet:hidden absolute top-0 left-0 h-full w-full z-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                            backdropFilter: 'blur(2px)',
                            WebkitBackdropFilter: 'blur(2px)',
                        }}
                    ></div>
                </div>

            </section>



            <section className='h-[70vh]  w-screen max-h-[900px] flex items-center justify-center relative z-20'>




            </section>


            <section className='h-[100vh] w-screen max-h-[1040px] bg-black flex items-center justify-center relative tablet:custom-radius-bottom-corner z-10'>

                


            </section>





        </div>
    );
};

export default HomePage;