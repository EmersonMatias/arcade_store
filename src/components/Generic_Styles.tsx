import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const H2Section = styled.h2`
    font-size: 5.6rem;
    font-weight: bold;
    color: #FFFFFF;
`

export const NavLinkNoStyle = styled(NavLink)`
    text-decoration: none;
    color: #FFFFFF;
`

export const PageTitle = styled.h2`
    font-size: 8rem;
    padding: 8rem 0rem;
    font-weight: bold;
    color: #FFFFFF;
`

export const Heading1 = styled.h1`
    font-size: ${props => props.theme.fonts.h1};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h1};
`
export const Heading2 = styled.h2`
    font-size: ${props => props.theme.fonts.h2};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h2};

`
export const Heading3 = styled.h3`
    font-size: ${props => props.theme.fonts.h3};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h3};
`
export const Heading4 = styled.h4`
    font-size: ${props => props.theme.fonts.h4};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h4};
`
export const Heading5 = styled.h5`
    font-size: ${props => props.theme.fonts.h5};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h5};
`
export const Heading6 = styled.h6`
    font-size: ${props => props.theme.fonts.h6};
    font-weight: bold;
    line-height: ${props => props.theme.lineHeight.h6};
`

export const Paragraph = styled.p`
    font-size: ${props => props.theme.fonts.p};
    line-height: ${props => props.theme.lineHeight.p};
`


