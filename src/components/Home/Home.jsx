import React, { useEffect, useState } from 'react';

import Lottie from 'lottie-react';
import heroImage from '../../../public/assets/75702-job-proposal-review-animation.json'
import { data } from 'autoprefixer';
import SingleCategory from '../SingleCategory/SingleCategory';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const Home = () => {

    const allJobs = useLoaderData();

    const [category, setCategory] = useState([]);

    const[showAll , setShowAll] = useState(false);

    const showHandler =() =>{
        setShowAll(true)
    }

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <main>
            {/* Banner section Start */}
            <section className="banner-section bg-primary bg-opacity-10">
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
            </section>
            {/* Banner section End */}

            {/* Category section start */}
            <section className='category-section mt-14'>
                <div className='my-container'>

                    <div className='text-center'>
                        <h1 className='font-extrabold text-2xl lg:text-4xl text-neutral mb-3 lg:mb-5'>Job Category List</h1>
                        <p className='text-accent font-medium mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10'>
                        {
                            category.map(singleCategory => <SingleCategory
                                key={singleCategory.id}
                                singleCategory={singleCategory}
                            ></SingleCategory>)
                        }
                    </div>

                </div>
            </section>
            {/* Category section End */}

            {/* Featured section start */}
            <section className='featured-section mt-14'>
                <div className='my-container'>

                    <div className='text-center'>
                        <h1 className='font-extrabold text-2xl lg:text-4xl text-neutral mb-3 lg:mb-5'>Features Jobs</h1>
                        <p className='text-accent font-medium mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 lg:gap-10 mt-5 lg:mt-10'>
                        {
                            allJobs.slice(0,showAll ? 6 : 4).map(job=><SingleJob
                            key={job.id}
                            job={job}
                            ></SingleJob>)
                        }
                    </div>

                    <div className='text-center'>

                        {
                            !showAll && <button className='my-btn' onClick={showHandler}>Show All</button>
                        }

                    </div>

                </div>
            </section>
            {/* Featured section End */}
        </main>
    );
};

export default Home;