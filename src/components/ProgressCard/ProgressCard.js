import { ContainerProgressCard } from "./StyleProgressCard"
import conquestpoints from "../../assets/icon_points.png"

function ProgressCard(props){
    
    return(
        <ContainerProgressCard>
            <div className="title-progress">
                <h1>Progresso em {props.progress.name}</h1>
            </div>
            <div className="progress-user">
                <div>
                    <img src={props.progress.icon} alt="icon-progress-card"/>
                    <p>{props.progress.name} Iniciante</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div>
                    <img src={props.progress.icon} alt="icon-progress-card"/>
                    <p>{props.progress.name} Iniciante</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div>
                    <img src={props.progress.icon} alt="icon-progress-card"/>
                    <p>{props.progress.name} Iniciante</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <div className="icon-progress-trophy">
                    <img src={conquestpoints} alt="icone_troféu_conquista"/>   
                    <div><h3>{props.progress.points}</h3><p>Pontos</p></div> 
                </div>
            </div>
            
        </ContainerProgressCard>
    )
}

export default ProgressCard