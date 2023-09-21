'use client'

import { useState, useEffect } from 'react'
import { allTailwindColors } from '@/_data/TailwindBgObject'
import { Inter, Fira_Code } from 'next/font/google'
import BgCode from '@/components/BgCode'

export default function Home() {
  const [input, setInput] = useState('blue')
  const [shadeValue, setShadeValue] = useState(8)
  const [assignedBgColor, setAssignedBgColor] = useState('')

  useEffect(() => {
    const selectedColor = allTailwindColors.find(
      (item) => item.name === input.toLowerCase()
    )

    if (selectedColor) {
      setAssignedBgColor(selectedColor.shade[shadeValue - 1])
    } else {
      setAssignedBgColor('black')
    }
  }, [input, shadeValue])

  const handleUp = () => {
    if (shadeValue < 9) {
      setShadeValue(shadeValue + 1)
    }
  }

  const handleDown = () => {
    if (shadeValue > 1) {
      setShadeValue(shadeValue - 1)
    }
  }

  return (
    <main
      className={`h-screen pb-36 text-white flex items-center`}
      style={{
        backgroundColor: `${
          assignedBgColor && input ? assignedBgColor : 'black'
        }`,
      }}
    >
      <div className='container mx-auto text-center pt-5'>
        <h1
          className={`text-5xl mb-5 ${
            shadeValue <= 3 ? 'text-black' : 'text-white'
          }`}
        >
          Backgrounds in TailwindCSS
        </h1>
        <p className={`${shadeValue <= 3 ? 'text-zinc-900' : 'text-zinc-200'}`}>
          Type the color below. Adjust the color shade by clicking on the
          up/down arrow.
        </p>

        <BgCode
          input={input}
          shadeValue={shadeValue}
          handleUp={handleUp}
          handleDown={handleDown}
        />
        <input
          value={input.toLowerCase()}
          onChange={(e) => setInput(e.target.value)}
          className='px-3 py-3 w-2/6 mx-auto text-black text-center rounded outline-none'
          type='text'
          placeholder='Enter a color'
        />
      </div>
    </main>
  )
}
