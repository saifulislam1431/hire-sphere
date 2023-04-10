import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign, faPhone, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './LoadJobDetails.css';

import Lottie from 'lottie-react';
import heroImg from '../../../public/assets/78518-girl-doing-remote-job-using-laptop.json'

const LoadJobDetails = () => {
    const id = useParams();
    const jobId = id.jobId;
    const data = useLoaderData();
    // console.log(data);
    const [findJob, setFindJob] = useState({});


    useEffect(() => {
        const job = data.find(searchData => searchData.id === jobId);
        setFindJob(job);

    }, [])
    console.log(findJob);

    const { contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, location, salary } = findJob


    return (
        <main>
            {/* Banner section Start */}
            <section className="banner-section bg-primary bg-opacity-10">
                <div className='my-container flex items-center flex-col'>
                    <div className='w-80'>
                        <Lottie animationData={heroImg} loop={true}></Lottie>
                    </div>
                    <div>
                        <h1 className='text-5xl mb-2 lg:mb-4 font-extrabold gradient-text'>Job Details</h1>
                    </div>
                </div>
            </section>
            {/* Banner section End */}
            {/* Details section start */}
            <section className='my-14 lg:my-20'>
                <div className='my-container job-container'>

                    <div>
                        <div className='mt-5'>
                            <h1 className='font-medium text-accent'><span className='font-extrabold text-neutral'>Job Description:</span>{job_description}</h1>
                        </div>

                        <div className='mt-5'>
                            <h1 className='font-medium text-accent'><span className='font-extrabold text-neutral'>Job Responsibility:</span>{job_responsibility}</h1>
                        </div>

                        <div className='mt-5'>
                            <span className='font-extrabold text-neutral'>Educational Requirements:</span>
                            <h1 className='font-medium text-accent mt-1'>{educational_requirements}</h1>
                        </div>

                        <div className='mt-5'>
                            <span className='font-extrabold text-neutral'>Experiences:</span>
                            <h1 className='font-medium text-accent mt-1'>{experiences}</h1>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
};

export default LoadJobDetails;