import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
`

export const TopFooter = styled.div`
    width: 100%;
    padding: 0rem 10rem 0.25rem 10rem;
    background-color: #060506;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    
    .logoContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .iconLogo{
        font-size: 5rem;
        }

        .iconTitle{
            font-size: 2.5rem;
            font-weight: bold;
        }
    }
   

`

export const BottomFooter = styled.div`
    width: 100%;
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;

    .title{
            font-size: 1.5rem;
            font-weight: bold;
    }


    .bottomFooterLeft{
        width: 21%;

        .socialMidiasContainer{
            font-size: 1.5rem;
            margin: 1rem 0rem;
            display: flex;
            justify-content: space-between;
        }

        .text{
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }
    }

    .bottomFooterMiddle{
        width: 21%;
        font-size: 1.5rem;
        line-height: 1.25rem;
        text-align: center;
    }

    .bottomFooterRight{
        font-size: 2rem;
        width: 21%;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        
        .iconPayment{
            margin: 0.5rem;
        }

    }
`

