import { FC } from 'react'
import style from './timerButton.module.css'

interface ITimerButton{
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void
}

const TimerButton: FC<ITimerButton> = ({startTimer, stopTimer, resetTimer}) => {
    return(
        <>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={startTimer}>Начать отсчёт</button>
                <button className={style.button} onClick={stopTimer}>Остановить отсчёт</button>
                <button className={style.button} onClick={resetTimer}>Обнулить отсчёт</button>
            </div>
        </>
    )
}

export default TimerButton;