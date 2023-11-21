import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: ${props => props.theme.size.px240} ${props => props.theme.size.px160} ${props => props.theme.size.px80} ${props => props.theme.size.px160};
    background-color: #060506;
    color: #FFFFFF;

    .bestSellerTop{
        display: flex;
        justify-content: space-between;
        margin-bottom: ${props => props.theme.size.px80};
    }

    .bestSellerTitle{
        font-size: 5.6rem;
        font-weight: bold;

    }

    .bestSellersProducts{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

`

