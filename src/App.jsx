import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import Particles from './components/Particles'
import { useAnimation } from './hooks/useAnimation'
import './styles/animations.css'

function App() {
  const { isPlaying, toggle } = useAnimation()

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toggle])

  return (
    <>
      <Particles isPlaying={isPlaying} />
      <Layout>
        <DancingCat isPlaying={isPlaying} onToggle={toggle} />
        <AnimationControls isPlaying={isPlaying} onToggle={toggle} />
        <p className="keyboard-hint">스페이스바로도 제어할 수 있어요</p>
      </Layout>
    </>
  )
}

export default App
