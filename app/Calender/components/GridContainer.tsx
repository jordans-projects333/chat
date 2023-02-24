'use client'
import { useStore } from "@/zustand/store"
import { useEffect, useRef } from "react"

const GridContainer = ({children}: any) => {
    const { monthIndex }: any = useStore()
    let calendar = useRef<any>(null)
    let slider = useRef<any>(null)
    useEffect(() => {
        slider.current.style.transform = `translateX(${calendar.current.offsetWidth * -monthIndex}px)`
    },[monthIndex])
    return (
        <div ref={calendar} className="flex w-full overflow-x-hidden">
            <div ref={slider} className="flex duration-300">
                {children}
            </div>
        </div>
    )
}

export default GridContainer