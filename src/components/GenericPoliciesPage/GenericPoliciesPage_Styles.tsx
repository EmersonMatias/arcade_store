import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 8rem;
    background-color: #060506;
    color: #FFFFFF;

    .content_Container{
        display: flex;
        text-align: justify;
        justify-content: space-between;
        font-size: 1.6rem;
        font-weight: 100;
        line-height: 3.2rem;
        padding: 0 8rem;

        .content_text{
            margin-bottom: 2rem;
        }

        .content_1, .content_2{
            width: 45%;
        }
    }

    .warningText{
        padding: 0 8rem;
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2.4rem;

    }

`