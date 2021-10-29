import React from 'react'
import styled from 'styled-components';
import BrandLogo from '../../assets/brand/logo-single.svg';

export default function Header() {
    return (
        <>
        <HeaderSection>
            <Wrapper>
                <LogoSection class="left">
                    <LogoContainer class="logo">
                        <Logo src={BrandLogo} width="100%"/>
                    </LogoContainer>
                    <Version>v2.6.0</Version>
                </LogoSection>
                <Nav>
                    <NavItems>
                        <NavItem><a href="">Home</a></NavItem>
                        <NavItem><a href="">Components</a></NavItem>
                        <NavItem><a href="">Pages</a></NavItem>
                        <NavItem><a href="">Documentation</a></NavItem>
                        <NavItem><a href="">Purchase Now</a></NavItem> 
                    </NavItems>
                </Nav>
            </Wrapper>
        </HeaderSection>
    </>
    );
};
const HeaderSection = styled.header `
    padding: 24px 68px;
    @media all and (max-width: 1280px) {
        padding: 24px 52px;
    }
`;
const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoSection = styled.div `
    display: flex;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 45%;
    }
    @media all and (max-width: 768px) {
        width: 60%;
    }
`;
const LogoContainer = styled.h1 `
    width: 8%;
    margin-right: 8px;
    @media all and (max-width: 1280px) {
        width: 13%;
    }
    @media all and (max-width: 480px) {
        width: 18%;
    }
`;
const Logo = styled.img `
    width: 100%;
`;
const Version = styled.span `
    background-color: #193049;
    border-radius: 0.5rem;
    padding: 4px 6px;
    font-size: 14px;
    color: #0e51b1;
`;
const Nav = styled.nav `
    width: 50%;
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const NavItems = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavItem = styled.li `
    margin-right: 24px;
    font-size: 14px;
    font-weight: 550;
    a{
        color: #fff;
        &:hover {
            color: #4eac56;
            transition: .20sec;
        }
    }
    &:last-child {
        background-color: #4eac56;
        padding: 8px 10px;
        border-radius: 8px;
        margin-right: 0;
        @media all and (max-width: 1280px) {
            font-size: 13px;
        }
    }
`;
