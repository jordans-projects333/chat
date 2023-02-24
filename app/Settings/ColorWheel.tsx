'use client'

import { useEffect, useState } from "react"

const ColorWheel = ({setColorIn, colorIn, elementToColor}: any) => {
    const setColor = (color: string) => {
        document.documentElement.style.setProperty(elementToColor, color)
        localStorage.setItem(elementToColor, color);
    }
  return (
    <div className={`absolute duration-500 top-0 ${!colorIn ? 'left-[100%]' : 'left-0'} w-full`}>
                <div className="grid grid-cols-6 gap-1" onClick={() => setColorIn(false)}>
                    <div onClick={() => setColor('white')} className="aspect-square bg-white"></div>
                    <div className="aspect-square bg-slate-50"></div>
                    <div className="aspect-square bg-slate-100"></div>
                    <div className="aspect-square bg-slate-200"></div>
                    <div className="aspect-square bg-slate-300"></div>
                    <div className="aspect-square bg-slate-400"></div>
                    <div className="aspect-square bg-gray-500"></div>
                    <div className="aspect-square bg-gray-600"></div>
                    <div className="aspect-square bg-gray-700"></div>
                    <div className="aspect-square bg-neutral-800"></div>
                    <div className="aspect-square bg-neutral-900"></div>
                    <div className="aspect-square bg-black"></div>
                    <div className="aspect-square bg-red-300"></div>
                    <div className="aspect-square bg-red-400"></div>
                    <div onClick={() => setColor('orange')} className="aspect-square bg-red-500">o</div>
                    <div className="aspect-square bg-red-600"></div>
                    <div className="aspect-square bg-red-700"></div>
                    <div className="aspect-square bg-red-800"></div>
                    <div className="aspect-square bg-pink-300"></div>
                    <div className="aspect-square bg-pink-400"></div>
                    <div className="aspect-square bg-pink-500"></div>
                    <div className="aspect-square bg-pink-600"></div>
                    <div className="aspect-square bg-pink-700"></div>
                    <div className="aspect-square bg-pink-800"></div>
                    <div className="aspect-square bg-purple-300"></div>
                    <div className="aspect-square bg-purple-400"></div>
                    <div className="aspect-square bg-purple-500"></div>
                    <div className="aspect-square bg-purple-600"></div>
                    <div className="aspect-square bg-purple-700"></div>
                    <div className="aspect-square bg-purple-800"></div>
                    <div className="aspect-square bg-blue-300"></div>
                    <div className="aspect-square bg-blue-400"></div>
                    <div className="aspect-square m-[4px] bg-blue-500"></div>
                    <div className="aspect-square bg-blue-600"></div>
                    <div className="aspect-square bg-blue-700"></div>
                    <div className="aspect-square bg-blue-800"></div>
                    <div className="aspect-square bg-green-300"></div>
                    <div className="aspect-square bg-green-400"></div>
                    <div className="aspect-square bg-green-500"></div>
                    <div className="aspect-square bg-green-600"></div>
                    <div className="aspect-square bg-green-700"></div>
                    <div className="aspect-square bg-green-800"></div>
                    <div className="aspect-square bg-yellow-300"></div>
                    <div className="aspect-square bg-yellow-400"></div>
                    <div className="aspect-square bg-yellow-500"></div>
                    <div className="aspect-square bg-yellow-600"></div>
                    <div className="aspect-square bg-yellow-700"></div>
                    <div className="aspect-square bg-yellow-800"></div>
                    <div className="aspect-square bg-orange-300"></div>
                    <div className="aspect-square bg-orange-400"></div>
                    <div className="aspect-square bg-orange-500"></div>
                    <div className="aspect-square bg-orange-600"></div>
                    <div className="aspect-square bg-orange-700"></div>
                    <div className="aspect-square bg-orange-800"></div>
                </div>
            </div>
  )
}

export default ColorWheel