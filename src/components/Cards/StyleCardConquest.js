import styled from "styled-components";

export const ContainerCardConquest = styled.div`
    background: #F5F5F5;
    border-radius: 10px;
    width: 180px;
    height: 250px;
    // padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    p{
        font-size: 14px;
        font-weight: 400;
        color: RGBA(30,30,30,0.38);
        margin: 0 0 10px 10px;
    }
    
    div{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        // img{
        //     width: 162
        // }
    }

`