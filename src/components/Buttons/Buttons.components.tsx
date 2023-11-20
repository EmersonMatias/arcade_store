import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
    width:fit-content ;
    font-size: ${props => props.theme.fonts.p};
    padding: ${props => props.theme.size.px16} ${props => props.theme.size.px40};
    border-radius: ${props => props.theme.size.px32};
    font-weight: bold;
    border: none;
`
export const WhiteButton = styled(Button)`
    border: 3px solid #FFFFFF;
    background-color: #FFFFFF;
    color: #8858ED;

    &:hover{
        background-color: #8858ED;
        color: #FFFFFF;
    }
`

export const ButtonNavLink = styled(NavLink)`
    width:fit-content ;
    font-size: ${props => props.theme.fonts.p};
    padding: ${props => props.theme.size.px16} ${props => props.theme.size.px40};
    border-radius: ${props => props.theme.size.px32};
    font-weight: bold;
    border: none;
    text-decoration: none;
`

export const WhiteButtonNavLink = styled(ButtonNavLink)`
    border: 3px solid #FFFFFF;
    background-color: #FFFFFF;
    color: #8858ED;

    &:hover{
        background-color: #8858ED;
        color: #FFFFFF;
    }
`






