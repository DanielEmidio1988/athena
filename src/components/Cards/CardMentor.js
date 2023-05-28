import { ContainerCardMentor } from "./StyleCardMentor"

function CardMentor(){
    return(
        <ContainerCardMentor>
            <div>
                <img src={''} alt="Foto Mentor"/>
                <h3>Nome do Mentor</h3>
                <p>Formação Acadêmica</p>
            </div>
            <button>Conectar</button>
        </ContainerCardMentor>
    )
}

export default CardMentor