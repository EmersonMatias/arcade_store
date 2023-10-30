import styled from "styled-components";

export const Container = styled.div`
    width: 35rem;
    height: 50rem;
    border-radius: 4rem;
    transition: 0.8s ;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    .categoryCardImg{
        width: 35rem;
        height: 50rem;
        object-fit: cover;
        position: absolute;
        transition: 0.8s ;
    }
            
    .categoryCardText{
        font-size: 3.2rem;
        z-index: 2;
         font-weight: bold;
        color: #ffffff;
    }

    &:hover{
        transition: 0.8s ;

        .categoryCardImg{
            height: 70rem;
            transition: 0.8s ;
        }

        .gradient{
            transition: 0.8s;
            width: 35rem;
            height: 50rem;
            border-radius: 4rem;
            background-color: #000000b7;
            position: absolute;
        }

        .categoryCardText{
            transition: 0.8s;
            font-size: 4rem;
        }
                
    }    
`