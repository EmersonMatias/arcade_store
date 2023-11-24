import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: clamp(12rem, 16.667vw, 20rem) clamp(0rem, 8.33vw, 10rem) clamp(5rem, 8.33vw, 10rem) clamp(0rem, 8.33vw, 10rem);
    background-color: #060506;
    color: #FFFFFF;
`

export const GeneralSectionHeader= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;

        .marginMobile{
            margin-top: 1.5rem;
        }

        margin-bottom: 2rem;
    }
`

