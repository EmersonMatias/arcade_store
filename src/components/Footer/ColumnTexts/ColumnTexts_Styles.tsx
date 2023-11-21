import styled from "styled-components";

export const Container = styled.div`
    max-width: 20%;
    padding-top: ${props => props.theme.size.px80};

    .columnTextsTitle{
        font-size: ${props => props.theme.size.px24};
        margin-bottom:${props => props.theme.size.px24};
        font-weight: bold;
        text-align: center;
    }

    .columnTextsText{
        font-size: ${props => props.theme.fonts.p};
        margin-bottom: ${props => props.theme.size.px24};
        line-height: ${props => props.theme.size.px24};
        text-align: center;
    }

`