import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import statistics from '../../assets/99430-statistics.json';
import start from '../../assets/Icons/star.png';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useNavigation } from 'react-router-dom';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Statistics = () => {
    const loaderSpinner = useNavigation()
    if(loaderSpinner.state === "loading"){
        return <LoaderSpinner></LoaderSpinner>
    }
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => setMarks(data.data))

    }, []);

    return (
        <main>
            {/* Banner section start */}
            <section className="banner-section bg-primary bg-opacity-10">
                <div className='my-container flex items-center flex-col'>
                    <div className='w-80'>
                        <Lottie animationData={statistics} loop={true}></Lottie>
                    </div>
                    <div>
                        <h1 className='text-5xl mb-2 lg:mb-4 font-extrabold gradient-text'>Assignment Analytics</h1>
                    </div>
                </div>
            </section>
            {/* Banner section End */}

            <section className='chart-section'>

                <div className='my-container'>
                    <div className='flex justify-center'>
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="totalMarks"
                                isAnimationActive={false}
                                data={marks}
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                fill="#9873FF"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className='my-12 flex justify-center'>
                        <div className='inline-flex items-center gap-5 border-2  p-4 rounded-xl'>
                        <div>
                            <img src={start} alt="" />
                        </div>
                        <div>
                            <span className='font-extrabold text-xl'>59.88</span>
                            <p className='font-bold text-accent'>Avg Assignment Mark</p>
                        </div>
                        </div>
                    </div>

                </div>


            </section>
        </main>
    );
};

export default Statistics;