import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: #060506;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    position: relative;

    .promotionCard{
            width: 35rem;
            box-shadow: rgb(16, 1, 14) 0px 20px 30px;
            border-radius: 2.4rem;
            top: 12%;
            left: 8%;
            padding: 1.5rem 3rem;
            background: linear-gradient(135deg, rgba(246, 0, 164, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(70px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 20px;
            border:1px solid rgba(255, 255, 255, 0.18);
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;

            .bigFont{
                font-size: 10rem;
                font-weight: bold;
            }
        }
`

export const PromotionImagesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PromotionImage = styled.img<{top: number, right: number}>`
    width: 25rem;
    height: max-content;
    border-radius: 2rem;
    overflow: hidden;
    margin-right: -4rem;
    margin-top: ${props => props.top}rem;
    background-color: #9cc9f0;
    box-shadow: rgb(255, 255, 255,0.3) 0px 0px 50px 1px;
`