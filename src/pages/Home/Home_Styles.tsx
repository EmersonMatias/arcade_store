import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;


    .maisvendidos{
        width: 100%;
        height: 40vh;
        background-color: #000000;
    }
`

export const Banner = styled.div`
    width: 100%;
    height: 45rem;
    background-color: azure;
    color: #FFFFFF;
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

    .gradient{
        width: 100%;
        height: 100%;
        background-color: #000000a6;
        position: absolute;
    }

    .bannerContent{
        display: flex;
        flex-direction: column;
        align-items: center;

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




export default Container