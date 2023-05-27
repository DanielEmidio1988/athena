import { useNavigate } from "react-router-dom"
import {ContainerLogin} from "./StyleLogin"
import google_button from "../../assets/button_google.png"
import facebook_button from "../../assets/button_facebook.png"
import apple_button from "../../assets/button_apple.png"
import google_button_mobile from "../../assets/button_mobile_google.png"
import facebook_button_mobile from "../../assets/button_mobile_facebook.png"
import apple_button_mobile from "../../assets/button_mobile_apple.png"
import compartilhe_icon from "../../assets/fluent_people-community-24-filled.png"
import apoie_icon from "../../assets/fa-solid_chalkboard-teacher.png"
import apoie_mentor_icon from "../../assets/heroicons_puzzle-piece-20-solid.png"
import aprenda_icon from "../../assets/aprenda_icon.png"

function LoginPage(){
  const navigate = useNavigate()

  const icons_login = [
    {image: compartilhe_icon,
    description: "Compartilhe e ensine materiais de tecnologia"},
    {image: apoie_icon,
    description: "Apoie como um mentor"},
    {image: apoie_mentor_icon,
    description: "Apoie como um mentor no ensino de pessoas autistas"},
    {image: aprenda_icon,
    description: "Aprenda tecnologia com o apoio de mentores especializados na educação inclusiva"},]

    return(

        <ContainerLogin>
            <div>
              <div>
                <h1>Olá, o que te traz ao XXX?</h1>
                <h3>Faça parte de uma comunidade onde você pode criar conexões entre mentorando e mentor e aprender sobre tecnologia da melhor forma.</h3>

              </div>
              <div>
                  {icons_login.map((icon)=>{
                    return(
                      <div>
                        <img src={icon.image} alt="icone_login"/>
                        <h2>{icon.description}</h2>
                      </div>
                    )
                  })}


              </div>

            </div>
            <div>
                <div>
                    <h1>Bem vindo!</h1>
                    <h2>Cadastre-se</h2>

                    <p>E-mail</p>
                    <input />
                    <p>Senha</p>
                    <input/>

                    <button>&gt;</button>
                </div>
                <div>
                    <div></div>
                      <p>Continuar com</p>
                    <div></div>
                </div>
    
                <div>
                    <div className="social_links_mobile">
                        <img src={google_button_mobile} alt="botao_login_google"/>
                        <img src={facebook_button_mobile} alt="botao_login_facebook"/>
                        <img src={apple_button_mobile} alt="botao_login_apple"/>
                    </div>
                  
                    <div className="social_links">
                        <img src={google_button} alt="botao_login_google"/>
                        <img src={facebook_button} alt="botao_login_facebook"/>
                        <img src={apple_button} alt="botao_login_apple"/>
                    </div>
                    <p>Já tem uma conta? <a href="#">Entrar</a></p>

                </div>

            </div>
        </ContainerLogin>
    )
}

export default LoginPage