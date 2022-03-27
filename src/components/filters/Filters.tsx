import { useSelector } from 'react-redux'
import './filters.scss'
import FilterItem from './FilterItem'
import { RootState } from '../../redux/store'

const Filters = () => {
    const devices = useSelector((state: RootState) => state.viewStatistics.devices)

    return (
        <div className="filters">
            {devices.map((device) => (
                <FilterItem key={device} device={device} />
            ))}
        </div>
    )
}

export default Filters
