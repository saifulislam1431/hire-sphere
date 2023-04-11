import React from 'react';
import Lottie from 'lottie-react';
import loader from '../../assets/9833-full-page-loading-spinner.json'

const LoaderSpinner = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='h-96 w-96'>
            <Lottie animationData={loader} loop={true} />
            </div>
        </div>
    );
};

export default LoaderSpinner;