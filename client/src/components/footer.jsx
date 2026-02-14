import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const footer = () => {
  return (
    <motion.div 
    initial={{ opacity:0, y:40}}
    whileInView={{opacity:1, y: 0}}
    transition={{ duration: 0.6}}

    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>

        <motion.div
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-wrap justify-between items-start gap-12 md:gap-8 pb-6 border-borderColor border-b'>
                <div>
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Premium car rental service offering luxury and exotic vehicles for all occasions. Experience the thrill of driving your dream car today!
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                       <a href='#'><img src={assets.facebook_logo} className='w-5 h-5' alt="facebook" /></a>
                       <a href='#'><img src={assets.twitter_logo} alt="twitter" className='w-5 h-5'/></a>
                       <a href='#'><img src={assets.instagram_logo} alt="instagram" className='w-5 h-5'/></a>
                       <a href='#'><img src={assets.gmail_logo} alt="linkedin" className='w-5 h-5'/></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Cars</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2 className='text-base font-medium text-gray-800'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li>1234 Luxury Drive</li>
                        <li>San Francisco, CA 94107</li>
                        <li>+1 234 567890</li>
                        <li>info@example.com</li>
                    </ul>
                </div>

            </motion.div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">CarRental</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li> | </li>
                    <li><a href="#">Terms</a></li>
                    <li> | </li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </motion.div>
  )
}

export default footer
