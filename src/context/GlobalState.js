import { useState } from "react"

function GlobalState(){
    const [roleUser, setRoleUser] = useState("student")

    return{
        roleUser,
        setRoleUser,
    }
}

export default GlobalState