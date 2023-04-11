import React from 'react';

import { useNavigate, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import notFound from "../../assets/75406-looped-404-error-animation.json";
import notFound2 from "../../assets/36395-lonely-404.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const ErrorPage = () => {
    const navigate = useNavigate()
    const handlePrevious = ()=>{
        navigate(-1);
    }
    return (
        <div className='  flex flex-col justify-center items-center min-h-[100vh]'>
            
            <div className='w-auto'>
            <Lottie animationData={notFound2 ? notFound2 : notFound} loop={true} />
            </div>
            <div >
                <button className='my-btn' onClick={handlePrevious}><FontAwesomeIcon icon={faArrowLeft}/> Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;