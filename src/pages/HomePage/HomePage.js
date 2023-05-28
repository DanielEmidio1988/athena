import CardUser from "../../components/Cards/CardUser"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"
import homeicon from "../../assets/iconamoon_home-fill.png"
import homeiconspecial from "../../assets/iconamoon_home-fill-special.png"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"


function HomePage(){
    const context = useContext(GlobalContext)

    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    {context.roleUser === "student-special" ?
                        <img src={homeiconspecial} alt="Icone HomePage"/>
                    :
                        <img src={homeicon} alt="Icone HomePage"/>
                    } 
                    {context.roleUser === "mentor" ?
                        <h1>Material de Apoio</h1>
                    :
                        context.roleUser === "helper" ? 
                            <h1>Conteúdo</h1>
                        :
                            <h1>Aulas</h1>
                    }   
                    
                </div>
                <div className="box-input-data">
                    <input placeholder="Buscar aula"/>
                </div>
                <div className="box-data-page">
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default HomePage