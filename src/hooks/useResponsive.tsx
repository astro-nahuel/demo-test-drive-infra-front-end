import { useEffect, useMemo, useState } from 'react'

export default function useResponsive() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)
    const [isLargeDesktop, setIsLargeDesktop] = useState(false)
    const [isWidescreen, setIsWidescreen] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        }
        if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setIsTablet(true)
        }
        if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
            setIsDesktop(true)
        }
        if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
            setIsLargeDesktop(true)
        }
        if (window.innerWidth >= 1920) {
            setIsWidescreen(true)
        }
    }, [])

    return useMemo(
        () => ({ isMobile, isTablet, isDesktop, isLargeDesktop, isWidescreen }),
        [isMobile, isTablet, isDesktop, isLargeDesktop, isWidescreen]
    )
}
