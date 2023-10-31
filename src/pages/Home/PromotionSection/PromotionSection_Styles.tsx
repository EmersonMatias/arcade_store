import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: #060506;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
`

export const PromotionContainer = styled.div`
    width: 100%;
    height: 75rem;
    position: relative;

        .promotionCard{
            width: 56rem;
            box-shadow: rgb(16, 1, 14) 0px 20px 30px;
            border-radius: 2.4rem;
            top: 16rem;
            left: 16rem;
            padding: 2.4rem 4.8rem;
            background: linear-gradient(135deg, rgba(246, 0, 164, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(70px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 20px;
            border:1px solid rgba(255, 255, 255, 0.18);
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;

            .commomPhrase{
                font-size: 3.2rem;
                margin-bottom: 1.6rem;
            }

            .gameTitle{
                font-size: 4rem;
                margin-bottom: 1.6rem;
                font-weight: bold;
                text-align: center;

                .gameTitle1{
                    font-size: 16rem;
                }
            }
        }
    
`

export const PromotionImgContainer = styled.div<{top: number, right: number}>`
    width: 38rem;
    height: 48rem;
    border-radius: 2rem;
    top: ${props => props.top}rem;
    right: ${props => props.right}rem;
    overflow: hidden;
    position: absolute;
    background-color: aliceblue;
    box-shadow: rgb(255, 255, 255,0.3) 0px 0px 50px 1px;

    .promotionImg{
        width: 100%;
        height: 100%;
        
    }
`