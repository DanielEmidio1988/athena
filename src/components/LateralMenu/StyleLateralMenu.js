import styled from "styled-components"

export const ContainerLateralMenu = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E1E1E1;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .box-display-user{
        margin: 0 0 60px 60px;
        padding-top: 60px;

        div h3{
            font-size: 25px;
            font-weight: 600,     
        }

        div p{
            font-size: 20px;
            font-weight: 400;
        }

        div{
            flex-direction: column;
            align-items: flex-start;
            margin-left: 20px;
        }

    }

    div img{
        margin-left: 20px;
    }

    div h1{
        margin-left: 20px;
        padding-left: 10px;
        font-size: 32px;
        font-weight: 400;
        transition: background .2s;
        width: 80%;
    }

    div h1:hover{
        cursor: pointer;
        background: ${props=> props.roleUser !== "student-special" ? "linear-gradient(169.14deg, #00203F 20%, #6ECAA1 100%)" : "#453EC8"};
        border-radius: 60px;
        color: #fff;
    }

    div .current_page{
        background: ${props=> props.roleUser !== "student-special" ? "linear-gradient(169.14deg, #00203F 20%, #6ECAA1 100%)" : "#453EC8"};
        border-radius: 60px;
        color: #fff;
    }

`