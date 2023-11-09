import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    color: #FFFFFF;
`

export const Banner = styled.div`
    width: 100%;
    height: 55rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .bannerImg{
        width: 100%;
        top: -25rem;
        position: absolute;
    }

    .bannerContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        z-index: 2;
        .bannerContentTitle{
            font-size: 8rem;
            font-weight: bold;
        }

        .bannerContentText{
            font-size: 4rem;
            margin-bottom: 4rem;
        }
    }
`


export const Newsletter = styled.div`
    width: 100%;
    height: 50rem;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .newsletterImg{
        width: 100%;
        position: absolute;
        top: -25rem;
    }

    .newsletterContent{
        display: flex;
        flex-direction: column;
        z-index: 2;
        
        .newsletterContentTitle{
            font-size: 8rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 4rem;
        }

        .newsletterContentText{
            font-size: 2.4rem;
            width: 40rem;
            text-align: center;
            margin-bottom: 4rem;
        }

        .newsletterInput{
            font-size: 2.4rem;
            border: 4px solid #8858ED;
            border-radius: 1rem;
            margin-bottom: 2rem;
            padding: 0.8rem 0.8rem 0.8rem 1.6rem;

        }
    }

`


export const BlackShadow = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000a6;
    position: absolute;
`



export default Container