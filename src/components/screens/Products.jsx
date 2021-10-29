import React from 'react'
import styled from 'styled-components';
import ScreenImage1 from '../../assets/home/screen-light-1.png';
import ScreenImage2 from '../../assets/home/screen-light-2.png';
import ScreenImage3 from '../../assets/home/screen-light-3.png';

export default function Products() {
    return (
        <>
        <ProductSection>
            <Wrapper>
                <Left>
                    <Heading>INTERFACE STARTER KIT</Heading>
                    <Content>Huge pack of elements</Content>
                    <Description>
                        We collected most popular elements.Menu, sliders, buttons, inputs etc.are all here.Just dive in!
                    </Description>
                    <a href="#">View All Components</a>
                </Left>
                <Right>
                    <ImageBox1>
                        <Img src={ScreenImage1} />
                    </ImageBox1>
                    <ImageBox2>
                        <Img src={ScreenImage2} />
                    </ImageBox2>
                    <ImageBox3>
                        <Img src={ScreenImage3} />
                    </ImageBox3>
                </Right>
            </Wrapper>
        </ProductSection>
        </>
    );
};

const ProductSection = styled.section `
    padding: 25% 5%;
    background: linear-gradient(0deg, #e0e4e9 9%, #fff 86%);
    @media all and (max-width: 1280px) {
        padding: 25% 5%;
    }
    @media all and (max-width: 980px) {
        padding: 5% 5% 60% 5%;
    }
    @media all and (max-width: 640px) {
        padding: 7% 5% 60% 5%;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
`;
const Left = styled.div `
    width: 40%;
    a {
        border: 1px solid #6a6a6a;
        border-radius: 8px;
        padding: 12px;
        font-weight: 600;
        color: #000;
        @media all and (max-width: 1280px) {
            font-size: 13px;
        }
        @media all and (max-width: 480px) {
            padding: 6px 12px;
            font-weight: 500;
        }
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Heading = styled.p `
    font-size: 14px;
    color: #6a6a6a;
    margin-bottom: 18px;
    @media all and (max-width: 768px) {
        font-size: 13px;
    }
`;
const Content = styled.h4 `
    font-size: 48px;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 24px;
    @media all and (max-width: 1280px) {
        font-size: 36px;
    }
    @media all and (max-width: 768px) {
        font-size: 26px;
    }
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
`;
const Description = styled.p `
    font-size: 16px;
    line-height: 1.5em;
    margin-bottom: 48px;
    width: 80%;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
    @media all and (max-width: 640px) {
        margin-bottom: 24px;
        width: 100%;
    }
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const Right = styled.div `
    width: 58%;
    position: relative;
    bottom: 250px;
    @media all and (max-width: 980px) {
        width: 100%;
        bottom: 0;
        margin: 82px 0 120px 0;
    }
`;
const ImageBox1 = styled.div `
    display: block;
    width: 42%;
    transform: skewY(11deg);
    position: absolute;
    left: -2%;
    top: 34px;
    z-index: 115;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    -webkit-box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    -moz-box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    @media all and (max-width: 980px) {
        width: 38%;
    }
`;
const ImageBox2 = styled.div `
    display: block;
    width: 42%;
    transform: skewY(11deg);
    position: absolute;
    right: 35%;
    z-index: 110;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    -webkit-box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    -moz-box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    @media all and (max-width: 980px) {
        width: 38%;
    }
`;
const ImageBox3 = styled.div `
    display: block;
    width: 42%;
    transform: skewY(11deg);
    position: absolute;
    right: 13%;
    top: -33px;
    z-index: 100;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    -webkit-box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    -moz-box-shadow: 22px -16px 57px -1px rgba(51,49,49,0.75);
    @media all and (max-width: 980px) {
        width: 38%;
    }
`;
const Img = styled.img `
    width: 100%;
`;
