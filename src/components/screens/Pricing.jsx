import React from 'react'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.css'
import IconDaimond from '../../assets/home/ic_sketch.svg'
import IconJs from '../../assets/home/ic_js.svg'
import IconTs from '../../assets/home/ic_ts.svg'
import IconFigma from '../../assets/home/ic_figma.svg'

export default function Pricing() {
    return (
        <>
        <PricingSection>
            <Wrapper>
                <Top>
                    <Heading>Pricing Plans</Heading>
                    <Title>The right plan for your business</Title>
                    <Description>Choose the perfect plan for your needs.Always flexible to grow</Description>
                </Top>
                <Bottom>
                    <Item>
                        <Premium>License</Premium>
                        <LsType>Standard</LsType>
                        <IconList>
                            <Icons>
                                <ImgContainer><img src={IconJs} alt="Image" /></ImgContainer>
                            </Icons>
                        </IconList>
                        <UlContainer>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>One end products</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>12 months updates</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>6 months of support</Li>
                        </UlContainer>
                        <Topics>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>JavaScript version</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>TypeScript version</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>Design Resources</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>Commercial applications</Li>
                        </Topics>
                        <More>Learn more<i class="fas fa-chevron-right"></i></More>
                        <Button href="">Choose Plan</Button>
                    </Item>
                    <Item>
                        <Premium>License</Premium>
                        <LsType>Standard Plus</LsType>
                        <IconList>
                            <Icons>
                                <ImgContainer><img src={IconDaimond} alt="Image" /></ImgContainer>
                            </Icons>
                            <Icons>
                                <ImgContainer><img src={IconFigma} alt="Image" /></ImgContainer>
                            </Icons>
                            <Icons>
                                <ImgContainer><img src={IconJs} alt="Image" /></ImgContainer>
                            </Icons>
                            <Icons>
                                <ImgContainer><img src={IconTs} alt="Image" /></ImgContainer>
                            </Icons>
                        </IconList>
                        <UlContainer>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>One end products</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>12 months updates</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>6 months of support</Li>
                        </UlContainer>
                        <Topics>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>JavaScript version</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>TypeScript version</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>Design Resources</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>Commercial applications</Li>
                        </Topics>
                        <More>Learn more<i class="fas fa-chevron-right"></i></More>
                        <ButtonFill href="">Choose Plan</ButtonFill>
                    </Item>
                    <Item>
                        <Premium>License</Premium>
                        <LsType>Extended</LsType>
                        <IconList>
                            <Icons>
                                <ImgContainer><img src={IconDaimond} alt="Image" /></ImgContainer>
                            </Icons>
                            <Icons>
                                <ImgContainer><img src={IconFigma} alt="Image" /></ImgContainer>
                            </Icons>
                            <Icons>
                                <ImgContainer><img src={IconJs} alt="Image" /></ImgContainer>
                            </Icons>
                            <Icons>
                                <ImgContainer><img src={IconTs} alt="Image" /></ImgContainer>
                            </Icons>
                        </IconList>
                        <UlContainer>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>One end products</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>12 months updates</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>6 months of support</Li>
                        </UlContainer>
                        <Topics>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>JavaScript version</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>TypeScript version</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>Design Resources</Li>
                            <Li><i class="fa fa-check" aria-hidden="true"></i>Commercial applications</Li>
                        </Topics>
                        <More>Learn more<i class="fas fa-chevron-right"></i></More>
                        <Button href="">Choose Plan</Button>
                    </Item>
                </Bottom>
            </Wrapper>
        </PricingSection>
        </>
    );
};
const PricingSection = styled.section `
    padding: 56px;
    @media all and (max-width: 480px) {
        padding: 56px 24px;
    }
    @media all and (max-width: 360px) {
        padding: 56px 24px 0 24px;
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
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const Title = styled.h4 `
    font-size: 42px;
    font-weight: 600;
    margin: 24px 0;
    @media all and (max-width: 980px) {
        font-size: 32px;
    }
    @media all and (max-width: 768px) {
        font-size: 24px;
    }
    @media all and (max-width: 640px) {
        font-size: 20px;
    }
    @media all and (max-width: 480px) {
        font-size: 18px;
    }
`;
const Description = styled.p `
    font-size: 16px;
    color: #6a6a6a;
    margin-bottom: 48px;
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
    @media all and (max-width: 360px) {
        margin-bottom: 16px;
    }
`;
const Bottom = styled.section `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px 16px;
    @media all and (max-width: 980px) {
        padding: 0 32px;
        flex-wrap: wrap;
    }
    @media all and (max-width: 640px) {
        padding: 64px 0;

    }
    @media all and (max-width: 480px) {
        padding: 16px;
    }
    @media all and (max-width: 360px) {
        padding: 16px;
    }
`;
const Item = styled.div `
    width: 31%;
    padding: 48px 32px;
    border-radius: 16px;
    background-color: #fff;
    &:nth-child(1) {
        z-index: 99;
        @media all and (max-width: 980px) {
            box-shadow: -15px 13px 57px -1px #d0d6dc, 0px 18px 57px -1px rgba(51,49,49,0.75);
            -webkit-box-shadow: -15px 13px 57px -1px #d0d6dc, 0px 18px 57px -1px rgba(51,49,49,0.75);
        }
    }
    &:nth-child(2) {
        padding: 24px;
        box-shadow: -15px 13px 57px -1px #d0d6dc, 0px 18px 57px -1px rgba(51,49,49,0.75);
        -webkit-box-shadow: -15px 13px 57px -1px #d0d6dc, 0px 18px 57px -1px rgba(51,49,49,0.75);
        z-index: 90;
    }
    &:nth-child(3) {
        z-index: 98;
        @media all and (max-width: 980px) {
            box-shadow: -15px 13px 57px -1px #d0d6dc, 0px 18px 57px -1px rgba(51,49,49,0.75);
            -webkit-box-shadow: -15px 13px 57px -1px #d0d6dc, 0px 18px 57px -1px rgba(51,49,49,0.75);
        }
    }
    @media all and (max-width: 1280px) {
        width: 32%;
    }
    @media all and (max-width: 980px) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 24px;
    }
    @media all and (max-width: 768px) {
        width: 100%;
        margin-bottom: 48px;
    }
    @media all and (max-width: 360px) {
        padding: 32px 16px;
    }
`;
const Premium = styled.h5 `
    font-size: 14px;
    color: #6a6a6a;
    margin-bottom: 18px;
    text-transform: uppercase;
    @media all and (max-width: 1280px) {
        font-size: 13px;
    }
`;
const LsType = styled.p `
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 24px;
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
    @media all and (max-width: 480px) {
        font-size: 18px;
    }
`;
const IconList = styled.ul `
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    @media all and (max-width: 360px) {
        margin-bottom: 16px;
    }
`;
const Icons = styled.li `
    margin-right: 8px;
`;
const ImgContainer = styled.div `
    display: block;
    width: 100%;
    img {
        width: 100%;
    }
    @media all and (max-width: 1280px) {
        width: 80%;
    }
`;
const UlContainer = styled.ul `
    border-bottom: 1px dashed #6a6a6a;
    margin-bottom: 16px;
`;
const Topics = styled.ul `
`;
const Li = styled.li `
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px;
    i {
        color: #4eac56;
        margin-right: 8px;
        @media all and (max-width: 1280px) {
            font-size: 13px;
        }
    }
    @media all and (max-width: 1280px) {
        font-size: 14px;
    }
    @media all and (max-width: 360px) {
        font-size: 13px;
    }
`;
const More = styled.a `
    color: #6a6a6a;
    text-align: end;
    display: block;
    text-decoration: underline;
    font-size: 16px;
    i {
        color: #6a6a6a;
        margin-left: 4px;
        font-size: 13px;
    }
    @media all and (max-width: 1280px) {
        font-size: 15px;
    }
`;
const Button = styled.a `
    color: #4eac56;
    display: block;
    padding: 16px;
    margin-top: 24px;
    border: 1px solid #4eac56;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    @media all and (max-width: 1280px) {
        padding: 12px;
    }
    @media all and (max-width: 360px) {
        padding: 6px 12px;
        font-weight: 500;
        font-size: 14px;
    }
`;
const ButtonFill = styled.a `
    font-size: 16px;
    background-color: #4eac56;
    color: #fff;
    display: block;
    padding: 16px;
    margin-top: 24px;
    border: 1px solid #4eac56;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    @media all and (max-width: 1280px) {
        padding: 12px;
    }
`;
