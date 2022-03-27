import { createRef, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLoader } from '../../hooks/useLoader'
import { RootState } from '../../redux/store'
import './column.scss'

const Column = (props: { columnData: number[]; index: number }) => {
    const { columnData } = props
    const maxViewRound = useSelector((state: RootState) => state.viewStatistics.maxViewRound)

    const slice1Ref = createRef<HTMLDivElement>()
    const slice2Ref = createRef<HTMLDivElement>()
    const slice3Ref = createRef<HTMLDivElement>()
    const slice4Ref = createRef<HTMLDivElement>()
    const slice5Ref = createRef<HTMLDivElement>()

    const pending = useSelector((state: RootState) => state.viewStatistics.pending)
    const { classLoader } = useLoader(pending)

    const setupHeight = useCallback(
        (sliceRef, index) => {
            const heightPercentage =
                maxViewRound !== 0 ? (columnData[index] / maxViewRound) * 100 : 0
            sliceRef.current.style['margin-bottom'] = heightPercentage ? '1px' : '0px'
            sliceRef.current.style.height = `calc(${heightPercentage}% - 1px)`
        },
        [columnData, maxViewRound]
    )

    useEffect(() => {
        setupHeight(slice1Ref, 0)
        setupHeight(slice2Ref, 1)
        setupHeight(slice3Ref, 2)
        setupHeight(slice4Ref, 3)
        setupHeight(slice5Ref, 4)
    }, [setupHeight, slice1Ref, slice2Ref, slice3Ref, slice4Ref, slice5Ref])

    return (
        <div className="column">
            <div className="mesh-col"></div>
            <div className={`slice color-5 ${classLoader}`} ref={slice5Ref}></div>
            <div className={`slice color-4 ${classLoader}`} ref={slice4Ref}></div>
            <div className={`slice color-3 ${classLoader}`} ref={slice3Ref}></div>
            <div className={`slice color-2 ${classLoader}`} ref={slice2Ref}></div>
            <div className={`slice color-1 ${classLoader}`} ref={slice1Ref}></div>
        </div>
    )
}

export default Column
