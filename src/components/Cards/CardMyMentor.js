import photomentor from "../../assets/mentorphoto.png"
import whatsappicon from "../../assets/whatsapp.png"
import googlecalendaricon from "../../assets/Google_Calendar_icon.png"
import { ContainerCardMyMentor } from "./StyleCardMyMentor"

function CardMyMentor(){
    return(
        <ContainerCardMyMentor>
            <div>
                <img src={photomentor} alt="icone-mentor"/>
            </div>
            <div>
                <img src={whatsappicon} alt="icone-whatsapp-mentor"/>
                <img src={googlecalendaricon} alt="icone-googlecalendar-mentor"/>
            </div>
        </ContainerCardMyMentor>
    )
}

export default CardMyMentor