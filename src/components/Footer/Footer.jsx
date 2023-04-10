import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-neutral mt-10 flex justify-center items-center'>
            <div className='my-footer grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10'>

                <div>
                    <div className='logo-container inline-flex gap-2'>
                        <img src="../../../public/assets/Icons/search.png" alt="" className='w-5 md:w-8' />
                        <h1 className='gradient-text text-xl md:text-2xl font-extrabold'>HireSphere</h1>
                    </div>
                    <p className='text-base-300 text-base font-normal mt-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='inline-flex gap-3 mt-5'>
                        <img src="../../../public/assets/Icons/facebook.png" alt="facebook" className='w-10' />
                        <img src="../../../public/assets/Icons/twitter.png" alt="twitter" className='w-10' />
                        <img src="../../../public/assets/Icons/instagram.png" alt="" className='w-10' />
                    </div>
                </div>

                <div>
                    <h1 className='text-lg lg:text-xl font-semibold gradient-text'>Company</h1>

                    <ul className='my-2 text-base-300'>
                    <li className='mt-1'>About Us</li>
                    <li className='mt-1'>Work</li>
                    <li className='mt-1'>Latest News</li>
                    <li className='mt-1'>Careers</li>
                </ul>
                </div>

                <div>
                    <h1 className='text-lg lg:text-xl font-semibold gradient-text'>Product</h1>

                    <ul className='my-2 text-base-300'>
                    <li className='mt-1'>Prototype </li>
                    <li className='mt-1'>Plans & Pricing</li>
                    <li className='mt-1'>Customers</li>
                    <li className='mt-1'>Integrations</li>
                </ul>
                </div>


                <div>
                    <h1 className='text-lg lg:text-xl font-semibold gradient-text'>Support</h1>

                    <ul className='my-2 text-base-300'>
                    <li className='mt-1'>Help Desk</li>
                    <li className='mt-1'>Sales</li>
                    <li className='mt-1'>Become a Partner</li>
                    <li className='mt-1'>Developers</li>
                </ul>
                </div>


                <div>
                    <h1 className='text-lg lg:text-xl font-semibold gradient-text'>Contact</h1>

                    <ul className='my-2 text-base-300'>
                    <li className='mt-1'>524 Broadway , NYC</li>
                    <li className='mt-1'>+1 777 - 978 - 5570</li>
                </ul>
                </div>
                

            </div>
        </footer>
    );
};

export default Footer;