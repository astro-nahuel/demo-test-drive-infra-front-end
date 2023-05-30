import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// this would have to go in `_app.tsx` to be a true previous route tracker (across all pages)
const usePreviousRoute = () => {
    const router = useRouter()
    const [history, setHistory] = useState<any>([])

    useEffect(() => {
        setHistory([...history, router.asPath])
    }, [router.asPath])

    return history[history.length - 1]
}

export default usePreviousRoute
