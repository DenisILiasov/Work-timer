import { FC } from "react";
import Timer from "./components/timer/timer";
import Grafik from "./components/grafik/grafik";
import {Routes, Route} from 'react-router-dom'

const App:FC = () => {
  return(
    <div>
      {/* <Timer/>
      <Routes>
        <Route path="/" element = {<Timer/>}/>
      </Routes> */}
      <Routes>
        <Route path="/" element = { <Timer/>}/>
        <Route path="/grafiks" element = {<Grafik/>}/>
      </Routes>
    </div>
  )
}

export default App;
