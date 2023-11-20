import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: #FFFFFF;
    border: none;
    flex-direction: column;
    position: relative;

    .navButtonIcon{
        font-size: ${props => props.theme.size.px32};
    }
`

export const PoppoverContainer = styled.div`
    padding: ${props => props.theme.size.px16};
    width: max-content;
    top: 120%;
    right: 0;
    z-index: 3;
    border-radius: 0.8rem;
    background-color: #000000;
    position: absolute;
    display: flex;
    flex-direction: column;
`