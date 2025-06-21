import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { sizeByScreen, getFontSize } from "./fontUtils";

interface H3TitleProps {
    children: React.ReactNode;
    className?: string;
}

// Définition du composant avec styled-components
const StyledH3 = styled.h3<H3TitleProps>`
    font-size: ${({ theme }) => getFontSize("h3")};

    line-height: 1.5;

    
    @media (min-width: 375px) {
        font-size: ${({ theme }) => getFontSize("h3", sizeByScreen.mobile_m)};
    }
    @media (min-width: 425px) {
        font-size: ${({ theme }) => getFontSize("h3", sizeByScreen.mobile_l)};
    }
    @media (min-width: 768px) {
        font-size: ${({ theme }) => getFontSize("h3", sizeByScreen.tablet)};
    }
    @media (min-width: 1024px) {
        font-size: ${({ theme }) => getFontSize("h3", sizeByScreen.laptop)};
    }
    @media (min-width: 1440px) {
        font-size: ${({ theme }) => getFontSize("h3", sizeByScreen.laptop_l)};
    }
    @media (min-width: 2560px) {
        font-size: ${({ theme }) => getFontSize("h3", sizeByScreen['4k_screen'])};
    }
`;

const H3Title: React.FC<H3TitleProps> = ({ children, className }) => {
    return <StyledH3 className={classNames("font-ubuntu", className)}>{children}</StyledH3>;
};

export default H3Title;  