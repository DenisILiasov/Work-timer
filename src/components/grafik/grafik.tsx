import { FC, useState } from "react";
import ModalWindow from "../ui/modal";
import { useAppSelector } from "../../hooks/redux";

const Grafik: FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const grafik = useAppSelector(state => state.timer.timerList)
    
    const clouseModal = () => {
        setModal(false)
    }
    const openModal = () => {
        setModal(true)
    }
    return(
        <>
            <button onClick={openModal}>open</button>
            <ModalWindow clouse={clouseModal} openModal = {modal}>
                {grafik.length > 0 ? grafik.map(el => {
                   return<div key={el.id}>
                        <div>{el.work}</div>
                        <div>{el.relax}</div>
                   </div>
                }): 
                
                <div>Add</div>
                }
            </ModalWindow>
        </>
    )
}

export default Grafik;