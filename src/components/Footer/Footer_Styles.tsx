import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
`

export const TopFooter = styled.div`
    width: 100%;
    padding: 0rem 24rem 4rem 24rem;
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
        font-size: 8rem;
        }

        .iconTitle{
            font-size: 4rem;
            font-weight: bold;
        }
    }
   

`

export const BottomFooter = styled.div`
    width: 100%;
    padding: 2rem 16rem;
    display: flex;
    justify-content: space-between;

    .title{
            font-size: 2.4rem;
            font-weight: bold;
    }


    .bottomFooterLeft{
        width: 21%;

        .socialMidiasContainer{
            font-size: 2.4rem;
            margin: 1.6rem 0rem;
            display: flex;
            justify-content: space-between;
        }

        .text{
            font-size: 1.4rem;
            margin-bottom: 0.8rem;
        }
    }

    .bottomFooterMiddle{
        width: 21%;
        font-size: 1.6rem;
        line-height: 2rem;
        text-align: justify;
    }

    .bottomFooterRight{
        font-size: 3.2rem;
        width: 21%;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        
        .iconPayment{
            margin: 0.8rem;
        }

    }
`

