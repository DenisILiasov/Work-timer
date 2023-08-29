import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface timer{
    work: number
    relax: number
    active: boolean
    id: number
}
interface IaddTimer{
    work: number
    relax: number
}

interface TimerList{
    timerList: timer[]
    timerActive: timer[]
    second: number
    work: number
    relax: number
}

const initialState: TimerList = {
    timerList: [],
    timerActive: [],
    second: 0,
    work: 0,
    relax: 0   
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        initialTimer(state){
            state.timerActive = state.timerList.filter(el => el.active === true)
            state.work = state.timerActive[0]?.work
            state.relax = state.timerActive[0]?.relax - 1
        },
        startTimer(state){
            if(state.second > 0){
                state.second = state.second - 1
            }else{
                state.second = 59
                if(state.work > -1){
                    state.work = state.work - 1
                }else{
                    state.relax = state.relax - 1
                    if(state.relax < 0){
                        state.work = state.timerActive[0].work - 1
                        state.relax = state.timerActive[0].relax - 1
                    }
                }
            }
        },
        resetTimer(state){
            state.work = state.timerActive[0].work 
            state.relax = state.timerActive[0].relax - 1
            state.second = 0
        },
        addTimer(state, action: PayloadAction<IaddTimer>){
            if(state.timerList.length === 0){
                state.timerList.push({
                    work: action.payload.work,
                    relax: action.payload.relax,
                    id: Date.now(),
                    active: true
                })
            }else{
                state.timerList.push({
                    work: action.payload.work,
                    relax: action.payload.relax,
                    id: Date.now(),
                    active: false
                })
            }
        },
        deleteTimer(state, action: PayloadAction<number>){
            state.timerList = state.timerList.filter(el => el.id !== action.payload)
            let count: boolean[] = []
            state.timerList.forEach(el => {
                if(el.active === true){
                    count.push(el.active)
                }
            })
            if(state.timerList.length !== 0 && count.length === 0){
                state.timerList[0].active = true
            }
        },
        timerUse(state, action: PayloadAction<number>){
            state.timerList.forEach(el => {
                el.active = false
                if(el.id === action.payload){
                    el.active = true
                }
            })
        }
    }
})

export default timerSlice.reducer;
export const {initialTimer, startTimer, resetTimer, addTimer, deleteTimer, timerUse} = timerSlice.actions;