import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { sizeByScreen, getFontSize } from "./fontUtils";

interface H1TitleProps {
    children: React.ReactNode;
    className?: string;
}

// Définition du composant avec styled-components
const StyledH1 = styled.h1<H1TitleProps>`
    font-size: ${({ theme }) => getFontSize("h1")};
    
    line-height: 1.5;

    @media (min-width: 375px) {
        font-size: ${({ theme }) => getFontSize("h1", sizeByScreen.mobile_m)};
    }
    @media (min-width: 425px) {
        font-size: ${({ theme }) => getFontSize("h1", sizeByScreen.mobile_l)};
    }
    @media (min-width: 768px) {
        font-size: ${({ theme }) => getFontSize("h1", sizeByScreen.tablet)};
    }
    @media (min-width: 1024px) {
        font-size: ${({ theme }) => getFontSize("h1", sizeByScreen.laptop)};
    }
    @media (min-width: 1440px) {
        font-size: ${({ theme }) => getFontSize("h1", sizeByScreen.laptop_l)};
    }
    @media (min-width: 2560px) {
        font-size: ${({ theme }) => getFontSize("h1", sizeByScreen['4k_screen'])};
    }
`;

const H1Title: React.FC<H1TitleProps> = ({ children, className }) => {
    return <StyledH1 className={classNames("font-ubuntu", className)}>{children}</StyledH1>;
};

export default H1Title;  