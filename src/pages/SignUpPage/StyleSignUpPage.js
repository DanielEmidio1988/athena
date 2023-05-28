import styled from "styled-components";

export const ContainerSignUp = styled.section`
    width: 100%;
    // height: 100vh;
    display: flex;
    justify-content: space-evenly;
    // align-items: center;
    flex-direction: column;
    margin-top: 200px;

    h1{
        margin-left: 100px;
        font-size: 40px;
    }
`

export const StyleBoxForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .box-form-user{
        width: 60%;
        display: flex;
        margin-left: 100px;
        align-items: flex-start;
        gap: 40px;

        .box_data_form div input{
            background: #E1E1E1;
            height: 38px;
            border-radius: 600px;
            border: none;
            margin-bottom: 10px;
        }

        .box_data_form div p{
            margin-bottom: 4px;
        }

        .box_data_form{
            .input-very-large{
                width: 650px;

                input{
                    width: 100%;
                }
            }

            .input-large{
                width: 180px;

                input{
                    width: 100%;
                }
            }

            .input-medium{
                width: 150px;

                input{
                    width: 100%;
                }
            }

            .input-small{
                width: 60px;

                input{
                    width: 100%;
                }
            }
        }
    }

    .box-photo-user{
        width: 40%;
       
        
        .border-photo{
            border-radius: 50%;
            width: 240px;
            height: 240px;
            background: linear-gradient(169.14deg, #00203F 20%, #6ECAA1 100%);
            padding: 4px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            .area-photo{
                border-radius: 50%;
                
                width: 100%;
                height: 100%;
                background-color: #E1E1E1;
            }
        }
    }
`

export const StyleBoxDesire = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 40px;

    .box-title-desire{
        margin: 0 0 40px 70px;
    }

    .box_cards_desires{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-left: 100px;

        div{
            width: 232px;
            height: 216px;       
            background: rgba(225, 225, 225, 0.26);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            

            h2{
                width: 80%;
                font-size: 20px;
                text-align: center;
            }
        }

        div:hover{
            cursor: pointer;
            background: rgba(110, 202, 161, 0.45);
        }

        .active-icon{
            background: ${props=> props.roleUser !== "student-special" ? "rgba(110, 202, 161, 0.45)" : "#453EC8" };
        }
    }

`

export const StyleDesireSelect = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 50px 0 100px 0;

    .box_input_A{
        margin-left: 100px;

        .input-small{

            input{
                width: 76px;
            }
        }
    }

    .box_input_A, .box_input_B{
        width: 90%; 
    }

    .box_input_A div input, .box_input_B div input{ 
        width: 650px; 
        background: #E1E1E1;
        height: 38px;
        border-radius: 600px;
        border: none;
        margin-bottom: 10px;
    }

    .box_input_A div p, .box_input_B div p{
        margin-bottom: 4px;
    }

`