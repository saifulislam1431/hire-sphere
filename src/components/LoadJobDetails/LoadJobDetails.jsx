import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign, faPhone, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './LoadJobDetails.css';

import Lottie from 'lottie-react';
import heroImg from '../../assets/78518-girl-doing-remote-job-using-laptop.json'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const LoadJobDetails = () => {
    const loaderSpinner = useNavigation()
    if (loaderSpinner.state === "loading") {
        return <LoaderSpinner></LoaderSpinner>
    }
    const getId = useParams();
    const jobId = getId.jobId;
    const data = useLoaderData();
    // console.log(data);
    const [findJob, setFindJob] = useState({});
    const [storeJob, setStoreJob] = useState([]);

    useEffect(() => {
        const storedJob = getShoppingCart();
        const updatedJob = [];

        for (const id in storedJob) {
            const applyJob = data.find(job => job.id === id);

            if (applyJob) {
                const time = storeJob[id];

                applyJob.time = time;

                updatedJob.push(applyJob);
            }
        }
        setStoreJob(updatedJob);
    }, [data])


    useEffect(() => {
        const job = data.find(searchData => searchData.id === jobId);
        setFindJob(job);

    }, [])
    // console.log(findJob);

    const handleApply = (apply) => {
        const newApply = [...storeJob, apply];
        setStoreJob(newApply);
        addToDb(apply.id)
    }

    const { id, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, location, salary } = findJob


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

                    <div>
                        <div className='bg-primary bg-opacity-10 p-6 rounded-lg'>
                            <div>
                                <h1 className='text-neutral font-extrabold text-lg pb-2 border-b border-gray-400'>Job Details</h1>
                                <div className='mt-4 inline-flex gap-2'>
                                    <span className='text-primary'>
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </span>
                                    <h1 className='font-bold'>Salary: <span className='text-accent font-semibold'>{salary} (per Month)</span></h1>
                                </div>
                                <br />
                                <div className='mt-4 inline-flex gap-2'>
                                    <span className='text-primary'>
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h1 className='font-bold'>Job Title : <span className='text-accent font-semibold'>{job_title} (per Month)</span></h1>
                                </div>


                            </div>

                            <div>
                                <h1 className='text-neutral font-extrabold text-lg pb-2 border-b border-gray-400 mt-6'>Contact Information</h1>
                                <div className='mt-4 inline-flex gap-2'>
                                    <span className='text-primary'>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <h1 className='font-bold'>Phone: <span className='text-accent font-semibold'>{contact_information?.phone}</span></h1>
                                </div>

                                <br />

                                <div className='mt-4 inline-flex gap-2'>
                                    <span className='text-primary'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <h1 className='font-bold'>Email: <span className='text-accent font-semibold'>{contact_information?.email}</span></h1>
                                </div>
                                <br />

                                <div className='mt-4 inline-flex gap-2 pb-3'>
                                    <span className='text-primary'>
                                        <FontAwesomeIcon icon={faLocation} />
                                    </span>
                                    <h1 className='font-bold'>Address: <span className='text-accent font-semibold'>{location}</span></h1>
                                </div>
                            </div>
                        </div>


                        <button className='mt-3 lg:mt-5 bg-gradient-to-l from-primary to-secondary rounded-lg font-medium text-white w-full py-3' onClick={() => handleApply(findJob)}>Apply Now</button>

                    </div>

                </div>

            </section>
        </main>
    );
};

export default LoadJobDetails;