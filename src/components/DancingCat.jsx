import catImage from '../assets/images/cat.svg'

export default function DancingCat({ isPlaying, dance, speed, onToggle }) {
  return (
    <div className="stage">
      <div className={`spotlight ${isPlaying ? 'is-on' : ''}`} aria-hidden="true" />
      <button
        type="button"
        className={`cat-button ${isPlaying ? 'is-playing' : 'is-paused'}`}
        style={{ '--speed': speed }}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
      >
        <span className={`cat-dancer dance-${dance}`}>
          <img src={catImage} alt="" className="cat-image" draggable="false" />
        </span>
        <span className="cat-shadow" aria-hidden="true" />
      </button>
      <div className="notes" aria-hidden="true">
        {['♪', '♫', '♬', '♩'].map((note, i) => (
          <span
            key={i}
            className={`note note-${i + 1} ${isPlaying ? 'is-playing' : ''}`}
            style={{ '--speed': speed }}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}
