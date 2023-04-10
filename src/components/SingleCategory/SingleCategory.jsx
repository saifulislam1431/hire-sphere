import React from 'react';

const SingleCategory = ({singleCategory}) => {
    // console.log(singleCategory);
    const{category_logo,category_name,jobs_available}=singleCategory;
    return (
        <div className='bg-primary bg-opacity-10 my-5 p-8 rounded-xl'>
            <img src={category_logo} alt="" className='w-16'/>
            <h1 className='font-extrabold text-neutral my-3'>{category_name}</h1>
            <p className='font-medium text-accent'>{jobs_available}  Jobs Available</p>
        </div>
    );
};

export default SingleCategory;