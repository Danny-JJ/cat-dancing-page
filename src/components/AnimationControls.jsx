export default function AnimationControls({ isPlaying, onToggle }) {
  return (
    <div className="controls">
      <button
        className={`control-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-text">{isPlaying ? '정지' : '춤춰!'}</span>
      </button>
      <p className="status-text">
        {isPlaying ? '고양이가 신나게 춤추는 중... 🎵' : '고양이가 쉬고 있어요 😴'}
      </p>
    </div>
  )
}
