'use client'
import styled from "styled-components";
import CenteredContainer from "@/components/CenteredContainer/ui";
import A from "@/components/A/ui";
import BlackButton from "@/components/shared/BlackButton/ui";
const HeaderBlock = styled.header`
    border-bottom: 1px solid rgb(217, 217, 217);
`;
const HeaderNavigation = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
`;
const HeaderLogo = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

const NavLinks = styled.nav`
    display: flex;
`;

export default function Header() {

    return (
        <HeaderBlock>
            <CenteredContainer>
                <HeaderNavigation>
                    <HeaderLogo>
                        Some Company
                    </HeaderLogo>
                    <NavLinks>
                        <BlackButton width="150px">
                            <A linkAddress="/contact-us" text="Contact us" />
                        </BlackButton>
                    </NavLinks>
                </HeaderNavigation>
            </CenteredContainer>
        </HeaderBlock>
    )
}
