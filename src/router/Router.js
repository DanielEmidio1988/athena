import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ConquestPage from "../pages/ConquestPage/ConquestPage"
import MentorsPage from "../pages/MentorsPage/MentorsPage"
import SchedulesPage from "../pages/SchedulePage/SchedulePage"
import TimeLinePage from "../pages/TimeLinePage/TimeLinePage"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/main" element={<HomePage/>}/>
                <Route path="/cadastrar" element={<SignUpPage/>}/>
                <Route path="/conquistas" element={<ConquestPage/>}/>
                <Route path="/mentores" element={<MentorsPage/>}/>
                <Route path="/agenda" element={<SchedulesPage/>}/>
                <Route path="/cronograma" element={<TimeLinePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router