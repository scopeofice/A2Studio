import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
// import AnimateText from '../Components/AnimateText'
import Layout from '@/Components/Layout'
import Image from 'next/image'
// import dp from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
// import Skills from '@/Components/Skills'
// import Experience from '@/Components/Experience'
// import Education from '@/Components/Education'
import TransitionEffect from '@/Components/TransitionEffect';
import ay2 from '../../public/images/profile/aboutme.png'
import ay from '../../public/images/profile/profile.png'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'




const AnimateNumbers = ({value}) =>{

  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{ duration: 3000 });
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue]);

  useEffect(()=>{
    springValue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  },[springValue,value]);

  return <span ref={ref}></span>
}


export default function about() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>A2Studio | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
    

          {/* <AnimateText text=' Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.' 
          className='!text-3xl !-mx-20 -translate-y-40 w-[30%] mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl absolute'/> */}
        <Layout className="pt-8 md:!pt-10 flex flex-col justify-center items-center">
        {/* <Image src={ay2} className='py-8'></Image> */}
        {isMobile ? (
            <Image src={ay} className='' />
          ) : (
            <Image src={ay2} className='mb-12 shadow-lg' />
          )}
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-6 flex flex-col items-start justify-start xl:col-span-8'>
              <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>
              <motion.p initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className='font-medium'>
              Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer. <br /> <br />
I believe everyone needs a comfortable lifestyle. As a designer, I am helping clients to create the best ideas and solutions for space planning to make practical, beautiful, and elegant spaces they use everyday.
</motion.p>
<motion.p initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}}  className='font-medium my-4'>
  
I describe my style as Modern + Artful. A mixture of modern classics and contemporary unique shapes and style of today.
  
</motion.p>
<motion.p initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}}  className='font-medium my-4'>
  
I believe that design is about more than just making things look pretty. it&apos;s about solving problems and
  creating intuitive, enjoyable experiences for users.  
</motion.p>

<motion.div  initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} >

<p className='font-medium my-2'>
We work for INTERIOR DESIGNER, ARCHITECT, CIVIL ENGINEER, BUILDERS, INDIVIDUALS for making clear vision for their clients, we work on both Residential & Commercial projects.
we provide services like- 
</p>
<ul className='font-medium'>
  <li className="flex items-center"><BsArrowRight className='mr-2'/> Interior Consultant </li>
  <li className="flex items-center"><BsArrowRight className='mr-2'/> 3D Rendering / visualization </li>
  <li className="flex items-center"><BsArrowRight className='mr-2'/> 2D-3D Floor Plan. </li>
  <li className="flex items-center"><BsArrowRight className='mr-2'/> 2D-3D designing & concepts. </li>
  <li className="flex items-center"><BsArrowRight className='mr-2'/> Interior –Exterior Design </li>	
</ul>
</motion.div>

            </div>

            {/* <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={dp} alt='Shubham' className='w-full h-auto rounded-2xl'  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50px, 33vw'/>
            </div> */}

            <motion.div initial={{y:50}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimateNumbers value={50}/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center  xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimateNumbers value={40}/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center  xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimateNumbers value={4}/></span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
              </div>
            </motion.div>

          </div>

          {/* <Skills/>
          <Experience/>
          <Education/> */}
        </Layout>
      </main>
    </>
  )
}




