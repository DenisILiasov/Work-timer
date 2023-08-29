import { FC, useState, useEffect } from "react"
import style from './timer.module.css'
import TimerCount from "./timerCount/timerCount";
import {  useAppSelector, useAppDispatch } from "../../hooks/redux";
import Header from "./header/header";
import TimerButton from "./timerButton/timerButton";
import {initialTimer, startTimer, resetTimer } from "../../store/timer/timerSlice";


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
    useEffect(() => {
        dispatch(initialTimer())
    }, [dispatch])
    /*******************************/

    const [modal, setModal] = useState<boolean>(false)

    const openModal = (): void => {
        setModal(true)
    }

    const clouseModal = (): void => {
        setModal(false)
    }
  
    return(
        <div className={style.timerWrapp}>
           <Header clouseModal={clouseModal} openModal={openModal} modal = {modal}/>
            {minuts.length > 0 ? 
                <div className={style.timerContentWrapp}>
                    <TimerCount second={second} minutWork={minutWork} minutRelax={minutRelax}/>
                </div>
                :
                <div className={style.timerContentWrapp}><h3 className={style.zero}>Графиков нет <span className={style.add} onClick={openModal}>добавить?</span></h3></div>
            }   
           <TimerButton startTimer={intervalStart} resetTimer={resetTimers} stopTimer={stopTimer}/>
        </div>
    )
};

export default Timer;