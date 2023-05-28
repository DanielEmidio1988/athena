import { useState } from "react"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"
import CardMentor from "../../components/Cards/CardMentor"
import CardMyMentor from "../../components/Cards/CardMyMentor"
import mentoricon from "../../assets/fa-solid_chalkboard-teacher-32.png"
import mentoriconspecial from "../../assets/fa-solid_chalkboard-teacher-special.png"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function MentorsPage(){
    const context = useContext(GlobalContext)
    const [optionMentor, setOptionMentor] = useState([
        {name: "Todos",
        status: true},
        {name: "Meus Mentores",
        status: false},
    ])
    const [displayMentor, setDisplayMentor] = useState("Todos")
    const selectDisplayMentor = (option) =>{
        setDisplayMentor(option.name)
        if(!option.status){
            const newStatus = [...optionMentor]
            
            for(let i=0;i<newStatus.length;i++){
                if(newStatus[i].name !== option.name){
                    newStatus[i] = {...newStatus[i], status: false}
                }else{
                    newStatus[i] = {...newStatus[i], status: true}
                }
            }
            setOptionMentor(newStatus)
        }     
    }

    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    {context.roleUser === "student-special" ?
                        <img src={mentoriconspecial} alt="Icone MentorPage"/>
                    :
                        <img src={mentoricon} alt="Icone MentorPage"/>
                    }
                    <h1>Mentores</h1>
                </div>
                <div className="box-input-data">
                    <input placeholder="Buscar aula"/>
                    <div>
                        {optionMentor.map((option)=>{
                            return(
                                <h3 className={option.status ? 'active-icon' : 'disable-icon'} onClick={()=>selectDisplayMentor(option)}>{option.name}</h3>
                            )
                        })}
                    </div>
                </div>
                <div className="box-data-page">

                    {displayMentor === "Todos" ?

                    <>
                    <CardMentor/>
                    <CardMentor/>
                    </>

                    :
                    
                    <CardMyMentor/>      
                    }


                </div>
            </div>
        
        </ContainerPages>
    )
}

export default MentorsPage