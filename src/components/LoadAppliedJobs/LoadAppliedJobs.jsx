import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigation } from 'react-router-dom';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const LoadAppliedJobs = ({ singleAppliedJob }) => {
    const loaderSpinner = useNavigation()
    if (loaderSpinner.state === "loading") {
        return <LoaderSpinner></LoaderSpinner>
    }
    // console.log(singleAppliedJob);
    const { company_logo, company_name, job_title, full_time_or_part_time, remote_or_onsite, salary, location, id } = singleAppliedJob;
    return (
        <div className='card-container flex   justify-center my-10'>

            <div className='border border-gray-2 rounded-lg p-6 flex flex-col lg:flex-row items-center gap-8 w-full'>
                <div>
                    <img src={company_logo} alt="" className='h-10 w-32' />
                </div>
                <div className='flex-grow'>
                    <h1 className='font-extrabold text-2xl my-2'>{job_title}</h1>
                    <h1 className='font-semibold text-accent text-xl mb-2'>{company_name}</h1>
                    <div>
                        <div>
                            <button className='mr-5 text-base font-extrabold border border-primary py-1 px-4 mb-4 rounded-md gradient-text'>{remote_or_onsite}</button>
                            <button className='mr-5 text-base font-extrabold border border-primary py-1 px-4 mb-4 rounded-md gradient-text'>{full_time_or_part_time}</button>
                        </div>
                        <div className='inline-flex gap-3 mb-7 font-semibold text-accent'>
                            <div className='inline-flex items-center gap-1'>
                                <FontAwesomeIcon icon={faLocation} /> <p>{location}</p>
                            </div>
                            <div className='inline-flex items-center gap-1'>
                                <FontAwesomeIcon icon={faDollarSign} /> <p>Salary: {salary}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <Link to={`appliedDetails/${id}`}>
                        <button className='my-btn'>View Details</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default LoadAppliedJobs;