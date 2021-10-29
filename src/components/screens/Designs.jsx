import React from 'react'
import Clear1 from '../../assets/home/clean-1.png';
import Clear2 from '../../assets/home/clean-2.png';
import Clear3 from '../../assets/home/clean-3.png';
import Clear4 from '../../assets/home/clean-4.png';
import Clear5 from '../../assets/home/clean-5.png';
import Clear6 from '../../assets/home/clean-6.png';
import Clear8 from '../../assets/home/clean-7.png';
import Clear9 from '../../assets/home/clean-8.png';
import Clear7 from '../../assets/home/clean-9.png';
import Clear10 from '../../assets/home/clean-10.png';
import styled from 'styled-components';

export default function Designs() {
    return (
        <>
        <DesignSection>
            <Wrapper>
                <Contents>
                <Heading>CLEAN & CLEAR</Heading>
                <Content>Beautiful, modern and clean user interfaces</Content>
                </Contents>
                <Images>
                    <img src={Clear1} alt="Image" />
                    <img src={Clear2} alt="Image" />
                    <img src={Clear3} alt="Image" />
                    <img src={Clear4} alt="Image" />
                    <img src={Clear5} alt="Image" />
                    <img src={Clear6} alt="Image" />
                    <img src={Clear7} alt="Image" />
                    <img src={Clear8} alt="Image" />
                    <img src={Clear9} alt="Image" />
                    <img src={Clear10} alt="Image" />
                </Images>
            </Wrapper>
        </DesignSection>
        </>
    );
};

const DesignSection = styled.section `
    padding: 0 48px;
    padding-bottom: 48px;
    @media all and (max-width: 1280px){
        padding-top: 0;
    }
    @media all and (max-width: 980px) {
        padding-bottom: 0;
    }
    @media all and (max-width: 480px) {
        padding: 0 24px;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
    padding-bottom: 70%;
`;
const Contents = styled.div `
    display: block;
    width: 50%;
    position: relative;
    top: 175px;
    z-index: 99;
    @media all and (max-width: 1280px){
        width: 60%;
    }
    @media all and (max-width: 980px) {
        top: 80px;
    }
    @media all and (max-width: 640px) {
        width: 70%;
    }
    @media all and (max-width: 480px) {
        width: 80%;
    }
`;
const Heading = styled.p `
    font-size: 14px;
    color: #6a6a6a;
    margin-bottom: 18px;
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const Content = styled.h4 `
    font-size: 48px;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 24px;
    @media all and (max-width: 1280px){
        font-size: 38px;
    }
    @media all and (max-width: 980px) {
        font-size: 30px;
    }
    @media all and (max-width: 768px) {
        font-size: 24px;
    }
    @media all and (max-width: 640px) {
        font-size: 20px;
    }
`;
const Images = styled.div `
    position: relative;
    z-index: 98;
    img {
        width: 100%;
        position: absolute;
        top: 0;
    }
`;
