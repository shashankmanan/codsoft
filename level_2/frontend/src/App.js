import {HashRouter} from "react-router-dom"
import { Route,Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import "./styles/App.css"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage /> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
