import CardUser from "../../components/Cards/CardUser"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"
import iconcalendargoogle from "../../assets/Google_Calendar_icon.png"
import screencalendargoogle from "../../assets/calendar.png"
import iconschedulepage from "../../assets/mingcute_calendar-fill.png"
import iconschedulepagespecial from "../../assets/mingcute_calendar-fill-special.png"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function SchedulesPage(){
    const context = useContext(GlobalContext)

    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    {context.roleUser === "student-special" ?
                        <img src={iconschedulepagespecial} alt="Foto Usuario"/>
                    :
                        <img src={iconschedulepage} alt="Foto Usuario"/>
                    }
                    <h1>Agenda</h1>
                </div>
                <div className="box-subtitle-page">
                    <p>
                        Nossa plataforma organiza a reunião com os mentores que você 
                        se conectou para ter mais facilidade, através da ferramenta 
                        de agenda que foi escolhida para conectar ao seu perfil.
                    </p>
                </div>

                <div className="box-calendar-page">
                    <div><h2>Sua agenda</h2></div>
                    <div className="icons-calendar">
                        <div className="box-calendar-user">
                            <div>
                                <img src={iconcalendargoogle} alt="Calendário Google"/>
                                <p>Aluno</p>
                            </div>
                            <p className="email-user">aluno@gmail.com</p>
                            <p className="status-user">Disconnect</p>
                        </div>
                        <div className="box-button-calendar-user">
                            <button>Adicionar nova agenda +</button>
                        </div>

                    </div>
                    <img src={screencalendargoogle} alt="Calendário Google Amplo"/>
                
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default SchedulesPage