'use client'
import ColorWheel from "./ColorWheel"
import { useState } from "react"

const Settings = () => {
    const [colorIn, setColorIn] = useState(false)
    const [elementToColor, setElementToColor] = useState('')
    return (
        <div className="w-full h-screen relative overflow-x-hidden bg-primary">
            <div className={`w-full relative top-0 duration-500 ${!colorIn ? 'left-0' : 'left-[-100%]'}`}>
                <h3 className="text-center mt-4 text-3xl">Settings</h3>
                <div className="flex flex-col items-start mb-4">
                    <h3 className="ml-4 text-xl mb-1">Colors</h3>
                    <div className="flex bg-secondary w-full items-center">
                        <button onClick={() => {setColorIn(true); setElementToColor('--primary')}} className='w-full text-left pl-4 py-1'>Primary</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => {setColorIn(true); setElementToColor('--secondary')}} className='w-full text-left pl-4 py-1'>Secondary</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Recieved messages</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Recieved messages text</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Sent messages background</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Sent messages text</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Send button</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Ping icon</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Navbar</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Unactive navigation icons</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Active navication icons</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Primary text</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Seconday text</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="ml-4 text-xl mb-1">Fonts</h3>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left pl-4 py-1'>Main</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Recieved Messages</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                    <div className="flex bg-white w-full items-center">
                        <button onClick={() => setColorIn(true)} className='w-full text-left bg-white pl-4 py-1'>Sent Messages</button>
                        <svg className="h-3 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                </div>
            </div>
            <ColorWheel setColorIn={setColorIn} colorIn={colorIn} elementToColor={elementToColor}/>
        </div>
    )
}

export default Settings