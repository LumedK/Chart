import { useRef, useState } from 'react'

export const useLoader = (pending: boolean) => {
    const [update, setUpdate] = useState(0)
    const classLoaderRef = useRef('')

    if (!pending) classLoaderRef.current = ''

    setTimeout(() => {
        if (pending) {
            classLoaderRef.current = 'loading'
            setUpdate(update + 1)
        }
    }, 500)
    return { classLoader: classLoaderRef.current }
}
