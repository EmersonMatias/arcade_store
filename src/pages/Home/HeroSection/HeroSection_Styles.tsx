import styled from "styled-components";
import Background from "../../../assets/background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 8rem;
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;

    .promotionCard{
        width: 56rem;
        border-radius: 2.4rem;
        top: 16rem;
        left: 16rem;
        padding: 2.4rem 4.8rem;
        position: absolute;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        border:1px solid rgba(255, 255, 255, 0.18);
        box-shadow: rgb(16, 1, 14) 0px 20px 30px;


        .commomPhrase{
            font-size: 3.2rem;
            margin-bottom: 1.6rem;
        }

        .gameTitle{
            font-size: 7.2rem;
            margin-bottom: 1.6rem;
            font-weight: bold;
        }

        .streamings{
            font-size: 2.4rem;
            margin-bottom: 1.6rem;
        }
    }

    .gameCover{
        position: absolute;
        right: 16rem;
        top: 16rem;
        
        img{
            border-radius: 4rem;
            width: 48rem;
            height: 62rem;
            box-shadow: rgb(255, 255, 255,0.3) 0px 0px 50px 1px;
        }
    }
`