import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import useThemeSwitcher from './Hooks/useThemeSwitcher'
import { WhatsappIcon, LinkedInIcon, Instagram, GmailIcon, YouTubeIcon } from './Icons'
import { motion } from 'framer-motion'
// import HireMe from './HireMe'


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}



const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light  dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}

export default function Navbar() {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false); // Add state to track scrolling

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  // color="#d7ccbe"
  return (
    <header className='w-full px-32 py-10 bg-transparent font-medium flex items-center md:px-10 justify-end dark:text-light relative z-10 lg:px-16 sm:px-8 sm:fixed'>

      <div className='absolute left-[50%] md:left-5'>
        {isScrolled ? null : <Logo />}
      </div>

      <button className="flex flex-col absolute justify-center  items-center hidden xl:flex" onClick={handleClick}>
  <span
    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0 -translate-y-0.5'}`}
  ></span>
  <span
    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 opacity-${isOpen ? '0' : '1'}`}
  ></span>
  <span
    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${isOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-y-0.5'}`}
  ></span>
</button>




      <div className='w-full flex justify-between items-center xl:hidden'>

        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/#" title="Projects" className='mx-4' />
          <CustomLink href="/##" title="Services" className='mx-4' />
          <CustomLink href="/###" title="Shop" className='mx-4' />
          <CustomLink href="/####" title="Contact" className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://www.linkedin.com/" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><LinkedInIcon /></motion.a>
          <motion.a href="https://www.instagram.com/a2_studioz/" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><Instagram /></motion.a>
          <motion.a href="mailto:a2studio9@gmail.com" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 '><GmailIcon /></motion.a>
          <motion.a href="https://www.youtube.com/channel/UCquit6qdP8Lqjl2RrdPNr2Q?app=desktop" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'><YouTubeIcon /></motion.a>
          <motion.a href="tel:8770606427" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-4'><WhatsappIcon /></motion.a>

        </nav>

      </div>

      {
        isOpen ?



          <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className='min-w-[85vw]  flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 ' onClick={handleClick}>


            <nav className='flex items-center flex-col justify-center'>
              <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
              <CustomMobileLink href="/#" title="Projects" className='' toggle={handleClick} />
              <CustomMobileLink href="/##" title="Services" className='' toggle={handleClick} />
              <CustomMobileLink href="/###" title="Shop" className='' toggle={handleClick} />
              <CustomMobileLink href="/####" title="Contact" className='' toggle={handleClick} />
            </nav>

            <nav className='flex items-center justify-center flex-wrap mt-2'>
              <motion.a href="https://www.linkedin.com/" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1'><LinkedInIcon /></motion.a>
              <motion.a href="https://www.instagram.com/a2_studioz/" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6  mx-3 sm:mx-1 instagram-icon'><Instagram /></motion.a>
              <motion.a href="mailto:a2studio9@gmail.com" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1'><GmailIcon /></motion.a>
              <motion.a href="https://www.youtube.com/channel/UCquit6qdP8Lqjl2RrdPNr2Q?app=desktop" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1'><YouTubeIcon /></motion.a>
              <motion.a href="tel:8770606427" target={'_blank'} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1'><WhatsappIcon /></motion.a>

            </nav>

          </motion.div>
          : null
      }


    </header>
  )
}
