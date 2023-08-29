import { FC } from "react";
import style from './timerCout.module.css'



interface ITimerCount{
    second: number
    minutWork: number
    minutRelax: number
}

const TimerCount: FC<ITimerCount> = ({second, minutWork, minutRelax}) => {

    return(
        <div className={style.TimerCountWrapp}>   
            <h2>{minutWork > -1 ? minutWork >= 10 ? minutWork : `0` + minutWork : minutRelax >= 10 ? minutRelax : `0` + minutRelax}</h2>
            
            <h2>:{second >= 10 ? second : `0` + second}</h2>
        </div>
    )
};

export default TimerCount;