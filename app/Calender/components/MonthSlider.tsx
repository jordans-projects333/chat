'use client'
import { useStore } from "@/zustand/store"
import { useEffect } from "react"

const MonthSlider = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { monthIndex }: any = useStore()
    useEffect(() => {

    }, [monthIndex])
    const monthLeft = () => {
        if(monthIndex === 0)return
        useStore.setState((state: { monthIndex: any }) => ({
            monthIndex: state.monthIndex - 1
        }))
    }
    const monthRight = () => {
        if(monthIndex === 11)return
        useStore.setState((state: { monthIndex: any }) => ({
            monthIndex: state.monthIndex + 1
        }))
    }
    return (
        <div className='flex justify-between mx-12 text-2xl mt-4'>
            <svg onClick={() => monthLeft()} className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            <h3>{months[monthIndex]}</h3>
            <svg onClick={() => monthRight()} className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
    )
}

export default MonthSlider