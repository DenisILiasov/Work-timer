import { FC, useState } from "react"
import style from './timer.module.css'
import TimerCount from "./timerCount/timerCount";
import {  useAppSelector, useAppDispatch } from "../hooks/redux";
import Grafik from "./grafik/grafik";
import TimerButton from "./timerButton/timerButton";
import { addTimer, startTimer, resetTimer } from "../store/timer/timerSlice";

const Timer: FC = () => {
    const minuts = useAppSelector(state => state.timer.timerList)
    const second = useAppSelector(state => state.timer.second)
    const minutWork = useAppSelector(state => state.timer.work)
    const minutRelax = useAppSelector(state => state.timer.relax)
    const dispatch = useAppDispatch()
    let [interv, setInvterv] = useState<any>()

    const start = ():void => {
        dispatch(startTimer())
    }

    const intervalStart = ():void => {
        setInvterv(interv = clearInterval(interv))
        setInvterv(interv = setInterval(start, 1000))
    }

    const stopTimer = ():void => {
        setInvterv(interv = clearInterval(interv)) 
    }

    const resetTimers = () => {
        setInvterv(interv = clearInterval(interv))
        dispatch(resetTimer())
    }

    const addGrafiks = () => {
        dispatch(addTimer())
    }
  
    return(
        <div className={style.timerWrapp}>
            <Grafik/>
            {minuts.length > 0 ? 
                <div className={style.timerContentWrapp}>
                    <TimerCount second={second} minutWork={minutWork} minutRelax={minutRelax}/>
                </div>
                :
                <div className={style.timerContentWrapp}><button className={style.button}>Add Grafik</button></div>
            }   
           <TimerButton startTimer={intervalStart} resetTimer={resetTimers} stopTimer={stopTimer}/>
            <button className={style.button} onClick = {addGrafiks}>Add grafik</button>
        </div>
    )
};

export default Timer;