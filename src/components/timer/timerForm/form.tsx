import { FC, useState } from 'react'
import ModalWindow from '../../ui/modal'
import { useAppDispatch } from '../../../hooks/redux'
import { addTimer, initialTimer } from '../../../store/timer/timerSlice'
import style from './form.module.css'

interface IForm{
    modal: boolean
    openModal: () => void
    clouseModal: () => void
}

const Form: FC<IForm> = ({modal, clouseModal, openModal}) => {
    const [input, setInput] = useState({
        work: '',
        relax: ''
    })
    const [modalForm, setModalForm] = useState<boolean>(false)

    const clouseModalForm = (): void => {
        setModalForm(false)
    }

    const openModalForm = (): void => {
        setModalForm(true)
    }

    const dispatch = useAppDispatch()

    const addNewTimer = (e:React.MouseEvent<HTMLElement>):void => {
        e.preventDefault()
        if(Number(input.relax) > 0 && Number(input.relax) < 60 && Number(input.work) > 0 && Number(input.work) < 60){
            dispatch(addTimer({work: Number(input.work), relax: Number(input.relax)}))
            dispatch(initialTimer())
            setInput({work: '', relax: ''})
        }else{
            openModalForm()
        }

        clouseModal()
        
    }
   
    
    return(
        <>
            <button onClick={openModal}>Добавить график</button>
            <ModalWindow openModal = {modal} clouse={clouseModal}>
                <form>
                    <input className={style.input} type='number' min={0} max={59} value={input.work} placeholder='Рабочее время в мин' onChange={(e) => setInput({...input, work:e.target.value})}/>
                    <input className={style.input} type="number"  min={0} max={59} value={input.relax} placeholder='Время отдыха в мин'  onChange={(e) => setInput({...input, relax:e.target.value})}/>
                    <button className={style.button} onClick={addNewTimer}>Добавить</button>
                </form>
            </ModalWindow>
            <ModalWindow openModal = {modalForm} clouse={clouseModalForm}>
                Некоректно введены даные!
            </ModalWindow>
        </>
    )
};

export default Form;