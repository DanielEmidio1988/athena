import CardConquest from "../../components/Cards/CardConquest"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"
import ProgressCard from "../../components/ProgressCard/ProgressCard"


function ConquestPage(){
    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    <img src={''} alt="Foto Usuario"/>
                    <h1>Conquistas</h1>
                </div>
                <div className="box-progress-user">
                    <ProgressCard/>
                    <ProgressCard/>
                    <div className="total-points-user">
                        <h2>Seus pontos: </h2><h1>80</h1>
                    </div>
                    
                </div>
                <div className="box-data-page">
                    <CardConquest/>
                    <CardConquest/>
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default ConquestPage