import CardUser from "../../components/Cards/CardUser"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"


function TimeLinePage(){
    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    <img src={''} alt="Foto Usuario"/>
                    <h1>Cronograma de Estudos</h1>
                </div>
                <div className="box-data-timeline">
                    <p>Qual o nome do seu cronograma?</p>
                    <input placeholder="Lorem Ipsum"/>

                    <p>Qual área de interesse</p>
                    <input placeholder="Selecione"/>

                    <p>Qual o prazo inicial e final do cronograma?</p>
                    <input placeholder="Selecione"/>

                    <p>Quais as ferramentas serão aprendidas?</p>
                    <input placeholder="Selecione"/>

                    <p>Qual o seu objetivo?</p>
                    <input className="input_objetive" placeholder="Lorem Ipsum"/>
                    
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default TimeLinePage