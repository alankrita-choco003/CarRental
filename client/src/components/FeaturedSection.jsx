import React from 'react'
import Title from './Title'
import CarCard from './CarCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const FeaturedSection = () => {

    const navigate = useNavigate()
    const {cars} = useAppContext()

  return (
    <motion.div 
    initial={{ opacity:0, y:40}}
    whileInView={{ opacity:1, y:0 }}
    transition={{ duration: 1, delay: 0.5 }}
    
    className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <motion.div
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Title title="Featured Cars" subtitle="Discover our featured car collection" align="center" />
        </motion.div>
    
            <motion.div 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration: 0.5, duration: 1}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-18'>
                {
                    cars.slice(0,6).map((car) => (
                        <motion.div key={car._id}
                        initial={{ opacity: 0, scale: 0.95}}
                        whileInView={{ opacity:1, scale:1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <CarCard car={car}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        
        <motion.button
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={() => { 
            navigate('/cars'); scrollTo(0, 0) 
        }}
            className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
            EXPLORE ALL CARS <img src={assets.addIcon} alt="arrow" />
        </motion.button>
      
    </motion.div>
  )
}

export default FeaturedSection
