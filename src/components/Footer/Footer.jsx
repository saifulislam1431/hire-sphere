import React from 'react';
import facebook from '../../assets/Icons/facebook.png';
import twitter from '../../assets/Icons/twitter.png';
import instagram from '../../assets/Icons/instagram.png';
import logo from '../../assets/Icons/search.png'

const Footer = () => {
    return (
        <footer className='bg-neutral mt-10 flex justify-center items-center'>
            <div className='my-footer grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10'>

                <div>
                    <div className='logo-container inline-flex gap-2'>
                        <img src={logo} alt="" className='w-5 md:w-8' />
                        <h1 className='gradient-text text-xl md:text-2xl font-extrabold'>HireSphere</h1>
                    </div>
                    <p className='text-base-300 text-base font-normal mt-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='inline-flex gap-3 mt-5'>
                        <img src={facebook} alt="facebook" className='w-8' />
                        <img src={twitter} alt="twitter" className='w-8' />
                        <img src={instagram} alt="" className='w-8' />
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