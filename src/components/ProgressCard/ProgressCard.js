import { ContainerProgressCard } from "./StyleProgressCard"

function ProgressCard(){
    return(
        <ContainerProgressCard>
            <div className="title-progress">
                <h1>Progresso em Git e Github</h1>
            </div>
            <div className="progress-user">
                <div>
                    <img src={''} alt="icon-progress-card"/>
                    <p>Git e Githb Iniciante</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div>
                    <img src={''} alt="icon-progress-card"/>
                    <p>Git e Githb Iniciante</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div>
                    <img src={''} alt="icon-progress-card"/>
                    <p>Git e Githb Iniciante</p>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <div className="icon-progress-trophy">
                    <img src={''} alt="icone_troféu_conquista"/>   
                    <div><h3>80</h3><p>Pontos</p></div> 
                </div>
            </div>
            
        </ContainerProgressCard>
    )
}

export default ProgressCard