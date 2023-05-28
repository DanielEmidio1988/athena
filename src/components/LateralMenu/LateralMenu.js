import { ContainerLateralMenu } from "./StyleLateralMenu"
import {goToLoginPage, 
        goToHomePage, 
        goToConquestPage, 
        goToMentorsPage, 
        goToSchedulesPage, 
        goToSignUpPage,
        goToTimeLinePage,
        goToTrainingPage} from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import homeicon from "../../assets/iconamoon_home-fill.png" 
import conquesticon from "../../assets/fluent_trophy-16-filled.png" 
import mentorsicon from "../../assets/fa-solid_chalkboard-teacher-32.png" 
import studenticon from "../../assets/fluent_people-community-32-filled.png" 
import scheduleicon from "../../assets/mingcute_calendar-fill.png" 
import timelineiconmentor from "../../assets/ion_book.png" 
import timelineicon from "../../assets/mdi_pen.png" 
import usericon from "../../assets/userIcon.png"
import usericon_special from "../../assets/userIcon-special.png"
import homeicon_special from "../../assets/iconamoon_home-fill-special.png"
import conquesticon_special from "../../assets/fluent_trophy-16-filled-special.png"
import mentorsicon_special from "../../assets/fa-solid_chalkboard-teacher-special.png"
import scheduleicon_special from "../../assets/mingcute_calendar-fill-special.png"
import timelineicon_special from "../../assets/mdi_pen-special.png"
import trainingicon from "../../assets/ion_book.png"

function LateralMenu(){
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)

    return(
        <ContainerLateralMenu
        roleUser={context.roleUser}>
            {
                context.roleUser === "student" ?

                <>
                        <div className="box-display-user">
                            <img src={usericon} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={homeicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Aulas</h1>
                        </div>
                        <div>
                            <img src={conquesticon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                        <div>
                            <img src={mentorsicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/mentores' ? 'current_page' : ''} onClick={() => goToMentorsPage(navigate)}>Mentores</h1>
                        </div>
                        <div>
                            <img src={scheduleicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/agenda' ? 'current_page' : ''} onClick={() => goToSchedulesPage(navigate)}>Agenda</h1>
                        </div>
                        <div>
                            <img src={timelineicon} alt="Icone Menu" />
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
                            <img src={usericon} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={homeicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Material de Apoio</h1>
                        </div>
                        <div>
                            <img src={conquesticon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                        <div>
                            <img src={mentorsicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/mentores' ? 'current_page' : ''} onClick={() => goToMentorsPage(navigate)}>Alunos</h1>
                        </div>
                        <div>
                            <img src={scheduleicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/agenda' ? 'current_page' : ''} onClick={() => goToSchedulesPage(navigate)}>Agenda</h1>
                        </div>
                        <div>
                            <img src={trainingicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/capacitacao' ? 'current_page' : ''} onClick={() => goToTrainingPage(navigate)}>Capacitações</h1>
                        </div>
                </>

                :

                ''
            }

{
                context.roleUser === "helper" ?

                <>
                        <div className="box-display-user">
                            <img src={usericon} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={homeicon} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Conteúdo</h1>
                        </div>
                        <div>
                            <img src={conquesticon} alt="Icone Menu" />
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
                            <img src={usericon_special} alt="Foto Usuario" />
                            <div>
                                <h3>Nome do usuário</h3>
                                <p>Ver perfil</p>
                            </div>
                        </div>
                        <div>
                            <img src={homeicon_special} alt="Icone Menu" />
                            <h1 className={location.pathname === '/main' ? 'current_page' : ''} onClick={() => goToHomePage(navigate)}>Aulas</h1>
                        </div>
                        <div>
                            <img src={conquesticon_special} alt="Icone Menu" />
                            <h1 className={location.pathname === '/conquistas' ? 'current_page' : ''} onClick={() => goToConquestPage(navigate)}>Conquistas</h1>
                        </div>
                        <div>
                            <img src={mentorsicon_special} alt="Icone Menu" />
                            <h1 className={location.pathname === '/mentores' ? 'current_page' : ''} onClick={() => goToMentorsPage(navigate)}>Mentores</h1>
                        </div>
                        <div>
                            <img src={scheduleicon_special} alt="Icone Menu" />
                            <h1 className={location.pathname === '/agenda' ? 'current_page' : ''} onClick={() => goToSchedulesPage(navigate)}>Agenda</h1>
                        </div>
                        <div>
                            <img src={timelineicon_special} alt="Icone Menu" />
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