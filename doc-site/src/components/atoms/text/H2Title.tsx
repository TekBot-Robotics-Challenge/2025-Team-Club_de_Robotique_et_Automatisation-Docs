import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { sizeByScreen, getFontSize } from "./fontUtils";

interface H2TitleProps {
    children: React.ReactNode;
    className?: string;
}

// Définition du composant avec styled-components
const StyledH2 = styled.h2<H2TitleProps>`
    font-size: ${({ theme }) => getFontSize("h2")};

    line-height: 1.5;

    @media (min-width: 375px) {
        font-size: ${({ theme }) => getFontSize("h2", sizeByScreen.mobile_m)};
    }
    @media (min-width: 425px) {
        font-size: ${({ theme }) => getFontSize("h2", sizeByScreen.mobile_l)};
    }
    @media (min-width: 768px) {
        font-size: ${({ theme }) => getFontSize("h2", sizeByScreen.tablet)};
    }
    @media (min-width: 1024px) {
        font-size: ${({ theme }) => getFontSize("h2", sizeByScreen.laptop)};
    }
    @media (min-width: 1440px) {
        font-size: ${({ theme }) => getFontSize("h2", sizeByScreen.laptop_l)};
    }
    @media (min-width: 2560px) {
        font-size: ${({ theme }) => getFontSize("h2", sizeByScreen['4k_screen'])};
    }
`;

const H2Title: React.FC<H2TitleProps> = ({ children, className }) => {
    return <StyledH2 className={classNames("font-ubuntu", className)}>{children}</StyledH2>;
};

export default H2Title;  