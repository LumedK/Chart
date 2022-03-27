import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ViewStatisticsState {
    url: string
    maxViewRound: number
    filteredData: number[][] | []
    filters: string[]
    devices: string[]
    version: number
    pending: boolean
    error: boolean
}

const initialState: ViewStatisticsState = {
    url: 'get-fake-data',
    maxViewRound: 0,
    filteredData: [],
    filters: [],
    devices: [],
    version: 0,
    pending: false,
    error: false
}

const viewStatisticsSlice = createSlice({
    name: 'viewStatistics',
    initialState,
    reducers: {
        updateDataStart: (state) => {
            state.pending = true
        },
        updateDataSuccess: (state) => {
            state.pending = false
        },
        updateDataError: (state) => {
            state.pending = false
            state.error = true
        },
        setMaxViewRound: (state, action: PayloadAction<number>) => {
            state.maxViewRound = action.payload
        },
        setFilteredData: (state, action: PayloadAction<{ filteredData: number[][] }>) => {
            state.filteredData = action.payload.filteredData
        },
        setDevices: (state, action: PayloadAction<{ devices: string[] }>) => {
            state.devices = action.payload.devices
        },
        activateFilter: (state, action: PayloadAction<{ device: string }>) => {
            const device = action.payload.device
            const newFilters: string[] = state.filters.filter((item) => item !== device)
            if (newFilters.length === state.filters.length) newFilters.push(device)
            state.filters = newFilters
        },
        updateVersion: (state) => {
            state.version++
        }
    }
})

export const {
    updateDataStart,
    updateDataSuccess,
    updateDataError,
    setMaxViewRound,
    setFilteredData,
    setDevices,
    activateFilter,
    updateVersion
} = viewStatisticsSlice.actions

export default viewStatisticsSlice.reducer
