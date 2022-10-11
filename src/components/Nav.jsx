import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className='bg-[#0095E8] flex justify-between items-center px-24 h-20 '>
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
    )
}
