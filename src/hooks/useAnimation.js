import { useState, useCallback } from 'react'

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  return { isPlaying, toggle }
}
