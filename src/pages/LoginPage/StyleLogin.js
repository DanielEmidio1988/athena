import styled from "styled-components";
import backgroundlogin from "../../assets/backgroundlogin.png"

export const ContainerLogin = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyleBoxAboutSite = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
      
    .box_about{
        width: 50%;
        height: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h1{
            font-weight: 600;
            font-size: 40px;
            line-height: 60px;
            background: linear-gradient(169.14deg, #00203F 14.54%, #6ECAA1 92.36%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom: 20px;
        }

        h3{
            font-weight: 600;
            font-size: 20px;
        }
    }

    .box_icons_login{
        width: 80%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 40px;

        div{
            width: 200px;
            height: 190px;
            font-size: 14px;
            text-align: center;
            font-weight: 600;

            img{
                width: 100px;
            }
        }

    }
`

export const StyleBoxLogin = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${backgroundlogin}) no-repeat right;
    background-size: 100% auto;

    .box_form_login{
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        h1{
            font-size: 40px;
            font-weight: 600;
            color: #fff;
        }

        h2{
            font-size: 24px;
            font-weight: 500;
            color: #fff;
            margin-bottom: 40px;
        }

        p{
            padding-left: 10px;
            color: #fff;
        }

        input{
            width: 350px;
            height: 38px;
            background: #fff;
            border-radius: 600px;
            border: none;
            margin-bottom: 20px;
        }

        button{
            margin-left: 140px;
            width: 66px;
            height: 66px;
            box-shadow: 0px 4px 4px rgba(0,0,0.25);
            border-radius: 50%;
            background: #fff;
            border: none;
                h1{
                    font-weight: 500;
                    font-size: 40px;
                    line-height: 60px;
                    background: linear-gradient(169.14deg, #00203F 14.54%, #6ECAA1 92.36%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            margin-bottom: 40px;
        }

        button:hover{
            cursor: pointer;
        }

    }

    .box-style-continue{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div{
            width: 36%;
            height: 3px;
            background: #fff;
        }

        p{
            color: #fff;
            font-size: 18px;
        }
    }
`

export const StyleBoxSocialLinks = styled.div`
    padding-top: 40px;
    width: 100%;
    text-align: center;

    img:hover{
        cursor: pointer;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    p, a{
        margin-top: 20px;
        color: #fff;
    }

    p a:hover{
        cursor: pointer;
    }
`