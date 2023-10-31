import styled from "styled-components";
import { defaultPurpleColor } from "../../utils/constants";

export const Container = styled.button`
    font-size: 1.6rem;
    padding: 0.8rem 5.6rem;
    border-radius: 4rem;
    background-color: ${defaultPurpleColor};
    color: #FFFFFF;
    font-weight: bold;
    border: none;

    &:hover{
        background-color: #371a76;
    }
`