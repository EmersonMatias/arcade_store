import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: clamp(5rem, 8.33vw, 10rem) clamp(0rem, 8.33vw, 10rem) clamp(5rem, 8.33vw, 10rem) clamp(0rem, 8.33vw, 10rem);
    background-color: #1D1B1D;

    .categories{
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
        .categories{
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            margin-top: 1.5rem;
        }
    }
`