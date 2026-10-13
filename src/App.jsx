import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { DANCES, useAnimation } from './hooks/useAnimation'

export default function App() {
  const { isPlaying, toggle, dance, setDance, speed, speedIndex, setSpeedIndex } =
    useAnimation()
  const danceLabel = DANCES.find((d) => d.id === dance)?.label

  return (
    <Layout>
      <DancingCat
        isPlaying={isPlaying}
        dance={dance}
        speed={speed.value}
        onToggle={toggle}
      />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        dance={dance}
        onDanceChange={setDance}
        speedIndex={speedIndex}
        onSpeedChange={setSpeedIndex}
      />
      <p className="visually-hidden" aria-live="polite">
        {isPlaying
          ? `고양이가 ${danceLabel} 춤을 ${speed.label} 추고 있어요`
          : '고양이가 쉬고 있어요'}
      </p>
    </Layout>
  )
}
