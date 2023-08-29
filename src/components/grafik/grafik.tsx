import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import GrafikItem from "./grafikItem/grafikItem";
import style from './grafik.module.css' 
import { Link } from "react-router-dom";

const Grafik: FC = () => {
    const grafik = useAppSelector(state => state.timer.timerList)

    return(
        <>
            
            <h1 className={style.title}>Список графиков</h1>
            <div className={style.linkContainer}>
                <Link to='/' className={style.button}>Вернуться назад</Link>
            </div>
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