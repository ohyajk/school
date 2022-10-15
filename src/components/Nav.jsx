import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Nav = () => {

    const [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)
    }

    return (
        <div>
            {/* PC NAV */}
            <div className='bg-[#0095E8] lg:flex justify-between items-center px-24 h-20 shadow-lg drop-shadow-xl shadow-black hidden '>
                <div className=''>
                    <img className='h-20 p-1' src="./school2.png" alt="School logo" />
                </div>
                <div className='flex text-white text-[20px] font-semibold gap-4'>
                    <Link to="/">HOME</Link>
                    <Link to="/academics">ACADEMICS</Link>
                    <Link to="/faculty">FACULTY</Link>
                    <Link to="/alumni">ALUMNI</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </div>
            {/* MOBILE NAV */}
            <div className='bg-[#0095E8] flex justify-between items-center px-2 h-14 lg:hidden drop-shadow-xl shadow-blue'>
                <div className=''>
                    <img className='h-14 p-2' src="./school2.png" alt="School logo" />
                </div>
                <div className='flex text-white text-[20px] font-semibold gap-4'>
                    <button onClick={toggle}>
                        {state ? <i className="fa-solid fa-xmark fa-spin fa-lg "></i> : <i className="fa-solid fa-bars fa-shake fa-lg "></i>}
                    </button>
                </div>
            </div>
            {/* Absolute Links & Magics */}
            {state ? <div className='absolute z-50  bg-gradient-to-b from-[#0095E8] to-[#E80095] h-screen w-screen anim'>
                <div className='relative flex flex-col items-center pt-10 w-full h-full gap-8 text-white'>
                    <Link to="/">HOME</Link>
                    <Link to="/academics">ACADEMICS</Link>
                    <Link to="/faculty">FACULTY</Link>
                    <Link to="/alumni">ALUMNI</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </div> : <div></div>}

        </div>

    )
}
