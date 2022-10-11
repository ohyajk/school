import React from 'react'

export const NavTop = () => {
    return (
        <div className='flex justify-between items-center bg-[#E80095] px-24 h-10'>
            <div className='flex text-white'>
                <img className='h-8' src="./new.png" alt="label" />
                <marquee scrollamount='3'>This is basic example of marquee</marquee>
            </div>
            <div className=' text-white flex items-center gap-2 '>
                <span className='pl-2'> <i class="fa-solid fa-envelope " /> info@st.stephens.com</span>
                <span className='pl-2'> <i class="fa-solid fa-mobile" /> +91-8666777888</span>
                <span className='pl-2'> <i class="fa-solid fa-calendar-days" /> 12-DEC-2122</span>
                <span className='pl-2'> <i class="fa-regular fa-hourglass-half" /> 12:30 PM</span>
            </div>
        </div>
    )
}
