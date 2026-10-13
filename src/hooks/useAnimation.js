import { useCallback, useEffect, useState } from 'react'

export const DANCES = [
  { id: 'groove', label: '그루브', emoji: '🎵' },
  { id: 'jump', label: '점프', emoji: '⬆️' },
  { id: 'spin', label: '빙글빙글', emoji: '🌀' },
  { id: 'wiggle', label: '흔들흔들', emoji: '〰️' },
]

export const SPEEDS = [
  { value: 0.5, label: '느리게' },
  { value: 1, label: '보통' },
  { value: 1.5, label: '빠르게' },
  { value: 2, label: '신나게' },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion())
  const [dance, setDance] = useState(DANCES[0].id)
  const [speedIndex, setSpeedIndex] = useState(1)

  const toggle = useCallback(() => setIsPlaying((p) => !p), [])
  const faster = useCallback(
    () => setSpeedIndex((i) => Math.min(i + 1, SPEEDS.length - 1)),
    [],
  )
  const slower = useCallback(() => setSpeedIndex((i) => Math.max(i - 1, 0)), [])

  // 키보드 단축키: Space/Enter(고양이 외부) 재생 토글, 1~4 춤 선택, ←/→ 속도 조절
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      const tag = e.target.tagName
      const onControl = tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT'

      if (e.key === ' ' && !onControl) {
        e.preventDefault()
        toggle()
      } else if (/^[1-4]$/.test(e.key)) {
        setDance(DANCES[Number(e.key) - 1].id)
        setIsPlaying(true)
      } else if (e.key === 'ArrowRight' && tag !== 'INPUT') {
        faster()
      } else if (e.key === 'ArrowLeft' && tag !== 'INPUT') {
        slower()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle, faster, slower])

  return {
    isPlaying,
    toggle,
    dance,
    setDance,
    speed: SPEEDS[speedIndex],
    speedIndex,
    setSpeedIndex,
    faster,
    slower,
  }
}
