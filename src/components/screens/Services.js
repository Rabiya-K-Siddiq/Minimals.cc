import React from 'react'
import styled from 'styled-components'
import IconCode from '../../assets/icons/ic_code.svg'
import IconDesign from '../../assets/icons/ic_design.svg'
import IconLogo from '../../assets/favicon/favicon.png'

export default function Services() {
    return (
        <>
        <ServiceSection>
            <Wrapper>
                <Top>
                    <Title>MINIMAL</Title>
                    <Content>What minimal helps you?</Content>
                </Top>
                <Bottom>
                    <Item>
                        <ImgBox>
                            <img src={IconDesign} width="100%" alt="Image"/>
                        </ImgBox>
                        <Heading>UI & UX Design</Heading>
                        <Details>
                            The set is built on the principles of the atomic design system.It helps you to create projects fastest and easily customized packages for your projects.
                        </Details>
                    </Item>
                    <Item>
                        <ImgBox>
                            <img src={IconCode} width="100%" alt="Image"/>
                        </ImgBox>
                        <Heading>UI & UX Design</Heading>
                        <Details>
                            The set is built on the principles of the atomic design system.It helps you to create projects fastest and easily customized packages for your projects.
                        </Details>
                    </Item>
                    <Item>
                        <ImgBox>
                            <img src={IconLogo} width="100%" alt="Image"/>
                        </ImgBox>
                        <Heading>UI & UX Design</Heading>
                        <Details>
                            The set is built on the principles of the atomic design system.It helps you to create projects fastest and easily customized packages for your projects.
                        </Details>
                    </Item>
                </Bottom>
            </Wrapper>
        </ServiceSection>
        </>
    );
};

const ServiceSection = styled.section `
    padding: 82px 0;
    @media all and (max-width: 480px) {
        padding: 32px 0 82px 0;
    }
    @media all and (max-width: 360px) {
        padding: 48px 0 82px 0;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
    padding: 0 32px;
`;
const Top = styled.div `
    padding: 16px 24px;
    display: block;
    text-align: center;
    margin-bottom: 82px;
    @media all and (max-width: 768px) {
        margin-bottom: 16px;
    }
`;
const Title = styled.p `
    font-size: 14px;
    color: #6a6a6a;
    margin-bottom: 16px;
`;
const Content = styled.h4  `
    font-size: 48px;
    font-weight: 600;
    @media all and (max-width: 980px) {
        font-size: 32px;
    }
    @media all and (max-width: 768px) {
        font-size: 28px;
    }
    @media all and (max-width: 640px) {
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
`;
const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    @media all and (max-width: 980px) {
       flex-wrap: wrap;
    }
    @media all and (max-width: 480px) {
        padding: 0;
    }
`;
const Item = styled.div `
    background-color: #f2f5f7;
    padding: 72px 32px;
    width: 30%;
    border-radius: 16px;
    &:nth-child(2) {
        background-color: #fff;
        box-shadow: -17px 27px 57px -1px #dadee2;
        -webkit-box-shadow: -17px 27px 57px -1px #dadee2;
        -moz-box-shadow: -17px 27px 57px -1px #dadee2;
        position: relative;
        bottom: 50px;
        @media all and (max-width: 980px) {
            position: inherit;
            margin-top: 48px;
        }
    }
    &:nth-child(3) {
        position: relative;
        top: 50px;
    }
    @media all and (max-width: 980px) {
        width: 80%;
        margin:0 auto;
    }
    @media all and (max-width: 768px) {
        width: 90%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        padding: 32px 24px;
    }
`;
const ImgBox = styled.div `
    display: block;
    width: 18%;
    margin: 0 auto;
    margin-bottom: 64px;
    @media all and (max-width: 980px) {
        width: 15%;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 42px;
    }
`;
const Heading = styled.h4 `
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    @media all and (max-width: 768px) {
        font-weight: 550;
        font-size: 18px;
    }
    @media all and (max-width: 640px) {
        font-weight: 500;
    }
`;
const Details = styled.p `
    color: #6a6a6a;
    font-size: 16px;
    text-align: center;
    line-height: 2em;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
