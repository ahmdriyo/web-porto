import Photo from '@/components/Photo'
import Socials from '@/components/Socials'
import Stats from '@/components/Stats'
import TextDetail from '@/components/TextDetail'
import TextMotion from '@/components/TextMotion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FiDownload } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div>
      <div className=" container mx-auto h-full pt-20 mt-[-110px]">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TextMotion />
            <TextDetail/>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2 border-2"
              >
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1i1X0Jbc-DlWqEx_a2-94az6TDQNcSk_c/view?usp=sharing"
                >
                  Download CV
                </Link>
                <FiDownload className=" text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  )
}

export default HomePage