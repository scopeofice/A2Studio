import {motion} from "framer-motion"
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import logo from '../../public/images/profile/a2png.png'

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
     <Link href={'/'}>
     <Image className="w-16 text-light flex items-center justify-center border-2 border-solid border-transparent " src={logo} alt="ayushi"></Image>
     </Link>
    </div>
  )
}
