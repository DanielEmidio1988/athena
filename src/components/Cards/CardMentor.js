import { ContainerCardMentor } from "./StyleCardMentor"
import iconmentorphoto from "../../assets/iconmentorphoto.png"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"

function CardMentor(){
    const context = useContext(GlobalContext)
    return(
        <ContainerCardMentor
        roleUser={context.roleUser}>
            <div>
                <img src={iconmentorphoto} alt="Foto Mentor"/>
                <h3>Nome do Mentor</h3>
                <p>Formação Acadêmica</p>
            </div>
            <button>Conectar</button>
        </ContainerCardMentor>
    )
}

export default CardMentor