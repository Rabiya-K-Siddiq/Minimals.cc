import React from 'react'
import styled from 'styled-components'
import GridImage from '../../assets/home/theme-color/grid.png'
import ScreenImg from '../../assets/home/theme-color/screen-default.png'
import BlockImg1 from '../../assets/home/theme-color/block1-default.png'
import BlockImg2 from '../../assets/home/theme-color/block2-default.png'
import SlideBar from '../../assets/home/theme-color/sidebar-default.png'

export default function ThemeColor() {
    return (
        <>
         <ThemeSection>
            <Wrapper>
                <Top>
                    <Heading>Choose your style</Heading>
                    <Title>Theme color</Title>
                    <Description>Express your own style with just one click.</Description>
                </Top>
                <Bottom>
                    <ScreenImage>
                        <img src={ScreenImg} alt="Image" />
                    </ScreenImage>
                    <Block1>
                        <img src={BlockImg1} alt="Image" />
                    </Block1>
                    <Block2>
                        <img src={BlockImg2} alt="Image" />
                    </Block2>
                    <Block3>
                        <img src={SlideBar} alt="Image" />
                    </Block3>
                </Bottom>
            </Wrapper>
        </ThemeSection>
        </>
    );
};
const ThemeSection = styled.section `
    padding: 56px;
    background-image: linear-gradient(0deg, #fff 0%, #e2e6ea 100%);
    @media all and (max-width: 980px) {
        padding: 56px 56px 0 56px;
    }
    @media all and (max-width: 768px) {
        padding: 56px 0 0 0;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
`;
const Top = styled.section `
    display: block;
    text-align: center;
`;
const Heading = styled.p `
    font-size: 14px;
    color: #6a6a6a;
    margin-bottom: 24px;
    text-transform: uppercase;
`;
const Title = styled.h4 `
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 24px;
    @media all and (max-width: 980px) {
        font-size: 36px;
    }
    @media all and (max-width: 768px) {
        font-size: 30px;
    }
    @media all and (max-width: 640px) {
        font-size: 24px;
    }
`;
const Description = styled.p `
    font-size: 16px;
    color: #6a6a6a;
    margin-bottom: 48px;
`;
const Bottom = styled.section `
    background: url(${GridImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
`;
const ScreenImage = styled.div `
    display: block;
    width: 100%;
    z-index: 100;
    img {
        width: 100%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Block1 = styled.div `
    position: absolute;
    width: 100%;
    top: -9px;
    z-index: 113;
    img {
        width: 100%;
    }
`;
const Block2 = styled.div `
    position: absolute;
    top: 0;
    z-index: 114;
    img {
        width: 100%;
    }
`;
const Block3 = styled.div `
    position: absolute;
    top: -23px;
    left: 6px;
    z-index: 115;
    img {
        width: 100%;
    }
`;