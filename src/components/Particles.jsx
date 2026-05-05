const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 4,
  opacity: Math.random() * 0.5 + 0.2,
}))

export default function Particles({ isPlaying }) {
  return (
    <div className={`particles ${isPlaying ? 'active' : ''}`} aria-hidden="true">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: isPlaying ? p.opacity : 0,
          }}
        />
      ))}
    </div>
  )
}
