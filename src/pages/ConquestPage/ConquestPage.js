import { useState } from "react"
import CardConquest from "../../components/Cards/CardConquest"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"
import ProgressCard from "../../components/ProgressCard/ProgressCard"
import conquesticon from "../../assets/fluent_trophy-16-filled.png"
import conquesticonspecial from "../../assets/fluent_trophy-16-filled-special.png"
import conquestgithubicon from "../../assets/githubicon.png"
import conquestpythonicon from "../../assets/pythonicon.png"
import cardxboxpass from "../../assets/gamepasscard.png"
import cardifoodpass from "../../assets/ifoodcard.png"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function ConquestPage(){
    const context = useContext(GlobalContext)

    const progressUser = [
        {icon: conquestgithubicon,
        name: "Git e Git Hub",
        points: 80},
        {icon: conquestpythonicon,
        name: "Python",
        points: 100}
    ]

    const giftCardUser = [
        {icon: cardxboxpass,
        name: "XBOX",
        points: 500},
        {icon: cardifoodpass,
        name: "Ifood",
        points: 500}
    ]

    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    {context.roleUser === "student-special" ?
                        <img src={conquesticonspecial} alt="Icone Página Conquista"/>
                    :
                        <img src={conquesticon} alt="Icone Página Conquista"/>
                    }               
                    <h1>Conquistas</h1>
                </div>
                <div className="box-progress-user">
                    {progressUser.map((progress)=>{
                        return(
                            <ProgressCard
                            progress={progress}/>
                        )
                    })}
                    
                    <div className="total-points-user">
                        <h2>Seus pontos: </h2><h1>80</h1>
                    </div>
                    
                </div>
                <div className="box-data-page">
                    {giftCardUser.map((giftcard)=>{
                        return(
                            <CardConquest
                            giftcard={giftcard}/>
                        )
                    })}
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default ConquestPage