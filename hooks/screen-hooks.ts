'use client'
import { useState, useEffect } from 'react'

const useScreenSize = () => {
  const [mount, setmount] = useState(false)
  useEffect(() => {
    setmount(true)
  }, [])
  const [screenSize, setScreenSize] = useState({
    width: typeof window === 'undefined' ? 800 : window.innerWidth,
    height: typeof window === 'undefined' ? 800 : window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  if (!mount) return { width: 800, height: 800 }

  return screenSize
}

export default useScreenSize
