import React from 'react'
import styled from 'styled-components';
import Rocket from '../../assets/home/rocket.png'
import IconLogo from '../../assets/favicon/favicon.png'

export default function Footer() {
    return (
        <>
        <FooterSection>
            <Wrapper>
                <Top>
                    <Title>Still have questions?</Title>
                    <Description>Please describe your case to recieve the most accurate advice.</Description>
                    <a href="#">Contact Us</a>
                </Top>
                <Middle>
                    <ImageContainer>
                        <Img src={Rocket} />
                    </ImageContainer>
                    <Subscription>
                        <h4>Get started with minimal kit today</h4>
                        <a href="">Purchase Now</a>
                    </Subscription>
                </Middle>
                <Bottom>
                    <LogoBox>
                        <Img src={IconLogo} />
                    </LogoBox>
                    <CopyRight>
                        &copy; All rights reserved made by <a href="#">minimals.cc</a>
                    </CopyRight>
                </Bottom>
            </Wrapper>
        </FooterSection>
        </>
    );
};

const FooterSection = styled.section `
    padding: 48px 48px 0 48px;
    @media all and (max-width: 980px) {
        padding: 0 16px;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
`;
const Top = styled.div `
    display: block;
    text-align: center;
    padding: 6% 0;
    a{
        font-size: 16px;
        background-color: #4eac56;
        padding: 16px;
        color: #fff;
        border-radius: 8px;
        @media all and (max-width: 980px) {
            padding: 12px 20px;
            font-size: 15px;
        }
        @media all and (max-width: 480px) {
            padding: 10px 20px;
            font-size: 14px;
        }
    }
`;
const Title = styled.h4 `
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
    @media all and (max-width: 768px) {
        font-size: 24px;
    }
    @media all and (max-width: 640px) {
        font-size: 20px;
    }
`;
const Description = styled.p `
    font-size: 16px;
    color: #6a6a6a;
    margin-bottom: 48px;
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 16px;
    }
`;
const Middle = styled.div `
    background-image: linear-gradient(to right, #009b51, #008255);
    border-radius: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
    @media all and (max-width: 360px) {
        padding: 16px 0;
        text-align: center;
        margin-top: 32px;
    }
`;
const ImageContainer = styled.div `
    display: block;
    width: 35%;
    @media all and (max-width: 360px) {
        display: none;
    }
`;
const Img = styled.img `
    width: 100%;
`;
const Subscription = styled.div `
    width: 42%;
    h4 {
        font-size: 48px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 64px;
        line-height: 1.5em;
        @media all and (max-width: 1280px) {
            font-size: 40px;
        }
        @media all and (max-width: 980px) {
            font-size: 32px;
            margin-bottom: 32px;
        }
        @media all and (max-width: 768px) {
            font-size: 24px;
        }
        @media all and (max-width: 640px) {
            font-size: 20px;
        }
        @media all and (max-width: 480px) {
            font-size: 15px;
            margin-bottom: 16px;
            width: 100%;
        }
    }
    a {
        background-color: #fff;
        padding: 16px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 8px;
        @media all and (max-width: 980px) {
            font-size: 14px;
            padding: 10px 12px;
        }
        @media all and (max-width: 768px) {
            font-weight: 500;
            font-size: 13px;
        }
        @media all and (max-width: 640px) {
            padding: 8px 14px;
        }
        @media all and (max-width: 360px) {
            display: block;
            text-align: center;
            width: 60%;
            margin: 0 auto;
        }
    }
    @media all and (max-width: 360px) {
        width: 90%;
        font-size: 13px;
        font-weight: 500;
        padding: 8px 0;
    }
`;
const Bottom = styled.div `
    display: block;
    padding: 48px 0;
    @media all and (max-width: 980px) {
        padding: 38px 0;
    }
    @media all and (max-width: 768px) {
        padding: 24px 0;
    }
`;
const LogoBox = styled.div `
    display: block;
    width: 3%;
    margin: 0 auto;
    img {
        width: 100%;
    }
    @media all and (max-width: 980px) {
        width: 5%;
    }
    @media all and (max-width: 768px) {
        width: 7%;
    }
`;
const CopyRight = styled.p `
    margin: 0 auto;
    width: 15%;
    text-align: center;
    font-size: 16px;
    @media all and (max-width: 1280px) {
        width: 20%;
    }
    @media all and (max-width: 980px) {
        width: 20%;
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        width: 25%;
    }
    @media all and (max-width: 640px) {
        width: 35%;
    }
    @media all and (max-width: 480px) {
        width: 45%;
        font-size: 13px;
    }
`;