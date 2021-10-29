import React from 'react'
import styled from 'styled-components';
import BgImage from '../../assets/overlay.svg';
import Header from '../includes/Header';
import Spotlight from '../includes/Spotlight';

export default function Home() {
    return (
        <>
        <HomeSection>
            <Header/>
            <Spotlight />
        </HomeSection>
        
    </>
    );
};

const HomeSection = styled.section `
    background: url(${BgImage}) transparent;
    background-repeat: no-repeat;
    background-size: cover;
`;