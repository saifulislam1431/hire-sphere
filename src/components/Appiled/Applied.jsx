import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import done from '../../assets/121018-done.json';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadAppliedJobs from '../LoadAppliedJobs/LoadAppliedJobs';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';


const Applied = () => {
    const loaderSpinner = useNavigation()
    if (loaderSpinner.state === "loading") {
        return <LoaderSpinner></LoaderSpinner>
    }
    const jobs = useLoaderData();
    // console.log(jobs);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const [value, setValue] = useState(" ");

    useEffect(() => {
      
        if (value === " ") {
            setFilteredJobs(jobs)
        }
        else {
            const filtered = jobs.filter(fj => fj.remote_or_onsite === value);
            setFilteredJobs(filtered);
        }
    }, [jobs,value])

  
    const handleRemote = () => {
        setValue("Remote");
    }
    const handleOnsite = () => {
        setValue("Onsite");
    }
    console.log(value);
    console.log(filteredJobs);


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

                        <div className='flex justify-end'>
                            {/* <div>
                            <button className='btn-active'>Remote</button>
                            <button className='btn-active'>On-Site</button>
                            </div> */}
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className=" font-semibold items-center my-btn m-1 inline-flex gap-2 "><FontAwesomeIcon icon={faFilter} /> <span>Filter by:</span></label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a className='gradient-text font-semibold' onClick={() => handleRemote()}>Remote</a></li>
                                    <li><a className='gradient-text font-semibold' onClick={() => handleOnsite()}>On-Site</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            {
                                filteredJobs.map(singleAppliedJob => <LoadAppliedJobs
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