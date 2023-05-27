import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/main" element={<HomePage/>}/>
                <Route path="/cadastrar" element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router