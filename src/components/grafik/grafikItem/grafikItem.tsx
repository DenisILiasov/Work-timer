import { FC } from "react"
import style from './grafikItem.module.css'
import {Link} from 'react-router-dom'
import { deleteTimer, timerUse } from "../../../store/timer/timerSlice"
import { useAppDispatch } from "../../../hooks/redux"

interface IGrafikItem{
    work: number
    relax: number
    active: boolean
    id: number
}

const GrafikItem: FC<IGrafikItem> = ({work, relax, active, id}) => {
    const dispath = useAppDispatch()

    const deleted = (): void => {
        dispath(deleteTimer(id))
    }
    const use = ():void => {
        dispath(timerUse(id))
    }
    return(
        <>
           
            <div className={style.container}>
                <div className={style.infoContainer}>
                    <p>Work: {work}</p>
                    <p>Relax: {relax}</p>
                </div>
                <div className={style.buttonContainer}>
                    <Link to={'/'} className={style.button} onClick = {use}>Использовать</Link>
                    <Link to={'/grafiks'} className={style.button} onClick={deleted}>Удалить</Link>
                </div>
            </div>
        </>
    )
}

export default GrafikItem;