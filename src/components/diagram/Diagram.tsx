import { useDispatch, useSelector } from 'react-redux'
import useSWR from 'swr'
import { updateData as updateDataAPI } from '../../api/viewStatisticsData'
import './diagram.scss'
import Column from './Column'
import Legend from './Legend'
import MeshX from './MeshX'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { useLoader } from '../../hooks/useLoader'
import { RootState } from '../../redux/store'

const Diagram = () => {
    const dispatch = useDispatch()
    const url = useSelector((state: RootState) => state.viewStatistics.url)
    const version = useSelector((state: RootState) => state.viewStatistics.version)
    useSWR({ url, dispatch, version }, updateDataAPI)
    const data = useSelector((state: RootState) => state.viewStatistics.filteredData)
    const pending = useSelector((state: RootState) => state.viewStatistics.pending)
    const { classLoader } = useLoader(pending)
    return (
        <div className={`diagram ${classLoader}`}>
            <h1 className="title">Total views: Age (by day of week)</h1>
            <div className="plot">
                <MeshX />
                {data.map((column, index) => (
                    <Column key={index} columnData={column} index={index} />
                ))}
            </div>
            <YAxis />
            <XAxis />
            <Legend />
        </div>
    )
}

export default Diagram
