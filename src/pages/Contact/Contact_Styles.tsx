import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 8rem;
    background-color: #060506;
    color: #FFFFFF;
    flex-wrap: wrap;


    .title{
        font-size: 8rem;
        padding: 8rem 0rem;
        font-weight: bold;
    }

    .main_Container{
        display: flex;


        .infos_Container{
            width: 50%;
            font-size: 2.4rem;
            font-weight: bold;
    
            .infos_Title{
                font-size: 3.6rem;
                margin-bottom: 4rem;
            }

            .infos_Content{
                display: flex;
                margin-bottom: 2rem;
                word-break: break-all;
            }
        }

        .forms_Container{
            width: 50%;
            font-size: 2.4rem;
            padding: 0 8rem;

            form{
                display: flex;
                flex-direction: column;

                label{
                    margin-bottom: 0.8rem;
                    font-weight: 100;
                }

                input{
                    border: 4px solid #8858ED;
                    margin-bottom: 1.6rem;
                    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
                    
                }
            }
           
        }
    }
`