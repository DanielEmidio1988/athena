import { ContainerCardConquest } from "./StyleCardConquest"

function CardConquest(props){
    console.log(props)

    return(
        <ContainerCardConquest>
            <div>
                <img src={props.giftcard.icon} alt="card-conquistas"/>
            </div>
            <p>GIFT Card {props.giftcard.name}</p>
            <p>{props.giftcard.points} pontos</p>
        </ContainerCardConquest>
    )
}

export default CardConquest