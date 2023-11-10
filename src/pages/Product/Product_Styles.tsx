import styled from "styled-components";
import { blackBackground } from "../../utils/constants";

export const Container = styled.div`
    width: 100%;
    padding: 20rem 8rem 12rem 8rem;
    background-color: ${blackBackground};
    display: flex;
    justify-content: center;
`


export const LeftContainer = styled.div`
    width: 52rem;
    font-size: 1.6rem;
    color: #FFFFFF;
    text-align: justify;
    line-height: 2.4rem;

    .leftImg{
        width: 52rem;
        height: 50rem;
        margin-bottom: 4rem;

        img{
            height: 30rem;
        }
    }
`

export const RightContainer = styled.div`
    width: 50rem;
    margin-left: 8rem;
    padding-top: 4rem;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    .productName{
        font-size: 4rem;
        line-height: 4.8rem;
        margin-bottom: 4rem;
        text-align: center;
        font-weight: bold;
    }

    .productPrice{
        font-size: 3.2rem;
        margin-bottom: 4rem;
        text-align: center;
    }

    .button{
        margin-bottom: 4rem;
    }
    

    
`