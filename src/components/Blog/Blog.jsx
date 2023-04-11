import React from 'react';
import Lottie from 'lottie-react';
import blogAnimation from '../../assets/61232-web-design-lottie-animation.json'

const Blog = () => {
    return (
        <main>
            {/* Banner section start */}
            <section className="banner-section bg-primary bg-opacity-10">
                <div className='my-container flex items-center flex-col'>
                    <div className='w-80'>
                        <Lottie animationData={blogAnimation} loop={true}></Lottie>
                    </div>
                    <div>
                        <h1 className='text-5xl my-2 lg:my-4 font-extrabold gradient-text'>Blog</h1>
                    </div>
                </div>
            </section>
            {/* Banner section End */}
            <section className='blog-container'>

                <div className='my-container'>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold my-5 gradient-text'>Click Button if you want to read blogs.</h1>
          <div className='my-5 lg:my-10'>
          <div className='my-3'>
                        
                        <label htmlFor="my-modal-1" className="btn my-btn">When should you use context API?</label>

                        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-1" className="btn btn-active btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold gradient-text">When should you use context API?</h3>
                                <p className="py-4"><strong>Context API </strong> is mainly used for distribute data in many nested component. In general for data passing one component to another component we used <strong>Props</strong>. But when we have to pass data in many child or nested component there are we face some difficulties of reuse components, for avoiding this situation <strong>Context API </strong> is simpler solution.</p>
                            </div>
                        </div>
         </div>

         <div className='my-3'>
                        
                        <label htmlFor="my-modal-2" className="btn my-btn">What is a custom hook?</label>

                        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-2" className="btn btn-active  btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold gradient-text">What is a custom hook?</h3>
                                <p className="py-4"><strong>Custom hook</strong> is a JavaScript function name which is special function and use for to call other hooks. It is reusable. It is pass argument and return depends on what we need.</p>
                            </div>
                        </div>
         </div>

         <div className='my-3'>
                        
                        <label htmlFor="my-modal-3" className="btn my-btn">What is useRef?</label>

                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 btn-active ">✕</label>
                                <h3 className="text-lg font-bold gradient-text">What is useRef?</h3>
                                <p className="py-4"><strong>useRef</strong> is a react build in hook which is return a reference by depends on argument value.</p>
                            </div>
                        </div>
         </div>

         <div className='my-3'>
                        
                        <label htmlFor="my-modal-4" className="btn my-btn">What is useMemo?</label>

                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2 btn-active ">✕</label>
                                <h3 className="text-lg font-bold gradient-text">What is useMemo?</h3>
                                <p className="py-4"><strong>useMemo</strong> is a react build in hook which is  memoizing or caching computed results for reoccurring usage. It is  optimize the performance application by caching outputs from computations.</p>
                            </div>
                        </div>
         </div>

         
          </div>
                </div>

            </section>
        </main>
    );
};

export default Blog;