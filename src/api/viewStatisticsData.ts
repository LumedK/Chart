import { AppDispatch, store } from '../redux/store'
import {
    updateDataStart,
    updateDataSuccess,
    updateDataError,
    setMaxViewRound,
    setFilteredData,
    setDevices
} from '../redux/viewStatisticsSlice'
import { fakeFetch } from './fakeData'

interface Age_lvl {
    n: string
    v: number
}
interface Date_lvl {
    n: string
    o: Age_lvl[]
}
interface Device_lvl {
    n: string
    o: Date_lvl[]
}
interface Root_lvl {
    n: string
    o: Device_lvl[]
}
interface ServerResponse {
    data: Root_lvl
}

export const updateData = async (args: { url: string; dispatch: AppDispatch }) => {
    const { url, dispatch } = args
    dispatch(updateDataStart())

    //!Debug+
    // await new Promise((resolve: any) => {
    //     setTimeout(() => {
    //         resolve()
    //     }, 2000)
    // })
    //!Debug-

    try {
        const response = await fakeFetch(url) // const response = await fetch(url)

        console.log(response)

        const result = await response.json()

        prepareData(result, dispatch)
        dispatch(updateDataSuccess())
    } catch (error) {
        console.log('error:', error)
        dispatch(updateDataError())
    }
}

const prepareData = (serverData: ServerResponse, dispatch: AppDispatch) => {
    const devices: string[] = []
    const ages = new Map([
        ['undefined', 0],
        ['kid', 1],
        ['young', 2],
        ['adult', 3],
        ['senior', 4]
    ])
    const data = [
        [0, 0, 0, 0, 0], // Sun
        [0, 0, 0, 0, 0], // Mon
        [0, 0, 0, 0, 0], // Tue
        [0, 0, 0, 0, 0], // Wed
        [0, 0, 0, 0, 0], // Thu
        [0, 0, 0, 0, 0], // Fri
        [0, 0, 0, 0, 0] // Sat
    ]

    const filters = new Set(store.getState().viewStatistics.filters)
    serverData.data.o.forEach((devices_lvl) => {
        devices.push(devices_lvl.n)
        if (filters.has(devices_lvl.n)) return // filter

        devices_lvl.o.forEach((dates_lvl) => {
            const dayOfWeek = new Date(dates_lvl.n).getDay()

            dates_lvl.o.forEach((ages_lvl) => {
                const ageIndex = ages.get(ages_lvl.n)
                if (ageIndex !== undefined) {
                    data[dayOfWeek][ageIndex] += ages_lvl.v
                }
            })
        })
    })

    // get max view
    let maxView = 0
    data.forEach((days) => {
        let viewByDay = 0
        days.forEach((day) => (viewByDay += day))
        maxView = viewByDay > maxView ? viewByDay : maxView
    })

    //round max view
    let maxViewRound = Math.ceil(maxView / 2)
    maxViewRound = (maxViewRound + (maxViewRound % 2)) * 2

    dispatch(setMaxViewRound(maxViewRound))
    dispatch(setFilteredData({ filteredData: data }))
    dispatch(setDevices({ devices }))
}
