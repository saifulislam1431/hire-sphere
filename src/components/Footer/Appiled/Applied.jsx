import React from 'react';
import Lottie from 'lottie-react';
import done from '../../../newAssets/121018-done.json';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadAppliedJobs from '../../LoadAppliedJobs/LoadAppliedJobs';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';


const Applied = () => {
    const loaderSpinner = useNavigation()
    if(loaderSpinner.state === "loading"){
        return <LoaderSpinner></LoaderSpinner>
    }
    const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <main>
            {/* Banner section Start */}
            <section className="banner-section bg-primary bg-opacity-10">
                <div className='my-container flex items-center flex-col'>
                    <div className='w-80'>
                        <Lottie animationData={done} loop={true}></Lottie>
                    </div>
                    <div>
                        <h1 className='text-5xl mb-2 lg:mb-4 font-extrabold gradient-text'>Applied Jobs</h1>
                    </div>
                </div>
            </section>
            {/* Banner section End */}
            <section className='applied-job flex justify-center items-center'>

                <div>
                    <div className='my-container my-5 lg:my-10'>

                        <div>

                        </div>
                        <div>
                            {
                       jobs.map(singleAppliedJob=><LoadAppliedJobs
                       key={singleAppliedJob.id}
                       singleAppliedJob={singleAppliedJob}
                       ></LoadAppliedJobs>)
                            }
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
};

export default Applied;