import styled from "styled-components";

export const Container = styled.div`
    max-width: 20%;
    padding-top: 5rem;

    .columnTextsTitle{
        font-size: 1.5rem;
        margin-bottom:1.5rem;
        font-weight: bold;
        text-align: center;
    }

    .columnTextsText{
        font-size: ${props => props.theme.fonts.p};
        margin-bottom: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
    }

`