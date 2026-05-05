import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

export default function DancingCat({ isPlaying, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="dancing-cat-wrapper">
      <div
        className={`cat-container ${isPlaying ? 'dancing' : 'paused'}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '고양이 클릭하여 정지' : '고양이 클릭하여 춤추기 시작'}
      >
        <img
          src={catSvg}
          alt="Dancing cat"
          className="cat-image"
          draggable={false}
        />
        <div className={`music-notes ${isPlaying ? 'visible' : ''}`}>
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♩</span>
          <span className="note note-4">♬</span>
        </div>
      </div>
      <div className={`shadow ${isPlaying ? 'dancing-shadow' : ''}`} />
    </div>
  )
}
