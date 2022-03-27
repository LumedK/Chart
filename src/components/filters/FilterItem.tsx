import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CheckedIcon } from '../../assets/checked.svg'
import { RootState } from '../../redux/store'
import { activateFilter, updateVersion } from '../../redux/viewStatisticsSlice'

const FilterItem = (props: { device: string }) => {
    const { device } = props
    const filters = useSelector((state: RootState) => new Set(state.viewStatistics.filters || []))
    const dispatch = useDispatch()

    const onChangeFilter = () => {
        dispatch(activateFilter({ device }))
        dispatch(updateVersion())
    }

    return (
        <label className="filter-item">
            <div className="devise-name">{device}</div>
            <input
                className="filter-enable"
                type="checkbox"
                checked={!filters.has(device)}
                onChange={onChangeFilter}
            />
            <CheckedIcon className="filter-icon" />
        </label>
    )
}

export default FilterItem
