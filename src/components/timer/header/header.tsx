import {FC} from 'react'
import Form from '../timerForm/form'
import { useAppSelector } from '../../../hooks/redux'
import style from './header.module.css'
import {Link} from 'react-router-dom'

interface IHeader{
    modal: boolean
    openModal: () => void
    clouseModal: () => void
}

const Header: FC<IHeader> = ({modal, openModal, clouseModal}) => {
    const minuts = useAppSelector(state => state.timer.timerList)
    return(
        <div className={style.headerWrapp}>
            {minuts.length !== 0 ? 
                <Link className={style.button} to={'/grafiks'}>Открыть графики</Link>
                :
                <></>
            }
            <Form modal = {modal} clouseModal={clouseModal} openModal={openModal}/>
        </div>
    )
}

export default Header