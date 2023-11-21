import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
`

export const TopFooter = styled.div`
    width: 100%;
    padding: 0rem ${props => props.theme.size.px160} ${props => props.theme.size.px4} ${props => props.theme.size.px160};
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
        font-size: ${props => props.theme.size.px80};
        }

        .iconTitle{
            font-size: ${props => props.theme.size.px40};
            font-weight: bold;
        }
    }
   

`

export const BottomFooter = styled.div`
    width: 100%;
    padding: 2rem ${props => props.theme.size.px160};
    display: flex;
    justify-content: space-between;

    .title{
            font-size: ${props => props.theme.size.px24};
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
        font-size: ${props => props.theme.size.px24};
        line-height: 2rem;
        text-align: center;
    }

    .bottomFooterRight{
        font-size: ${props => props.theme.size.px32};
        width: 21%;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        
        .iconPayment{
            margin: 0.8rem;
        }

    }
`

