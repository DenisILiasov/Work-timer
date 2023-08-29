import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import GrafikItem from "./grafikItem/grafikItem";
import style from './grafik.module.css' 

const Grafik: FC = () => {
    const grafik = useAppSelector(state => state.timer.timerList)

    return(
        <>
            <h1 className={style.title}>Список графиков</h1>
            {grafik.length > 0 ? 
                    grafik.map(el => {
                    return <GrafikItem active = {el.active} work={el.work} relax={el.relax} id = {el.id} key={el.id}/> 
                })
            :   
                <h2 className={style.none}>Графиков нет!</h2>
            } 
        </>
    )
}

export default Grafik;