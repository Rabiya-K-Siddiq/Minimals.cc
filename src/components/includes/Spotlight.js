import React from 'react'
import styled from 'styled-components'
import Daimond from '../../assets/home/ic-sketch-small.svg'
import IconDaimond from '../../assets/home/ic_sketch.svg'
import IconMaterial from '../../assets/home/ic_material.svg'
import IconJs from '../../assets/home/ic_js.svg'
import IconTs from '../../assets/home/ic_ts.svg'
import IconFigma from '../../assets/home/ic_figma.svg'
import IconReact from '../../assets/home/ic_react.svg'
import Hero from '../../assets/home/hero.png'

export default function Spotlight() {
    return (
        <>
        <SpotlightSection>
            <Wrapper>
                <Content>
                    <Title>Start a new project with <Fill>Minimal</Fill></Title>
                    <Description>
                        The starting point for your next project based on easy-to-customize Material-UI &copy; helps you build apps faster and better.
                    </Description>
                    <Preview>
                        <IconBox src={Daimond} alt="Preview"></IconBox>
                        <PreviewLink href="">Preview in Sketch Cloud</PreviewLink>
                    </Preview>
                    <Button>Live Preview</Button>
                    <IconList>
                        <IconSingle><A href=""><Image src={IconDaimond} alt=""/></A></IconSingle>
                        <IconSingle><A href=""><Image src={IconFigma} alt=""/></A></IconSingle>
                        <IconSingle><A href=""><Image src={IconMaterial} alt=""/></A></IconSingle>
                        <IconSingle><A href=""><Image src={IconReact} alt=""/></A></IconSingle>
                        <IconSingle><A href=""><Image src={IconJs} alt=""/></A></IconSingle>
                        <IconSingle><A href=""><Image src={IconTs} alt=""/></A></IconSingle>
                    </IconList>
                </Content>
                <BlendedImage>
                    <ImageContainer>
                        <Picture src={Hero} alt="Image"></Picture>
                    </ImageContainer>
                </BlendedImage>
            </Wrapper>
        </SpotlightSection>
        </>
    );
};

const SpotlightSection = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px ;
    padding-bottom: 64px;
    @media all and (max-width: 980px) {
        padding-bottom: 16px;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Content = styled.div `
    width: 48%;
    padding: 24px 0;
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 980px) {
        width: 80%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Title = styled.h3 `
    font-size: 64px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 24px;
    line-height: 1.2em;
    @media all and (max-width: 1280px) {
        font-size: 48px;
    }
    @media all and (max-width: 980px) {
        font-size: 42px;
    }
    @media all and (max-width: 768px) {
        font-size: 38px;
    }
    @media all and (max-width: 480px) {
        font-size: 32px;
    }
`;
const Fill = styled.span `
    font-size: 64px;
    font-weight: 600;
    color: #4eac56;
    @media all and (max-width: 1280px) {
        font-size: 48px;
    }
    @media all and (max-width: 980px) {
        font-size: 42px;
    }
    @media all and (max-width: 768px) {
        font-size: 38px;
    }
    @media all and (max-width: 480px) {
        font-size: 32px;
    }
`;
const Description = styled.section `
    color: #fff;
    font-size: 16px;
    margin-bottom: 48px;
    line-height: 2em;
    @media all and (max-width: 1280px) {
        font-size: 14px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 32px;
    }
`;
const Preview = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 64px;
    @media all and (max-width: 980px) {
        margin-bottom: 32px;
    }
`;
const IconBox = styled.img `
    display: block;
    width: 4%;
    margin-right: 8px;
    @media all and (max-width: 480px) {
        width: 8%;
    }
`;
const PreviewLink = styled.a `
    color: #fff;
    font-size: 15px;
    text-decoration: underline;
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const Button = styled.a `
    color: #fff;
    background-color: #4eac56;
    padding: 16px;
    border-radius: 8px;
    font-size: 16px;
    @media all and (max-width: 980px) {
        padding: 10px 16px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        padding: 8px 14px;
    }
`;
const IconList = styled.ul `
    display: flex;
    align-items: center;
    margin-top: 38px;
    @media all and (max-width: 480px) {
        margin-top: 16px;
    }
`;
const IconSingle = styled.li `
    margin-right: 10px;
`;
const A = styled.a `
    width: 100%;
    padding: 12px;
`;
const Image = styled.img `
    display: block;
    width: 100%;
`;
const BlendedImage = styled.div `
    width: 50%;
    padding: 24px;
    opacity: 0.3;
    @media all and (max-width: 1280px) {
        width: 90%;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const ImageContainer = styled.div `
    display: block;
    width: 100%;
`;
const Picture = styled.img `
    width: 100%;
`;