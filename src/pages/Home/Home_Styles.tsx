import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    color: #FFFFFF;
`

export const Banner = styled.div`
    width: 100%;
    padding: 0 5rem;
    height: 34.375rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .bannerImg{
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
    }

    .bannerContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        z-index: 2;
    }
`


export const Newsletter = styled.div`
    width: 100%;
    height: 31.25rem;
    padding: 0 5rem;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .newsletterImg{
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
    }

    .newsletterContent{
        display: flex;
        flex-direction: column;
        z-index: 2;
        align-items: center;
        
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