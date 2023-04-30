import Header from "./components/header/Header";
import "./app.scss"
import Footer from "./components/footer/Footer";
import {LoginForm} from "./components/login/Login";
import {Route, Routes} from "react-router-dom";
import GameSessions from "./components/gameSessions/GameSessions";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";

function App() {

    return (
        <div className={"App"}>
            <Header/>
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<GameSessions/>}/>
                    <Route path="/userSessions" element={<GameSessions/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
