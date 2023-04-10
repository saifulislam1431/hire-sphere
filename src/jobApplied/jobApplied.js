import { getShoppingCart } from "../utilities/fakedb";

const appiledJobLoader = async()=>{
    const loadedJobs = await fetch('allJobs.json');
    const jobs = await loadedJobs.json();


    const appliedJob = getShoppingCart();
    const savedJobs = [];

    for(const id in appliedJob){
        const addedJob = jobs.find(job=>job.id === id);

        if(addedJob){
            const time = appliedJob[id]

            addedJob.time = time;
            savedJobs.push(addedJob)
        }
    }

    return savedJobs;
    // console.log(savedJobs);
}

export default appiledJobLoader;