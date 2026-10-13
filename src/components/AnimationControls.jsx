import { DANCES, SPEEDS } from '../hooks/useAnimation'

export default function AnimationControls({
  isPlaying,
  onToggle,
  dance,
  onDanceChange,
  speedIndex,
  onSpeedChange,
}) {
  return (
    <section className="controls" aria-label="애니메이션 제어">
      <button
        type="button"
        className="play-button"
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        <span aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
        {isPlaying ? '멈추기' : '춤추기'}
      </button>

      <fieldset className="dance-picker">
        <legend>춤 종류</legend>
        <div className="dance-options">
          {DANCES.map((d, i) => (
            <button
              key={d.id}
              type="button"
              className={`dance-option ${dance === d.id ? 'is-active' : ''}`}
              aria-pressed={dance === d.id}
              onClick={() => onDanceChange(d.id)}
            >
              <span aria-hidden="true">{d.emoji}</span>
              {d.label}
              <kbd aria-hidden="true">{i + 1}</kbd>
            </button>
          ))}
        </div>
      </fieldset>

      <label className="speed-control">
        <span>
          속도: <strong>{SPEEDS[speedIndex].label}</strong>
        </span>
        <input
          type="range"
          min="0"
          max={SPEEDS.length - 1}
          step="1"
          value={speedIndex}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          aria-valuetext={SPEEDS[speedIndex].label}
        />
      </label>

      <p className="shortcuts">
        <kbd>Space</kbd> 재생/정지 · <kbd>1</kbd>–<kbd>4</kbd> 춤 선택 ·{' '}
        <kbd>←</kbd>
        <kbd>→</kbd> 속도
      </p>
    </section>
  )
}
