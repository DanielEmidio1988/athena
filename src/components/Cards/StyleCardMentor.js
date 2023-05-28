import styled from "styled-components";

export const ContainerCardMentor = styled.div`
    background: #F5F5F5;
    border-radius: 10px;
    width: 336px;
    height: 432px;
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    div{
        height: 70%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    div h3{
        margin-top: 120px;
        font-size: 20px;
        font-weight: 600;
    }

    div p{
        font-size: 14px;
        font-weight: 400;
    }

    div img{
        margin: 0 auto;
    }

    button{
        width: 90px;
        height: 30px;
        background: linear-gradient(169.14deg, #00203F 20%, #6ECAA1 100%);
        border: none;
        color: #fff;
        margin-bottom: 20px;
        border-radius: 60px;
    }

    button:hover{
        cursor: pointer;
    }
`