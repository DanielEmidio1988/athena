import { ContainerCardUser } from "./StyleCardUser"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"

function CardUser(){
    const context = useContext(GlobalContext)
    return(
        <ContainerCardUser
        roleUser={context.roleUser}>
            <div>
                {context.roleUser === "mentor" ?
                    <h3>Material de apoio sobre X</h3>
                :
                    <h3>Aula sobre X</h3>}
                
                <p>Descrição da aula</p>
            </div>

            {context.roleUser === "mentor" ?
                    <button>Acessar</button>
                :
                    <button>Assistir</button>}
            
        </ContainerCardUser>
    )
}

export default CardUser