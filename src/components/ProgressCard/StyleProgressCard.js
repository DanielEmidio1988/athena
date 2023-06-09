import styled from "styled-components";

export const ContainerProgressCard = styled.div`
    margin-bottom: 4vh;

    .title-progress{
        margin-bottom: 2vh;

        h1{
            color: #535353;
            font-weight: 400;
            font-size: 20px;
        }
    }

    .progress-user{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    
        span{
            width: 23px;
            height: 23px;
            border-radius: 50%;
            background: #6ECAA1;
        }

        div{
            margin: 0 auto;
            text-align: center;
            font-size: 12px;
            width: 150px;

            img{
                width: 4vw;
            }
        }
    }

`