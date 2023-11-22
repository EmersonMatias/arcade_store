import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 7.5rem 5rem;
    background-color: #060506;
   
    .mainContainer{
        display: flex;
    }
`


export const ProductsContainer = styled.div`
    width: 85%;
    padding: 6rem 0rem;
    place-items: center;
    display: grid;
    grid-row-gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row; 
`