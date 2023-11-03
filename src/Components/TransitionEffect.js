import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionEffect() {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-tangrin'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        exit={{x:["0%, 100%"], width:["0%, 100%"]}}
        transition={{duration:0.5, ease:"easeInOut"}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gre'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{delay:0.2, duration:0.5, ease:"easeInOut"}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-greyy'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{delay:0.4, duration:0.5, ease:"easeInOut"}}
      />
    </>
  )
}
//color="#ef945d"color="#ae9d87"color="#d7ccbe"