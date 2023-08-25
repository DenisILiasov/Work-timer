import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface timer{
    work: number
    relax: number
    active: boolean
    id: number
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
        addTimer(state){
            state.timerList.push({
                work: 2, 
                relax: 1,
                active: true, 
                id: Date.now()
            })
            state.timerActive = state.timerList.filter(el => el.active === true)
            state.work = state.timerActive[0].work
            state.relax = state.timerActive[0].relax - 1
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
        }
    }
})

export default timerSlice.reducer;
export const {addTimer, startTimer, resetTimer} = timerSlice.actions;