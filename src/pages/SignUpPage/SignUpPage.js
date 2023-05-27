import { useState } from "react"
import button_desejo_aprender_especialistas from "../../assets/heroicons_puzzle-piece-20-solid.png"
import button_desejo_compartilhar from "../../assets/heroicons-solid_share.png"
import button_desejo_ensinar from "../../assets/fa-solid_chalkboard-teacher.png"
import button_desejo_aprender from "../../assets/fluent_people-community-24-filled.png"

function SignUpPage(){

    const iconsDesire = [
        {image: button_desejo_aprender,
        description: "Desejo aprender",
        status: false},
        {image: button_desejo_ensinar,
        description: "Desejo ensinar",
        status: false},
        {image: button_desejo_compartilhar,
        description: "Desejo compartilhar e ensinar conteúdos",
        status: false},
        {image: button_desejo_aprender_especialistas,
        description: "Desejo aprender com apoio de especialistas",
        status: false}
    ]

    const [optionDesire, setOptionDesire] = useState("")

    return(
        <section>
            <div>
                <div>
                    <h1>PERFIL</h1>

                    <div>
                        <div>
                            <p>Nome Completo</p>
                            <input/>
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input/>
                        </div>
                        <div>
                            <p>Confirmar e-mail</p>
                            <input/>
                        </div>
                        <div>
                            <p>Senha</p>
                            <input/>
                        </div>                        
                    </div>
                    <div>
                        <div>
                            <p>Data de nascimento</p>
                            <input/>
                        </div>
                        <div>
                            <p>Gênero</p>
                            <input/>
                        </div>
                        <div>
                            <p>Cidade</p>
                            <input/>
                        </div>
                        <div>
                            <p>Cidade</p>
                            <input/>
                        </div>                        
                    </div>
                    <div>
                        <div>
                            <p>CPF</p>
                            <input/>
                        </div>
                        <div>
                            <p>Numero de Celular</p>
                            <input/>
                        </div>
                        <div>
                            <p>UF</p>
                            <input/>
                        </div>
                       
                    </div>
                </div>
                <div>

                    <div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <h2>O que você deseja?</h2>
                </div>
                <div>
                        {iconsDesire.map((icon)=>{
                            return(
                                <div>
                                    <img src={icon.image} alt="botão desejo plataforma"/>
                                    <h2>{icon.description}</h2>
                                </div>
                            )
                        })}
                </div>

            </div> 
            <div>
                {optionDesire === "Desejo Ensinar" ?
                <>
                <div>
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
                        <div>
                            <p>Você possui capacitação para ensinar pessoas com deficiência cognitiva / neurodivergência ou que precise de um apoio educacional mais especializado e inclusivo?</p>
                            <input/>
                        </div>
                </div>
                <div>
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
                {optionDesire === "Desejo Aprender com Especialistas" ?
                <>
                <div>
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
                <div>
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
                        
            </div>  
        </section>
    )
}

export default SignUpPage