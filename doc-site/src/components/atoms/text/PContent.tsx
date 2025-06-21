import React from 'react';
import classNames from 'classnames'; // Déplacer cet import ici
import styled from 'styled-components';
import { sizeByScreen } from './fontUtils';

interface PContentProps {
    children: React.ReactNode;  // Remplace 'text' par 'children'
    className?: string;
}


const StyledP = styled.p<PContentProps>`
    font-size: ${({ theme }) => sizeByScreen.mobile_s}px;

    line-height: 1.5;

    @media (min-width: 375px) {
        font-size: ${({ theme }) => sizeByScreen.mobile_m}px;
    }
    @media (min-width: 425px) {
        font-size: ${({ theme }) => sizeByScreen.mobile_l}px;
    }
    @media (min-width: 768px) {
        font-size: ${({ theme }) => sizeByScreen.tablet}px;
    }
    @media (min-width: 1024px) {
        font-size: ${({ theme }) => sizeByScreen.laptop}px;
    }
    @media (min-width: 1440px) {
        font-size: ${({ theme }) => sizeByScreen.laptop_l}px;
    }
    @media (min-width: 2560px) {
        font-size: ${({ theme }) => sizeByScreen['4k_screen']}px;
    }
`;

const PContent: React.FC<PContentProps> = ({ children, className }) => {
    return <StyledP className={classNames("font-ubuntu", className)}>{children}</StyledP>;
};

export default PContent;
