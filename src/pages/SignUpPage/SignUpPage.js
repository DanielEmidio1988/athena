import { useState, useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { goToLoginPage, goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import photo from "../../assets/material-symbols_add-a-photo.png"
import { ContainerSignUp, StyleBoxForm, StyleBoxDesire, StyleDesireSelect, StyleBoxButtons } from "./StyleSignUpPage"
import button_desejo_aprender_especialistas from "../../assets/heroicons_puzzle-piece-20-solid.png"
import button_desejo_compartilhar from "../../assets/heroicons-solid_share.png"
import button_desejo_ensinar from "../../assets/fa-solid_chalkboard-teacher.png"
import button_desejo_aprender from "../../assets/fluent_people-community-24-filled.png"
import button_desejo_aprender_especialista_ativo from "../../assets/heroicons_puzzle-piece-20-solid-gold.png"

function SignUpPage(){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [iconsDesire, setIconsDesire] = useState([
        {image: button_desejo_aprender,
        description: "Desejo aprender",
        module: "student",
        status: false},
        {image: button_desejo_ensinar,
        description: "Desejo ensinar",
        module: "mentor",
        status: false},
        {image: button_desejo_aprender_especialistas,
        description: "Desejo aprender com apoio de especialistas",
        module: "student-special",
        status: false},
        {image: button_desejo_compartilhar,
        description: "Desejo compartilhar conteúdos",
        module: "helper",
        status: false},
    ])
    const [optionDesire, setOptionDesire] = useState("")

    const selectIcon = (optionSelect) =>{
        optionSelect.description === optionDesire? setOptionDesire("") : setOptionDesire(optionSelect.description)
        context.setRoleUser(optionSelect.module)
        if(!optionSelect.status){
            const newStatus = [...iconsDesire]
            
            for(let i=0;i<newStatus.length;i++){
                if(newStatus[i].description !== optionSelect.description){
                    newStatus[i] = {...newStatus[i], status: false}
                }else{
                    newStatus[i] = {...newStatus[i], status: true}
                }
            }
            setIconsDesire(newStatus)
        }
    }

    useEffect(()=>{

        const updatedIconsDesire = [...iconsDesire];

        if (context.roleUser === "student-special") {
          updatedIconsDesire[2].image = button_desejo_aprender_especialista_ativo
        } else {
          updatedIconsDesire[2].image = button_desejo_aprender_especialistas
        }
      
        setIconsDesire(updatedIconsDesire)

    },[context.roleUser])

    return(
        <ContainerSignUp>
            <h1>PERFIL</h1>
            <StyleBoxForm>
                
                <div className="box-form-user">
                    <div className="box_data_form">
                        <div className="input-very-large">
                            <p>Nome Completo</p>
                            <input/>
                        </div>
                        <div className="input-very-large">
                            <p>E-mail</p>
                            <input/>
                        </div>
                        <div className="input-very-large">
                            <p>Confirmar e-mail</p>
                            <input/>
                        </div>
                        <div className="input-very-large">
                            <p>Senha</p>
                            <input/>
                        </div>                        
                    </div>
                    <div className="box_data_form">
                        <div className="input-large">
                            <p>Data de nascimento</p>
                            <input/>
                        </div>
                        <div className="=input-medium">
                            <p>Gênero</p>
                            <input/>
                        </div>
                        <div className="=input-medium">
                            <p>Cidade</p>
                            <input/>
                        </div>                       
                    </div>
                    <div className="box_data_form">
                        <div className="input-large">
                            <p>CPF</p>
                            <input/>
                        </div>
                        <div className="input-large">
                            <p>Numero de Celular</p>
                            <input/>
                        </div>
                        <div className="input-small">
                            <p>UF</p>
                            <input/>
                        </div>
                       
                    </div>
                </div>
                <div className="box-photo-user">

                    
                    <div className="border-photo">
                        <div className="area-photo">
                            <img src={photo} alt="photo-perfil"/>
                        </div>
                    </div>

                </div>
            </StyleBoxForm>
            <StyleBoxDesire
            roleUser={context.roleUser}>
                <div className="box-title-desire">
                    <h2>O que você deseja?</h2>
                </div>
                <div className="box_cards_desires">

                    {iconsDesire.map((icon)=>{
                        return(
                            <div key={icon.description} className={icon.status ? "active-icon" : "disabled-icon"} onClick={()=>selectIcon(icon)}>
                            <img src={icon.image} alt="botão desejo plataforma"/>
                            <h2>{icon.description}</h2>
                            </div>
                        )
                    })}                                             
                </div>
            <StyleBoxButtons
            roleUser={context.roleUser}>
                <button onClick={()=>goToLoginPage(navigate)}>Voltar</button>
                <button onClick={()=>goToHomePage(navigate)}>Avançar</button>
            </StyleBoxButtons>

            </StyleBoxDesire> 
            <StyleDesireSelect>
                {optionDesire === "Desejo ensinar" ?
                <>
                <div className="box_input_A">
                        <div>
                            <p>Formação Acadêmica</p>
                            <input/>
                        </div>
                        <div>
                            <p>Especialidade Principal</p>
                            <input/>
                        </div>
                        <div>
                            <p>Quais disciplinas são relevantes em suas especialidades?</p>
                            <input/>
                        </div>
                        <div>
                            <p>Quais Ferramentas você possui experiência?</p>
                            <input/>
                        </div>
                        <div className="input-small">
                            <p>Você possui capacitação para ensinar pessoas com deficiência cognitiva / neurodivergência ou que precise de um apoio educacional mais especializado e inclusivo?</p>
                            <input/>
                        </div>
                </div>
                <div className="box_input_B">
                        <div>
                            <p>Quantos anos de experiência você possui?</p>
                            <input/>
                        </div>
                        <div>
                            <p>URL do LinkedIn</p>
                            <input/>
                        </div>
                        <div>
                            <p>Especialidade</p>
                            <input/>
                        </div>
                        <div>
                            <p>Quais softSkills você domina?</p>
                            <input/>
                        </div>
                </div>
                </>

                :
                ""}
                {optionDesire === "Desejo aprender com apoio de especialistas" ?
                <>
                <div className="box_input_A">
                        <div>
                            <p>Informações sobre a deficiência cognitiva/neurodivergência</p>
                            <input/>
                        </div>
                        <div>
                            <p>Preferencias de aprendizagem</p>
                            <input/>
                        </div>
                        <div>
                            <p>Quais as necessidades de suporte?</p>
                            <input/>
                        </div>

                </div>
                <div className="box_input_B">
                        <div>
                            <p>Informações adicionais sobre as necessidades ou desafios especificos relacionados a deficiência cognitiva</p>
                            <input/>
                        </div>
                        <div>
                            <p>Comentários ou informações adicionais</p>
                            <input/>
                        </div>
    
                </div>
                </>
                :
                ""}
                        
            </StyleDesireSelect>  
        </ContainerSignUp>
    )
}

export default SignUpPage