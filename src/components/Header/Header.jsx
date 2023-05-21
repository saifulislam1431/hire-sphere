import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/Icons/search.png'
import { userContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';
const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, logOut } = useContext(userContext);
    const handleOut = ()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Log Out Successful!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .then(error=>{
            console.log(error.message)
        })
    }
    return (
        <nav className='my-container'>
            <div className='flex justify-between items-center'>
                <Link to="/">
                    <div className='logo-container inline-flex gap-2'>
                        <img src={logo} alt="" className='w-8 md:w-12' />
                        <h1 className='gradient-text text-2xl md:text-4xl font-extrabold'>HireSphere</h1>
                    </div>
                </Link>
                <ul className={`nav-items flex flex-col lg:flex-row justify-end items-center absolute duration-300 bg-gray-800 bg-opacity-75 lg:bg-transparent py-10 lg:py-0 z-40 lg:static w-full ${isOpen ? 'top-20 right-0 ' : '-top-96 right-0'}`}>

                    <li className='mr-5 mb-3 lg:mb-0'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>Home</NavLink>

                    </li>
                    <li className='mr-5 mb-3 lg:mb-0'>
                        <NavLink to='/statistics' className={({ isActive }) => isActive ? 'active' : 'default'}>Statistics</NavLink>
                    </li>
                    <li className='mr-5 mb-3 lg:mb-0'>
                        <NavLink to='/applied' className={({ isActive }) => isActive ? 'active' : 'default'}>Applied Jobs</NavLink>
                    </li>
                    <li className='mr-5 mb-3 lg:mb-0'>

                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'active' : 'default'}>Blog</NavLink>
                    </li>
                    {
                        user ? <li className='mr-5 mb-3 lg:mb-0 ml-0 lg:ml-32 2xl:ml-48 inline-flex items-center gap-2'>
                            <button className='my-btn' onClick={handleOut}>Sign Out</button>
                            <div className="w-10">
                                <img src={user.photoURL} className="w-10  rounded-full"/>
                            </div>
                        </li> : <li className='mr-5 mb-3 lg:mb-0 ml-0 lg:ml-32 2xl:ml-48'>
                            <NavLink to='/login'><button className='my-btn'>Sign In</button></NavLink>
                        </li>
                    }


                </ul>
                <button className='lg:hidden' onClick={() => setOpen(!isOpen)}>
                    {
                        isOpen ? <XMarkIcon className="h-8 w-8 text-red-700" /> : <Bars3BottomRightIcon className="h-8 w-8 text-secondary" />
                    }
                </button>
            </div>
        </nav>
    );
};

export default Header;