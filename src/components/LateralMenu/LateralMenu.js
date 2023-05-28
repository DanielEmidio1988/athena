import { ContainerLateralMenu } from "./StyleLateralMenu"
import {goToLoginPage, 
        goToHomePage, 
        goToConquestPage, 
        goToMentorsPage, 
        goToSchedulesPage, 
        goToSignUpPage,
        goToTimeLinePage} from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function LateralMenu(){
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)

    return(
        <ContainerLateralMenu>
            {
                context.roleUser === "student" ?

                <>
                        <div className="box-display-user">
                            <img src={''} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Aulas</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/mentores' ? 'current_page' : ''} onClick={() => goToMentorsPage(navigate)}>Mentores</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/agenda' ? 'current_page' : ''} onClick={() => goToSchedulesPage(navigate)}>Agenda</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/cronograma' ? 'current_page' : ''} onClick={() => goToTimeLinePage(navigate)}>Cronograma de estudo</h1>
                        </div>
                </>

                :

                ''
            }

{
                context.roleUser === "mentor" ?

                <>
                        <div className="box-display-user">
                            <img src={''} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Material de Apoio</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/mentores' ? 'current_page' : ''} onClick={() => goToMentorsPage(navigate)}>Alunos</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/agenda' ? 'current_page' : ''} onClick={() => goToSchedulesPage(navigate)}>Agenda</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/cronograma' ? 'current_page' : ''} onClick={() => goToTimeLinePage(navigate)}>Capacitações</h1>
                        </div>
                </>

                :

                ''
            }

{
                context.roleUser === "helper" ?

                <>
                        <div className="box-display-user">
                            <img src={''} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Conteúdo</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                </>

                :

                ''
            }

{
                context.roleUser === "student-special" ?

                <>
                        <div className="box-display-user">
                            <img src={''} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Aulas</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/mentores' ? 'current_page' : ''} onClick={() => goToMentorsPage(navigate)}>Mentores</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/agenda' ? 'current_page' : ''} onClick={() => goToSchedulesPage(navigate)}>Agenda</h1>
                        </div>
                        <div>
                            <img src={''} alt="Icone Menu" />
                            <h1 className={location.pathname === '/cronograma' ? 'current_page' : ''} onClick={() => goToTimeLinePage(navigate)}>Cronograma de estudo</h1>
                        </div>
                </>

                :

                ''
            }

        </ContainerLateralMenu>
    )
}

export default LateralMenu