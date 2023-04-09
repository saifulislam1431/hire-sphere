import React from 'react';

import Lottie from 'lottie-react';
import heroImage from '../../../public/assets/75702-job-proposal-review-animation.json'

const Home = () => {
    return (
        <main>
            <div className="banner-section bg-primary bg-opacity-10">
                <div className='my-container flex items-center flex-col lg:flex-row'>
                    <div>
                       <h1 className='text-5xl mb-2 lg:mb-4 font-extrabold'>One Step</h1>
                       <h1 className='text-5xl mb-2 lg:mb-4 font-extrabold'>Closer To Your</h1>
                       <h1 className='text-5xl mb-2 lg:mb-4 font-extrabold gradient-text'>Dream Job</h1>
                       <p className='text-accent font-medium leading-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                       <button className='my-btn my-7'>Get Started</button>
                    </div>
                    <div>
                      <Lottie animationData={heroImage} loop={true}></Lottie>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Home;