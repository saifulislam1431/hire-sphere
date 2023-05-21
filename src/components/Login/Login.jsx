import React, { useContext, useState } from 'react';
import logo from '../../assets/Icons/search.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';
import icon from "../../assets/google.png"

const Login = () => {
    const [error, setError] = useState("");
    const { googleLog, signIn } = useContext(userContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign In Successful!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();

            })
            .then(error => {
                setError(error.message)
            })

    }
    const handleGoogleIn = () => {
        googleLog()
            .then(res => {
                const loggedUser = res.user;
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successful!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .then(error => {
                setError(error.message)
            })
    }
    return (
        <section className='flex items-center justify-center my-10 lg:my-20'>
            <div className='flex flex-col'>
                <div className='mt-10 mb-5 text-center'>

                    <Link className='logo-container inline-flex gap-2'>
                        <img src={logo} alt="" className='w-8 md:w-12' />
                        <h1 className='gradient-text text-2xl md:text-4xl font-extrabold'>HireSphere</h1>
                    </Link>
                </div>
                <div className='text-center my-2'>
                    <h2 className='text-2xl font-medium tracking-wide gradient-text'>Login to your account</h2>
                </div>

                <form className='flex flex-col' onSubmit={handleLogin}>
                    <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                    <input type="email" name='email' placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                    <label className='text-neutral text-lg mt-3 mb-1'>Password:</label>
                    <div className='inline-flex items-center'>
                        <input type="password" placeholder="Enter password" name='password' className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                    </div>

                    <button className='my-btn my-5'>Login</button>
                </form>

                <span className='font-medium text-error underline cursor-pointer'>Forgot password?</span>

                <p className='my-3 font-medium'>New user? <Link to="/register" className='cursor-pointer text-secondary underline'>Sign up</Link></p>
                <hr className='border border-primary' />
                <p className='text-center my-3 font-semibold'>Or login with:</p>
                <div className='my-4 space-x-3 w-full'>
                    <button className='inline-flex items-center gap-1 justify-center border border-sky-600 py-2 px-2 rounded-md w-full' onClick={handleGoogleIn}>
                        <span className='font-semibold'>Sign In with</span> <img src={icon} alt="" className='w-6' />
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Login;