import { ContainerCardUser } from "./StyleCardUser"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"

function CardUser(){
    const context = useContext(GlobalContext)
    return(
        <ContainerCardUser
        roleUser={context.roleUser}>
            <div>
                <h3>Aula Sobre X</h3>
                <p>Descrição da aula</p>
            </div>
            <button>Assistir</button>
        </ContainerCardUser>
    )
}

export default CardUser