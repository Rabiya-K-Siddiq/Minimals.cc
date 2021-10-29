import React from 'react'
import styled from 'styled-components';
import LightModeImage from '../../assets/home/lightmode.png';
import darkModeImage from '../../assets/home/darkmode.png';
import Shape from '../../assets/home/shape.svg';

export default function DarkMode() {
    return (
        <>
        <DarkModeSection>
            <Wrapper>
                {/* <ScreenOverlay>
                    <img src={Shape} alt="Image" />
                </ScreenOverlay> */}
                <Left>
                    <ImgContainer1>
                         <Img src={LightModeImage} />
                    </ImgContainer1>
                    <ImgContainer2>
                        <Img src={darkModeImage} />
                    </ImgContainer2>
                </Left>
                <Right>
                    <Heading>Easy switch between styles</Heading>
                    <Content>Dark Mode</Content>
                    <Description>A dark theme that feels easier in the eyes.</Description>
                </Right>
            </Wrapper>
        </DarkModeSection>
        </>
    );
};

const DarkModeSection = styled.section `
    background: url(${Shape}) #161c24;
    background-blend-mode: luminosity;
    background-repeat: no-repeat;
    background-size: 640px;
    background-position: 560px 54px;    
    padding: 64px 0;
    @media all and (max-width: 1280px) {
        background-size: 500px;
        background-position: 380px 12px;
    }
    @media all and (max-width: 980px) {
        background-size: 380px;
        background-position: 280px 50px;
    }
    @media all and (max-width: 768px) {
        padding: 16px 0;
        background-size: 380px;
        background-position: 200px 180px;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 480px) {
        padding: 32px;
    }
`;
const Left = styled.div `
    width: 60%;
    position: relative;
    @media all and (max-width: 768px) {
        width: 100%;
        margin-bottom: 32px;
    }
`;
const ImgContainer1 = styled.div `
    display: block;
    width: 100%;
    z-index: 98;
`;
const ImgContainer2 = styled.div `
    display: block;
    width: 100%;
    z-index: 100;
    position: absolute;
    top: -6%;
    right: 4%;
`;
const Img = styled.img `
    width: 100%;
`;
const Right = styled.div `
    width: 35%;
    @media all and (max-width: 980px) {
       width: 38%;
    }
    @media all and (max-width: 768px) {
        width: 80%;
    }
`;
const Heading = styled.p `
    font-size: 14px;
    margin-bottom: 18px;
    color: #6a6a6a;
    text-transform: uppercase;
    @media all and (max-width: 980px) {
        font-size: 12px;
    }
    @media all and (max-width: 768px) {
        font-size: 13px;
    }
`;
const Content = styled.h4 `
    font-size: 48px;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 24px;
    color: #fff;
    @media all and (max-width: 980px) {
        font-size: 38px;
    }
    @media all and (max-width: 768px) {
        font-size: 32px;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const Description = styled.p `
    font-size: 16px;
    line-height: 1.5em;
    width: 80%;
    color: #fff;
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        font-size: 14px;
    }
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;