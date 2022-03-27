import { configureStore } from '@reduxjs/toolkit'
import viewStatisticsReducer from './viewStatisticsSlice'

export const store = configureStore({
    reducer: {
        viewStatistics: viewStatisticsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
