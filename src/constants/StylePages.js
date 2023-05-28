import styled from "styled-components";

export const ContainerPages = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    .box-menu-lateral{
        width: 30%;
    }

    .box-main-menu{
        width: 68%;

        .box-title-page{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 60px 0 30px 0;

            h1{
                margin-left: 40px;
                font-size: 32px;
                font-weight: 400;
            }

        }

        .box-subtitle-page{
            width: 50%;
            margin-bottom: 40px;

            p{
                color: rgba(30, 30, 30, 0.38);
                font-size: 15px;
            }
        }

        .box-input-data{
            margin-bottom: 120px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;

            input{
                width: 560px;
                height: 60px;
                padding-left: 60px;
                border: none;
                border-radius: 60px;
                background: #E1E1E1;
                font-size: 20px;   
            }

            div{
                margin: 20px 0 0 20px;
                display: flex;
                justify-content: center;
                gap: 60px;

                h3:hover{
                    cursor: pointer;
                }

                .active-icon{
                    color: rgba(30,30,30,0.81)
                }

                .disable-icon{
                    color: rgba(30,30,30,0.38)
                }

            }
        }

        .box-progress-user{
            margin: 120px 0 40px 0;


            .total-points-user{
                display: flex;
                align-items: center;
                gap: 32px;

                h1{
                    font-weight: 700;
                    font-size: 36px;
                    color: #535353;
                }

                h2{
                    font-weight: 700;
                    font-size: 20px;
                    color: #535353;
                }
            }

        }

        .box-data-page{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 60px;
        }


    }

    .box-calendar-page{

        div h2{
            margin-bottom: 40px;
            font-size: 32px;
            font-weight: 400;
        }

        .icons-calendar{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 80%;
            margin-bottom: 40px;

            .box-calendar-user{
                width: 316px;
                height: 192px;
                padding-left: 32px;
                border: 1px solid #D9D9D9;
                border-radius: 12px;
                display: flex;
                justify-content: center;
                flex-direction: column;

                div{
                    display: flex;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .status-user{
                    color: red;
                }
            }

            .box-button-calendar-user button{
                width: 232px;
                height: 40px;
                border-radius: 10px;
                border: 1px solid #D9D9D9;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                background: #F5F5F5;
                color: rgba(30,30,30,0.38);
                font-size: 15px;
                font-weight: 600;
            }

            .box-button-calendar-user button:hover{
                cursor: pointer;
            }
        }

    }

    .box-data-timeline{
        p{
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 10px;
        }

        input{
            border-radius: 600px;
            border: none;
            background: #E1E1E1;
            width: 364px;
            height: 40px;
            margin-bottom: 20px;
            padding-left: 20px;
        }

        .input_objetive{
            width: 432px;
            height: 132px;
            border-radius: 10px;
            
            margin: 0;
            padding: 0;
              box-sizing: border-box;
        }

    }

`