import {Routes,Route} from "react-router-dom"
import { HashRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import "./styles/App.css"
import View from "./pages/View"
import Apply from "./pages/employee/Apply"
import Login from "./pages/Login"
import Register from "./pages/Register"


export default function App() {
    return(
          <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/jobs/" element={<HomePage/>} />
                <Route exact path="/jobs/:id" element={<View type="job"/>} />
                <Route exact path="/jobs/:id/apply" element={<Apply />} />
            </Routes>
            </HashRouter>
    )
}