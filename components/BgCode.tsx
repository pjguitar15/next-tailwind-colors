import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { Fira_Code } from 'next/font/google'
const fira = Fira_Code({
  weight: ['400'],
  subsets: ['latin'], // need this to work
})

const BgCode = ({ input, shadeValue, handleUp, handleDown }: any) => {
  return (
    <div className='w-full'>
      <div className='bg-gray-900 inline-block px-10 my-5 rounded-lg border-2 border-zinc-950 select-none'>
        <h6 className={`text-xl my-4 text-white ${fira.className}`}>
          <span className='text-sky-300'>{'<'}</span>
          <span className='text-red-400'>div </span>
          <span className='text-purple-400'>className</span>
          <span className='text-sky-300'>{`='`}</span>
          <span className='relative overflow-visible'>
            bg-{input}
            {input !== 'black' && <>-{shadeValue}00</>}
            <span
              onClick={handleUp}
              className='absolute bottom-7 right-3 text-xl hover:text-sky-400 cursor-pointer hover:scale-105 animation duration-300'
            >
              <FontAwesomeIcon icon={faCircleChevronUp} />
            </span>
            <span
              onClick={handleDown}
              className='absolute -bottom-7 right-3 text-xl hover:text-sky-400 cursor-pointer hover:scale-105 animation duration-300'
            >
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </span>
          </span>
          <span className='text-sky-300'>{`'`}</span>
          <span className='text-sky-300'>{'><'}</span>
          <span className='text-red-400'>div</span>
          <span className='text-sky-300'>{'/>'}</span>
        </h6>
      </div>
    </div>
  )
}

export default BgCode
