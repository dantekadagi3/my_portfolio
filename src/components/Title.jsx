
import '../Styles/title.css';
// Importing motion
import { motion } from 'framer-motion';
// Importing the variants
import { fadeIn } from '../variants';


function Title(){
    return(
        <motion.div 
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        
        className='content'>
        <p>Hello!</p>
        <h1 ><span>I&apos;m</span>Dante</h1>
        <h1>Kadagi</h1>
        <p className='text--white'>Javascript Developer</p>
    

         <div className='buttons'>
         <button>HIRE ME</button>
         <button className='btn--transparent'>MY WORKS</button>
         </div>
         </motion.div>
        
    )
}export default Title;