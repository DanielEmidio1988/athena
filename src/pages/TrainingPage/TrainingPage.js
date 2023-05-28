import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"
import cardtraining1 from "../../assets/cardtraining1.png"
import cardtraining2 from "../../assets/cardtraining2.png"
import trainingicon from "../../assets/ion_book.png"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function TrainingPage(){
    const context = useContext(GlobalContext)

    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    <img src={trainingicon} alt="Icone MentorPage"/>
                    <h1>Capacitações</h1>
                </div>
                <div className="box-input-data">
                    <input placeholder="Buscar aula"/>
                    <div>
                        <h3 className='active-icon'>Recomendados</h3>
                    </div>
                </div>
                <div className="box-data-page">
                <img src={cardtraining1} alt="Icone TrainingPage"/>
                <img src={cardtraining2} alt="Icone TrainingPage"/>
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default TrainingPage