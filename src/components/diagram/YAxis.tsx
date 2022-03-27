import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
const YAxis = () => {
    console.log()
    const maxView = useSelector((state: RootState) => state.viewStatistics.maxViewRound)
    const maxViewRef = useRef(0)
    maxViewRef.current = maxView ? maxView : maxViewRef.current

    const hide = maxView ? '' : 'hide'
    return (
        <div className="y-axis">
            <div className={hide}>{maxViewRef.current}</div>
            <div className={hide}>{maxViewRef.current * 0.75}</div>
            <div className={hide}>{maxViewRef.current * 0.5}</div>
            <div className={hide}>{maxViewRef.current * 0.25}</div>
            <div>0</div>
        </div>
    )
}

export default YAxis
