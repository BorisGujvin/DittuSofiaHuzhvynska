import { useEffect, useRef } from 'react'
import './TestPage.css'

function TestPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, 240, 240)
    ctx.beginPath()
    ctx.arc(120, 120, 100, 0, Math.PI * 2)
    ctx.fillStyle = '#22c55e'
    ctx.fill()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#16a34a'
    ctx.stroke()
  }, [])

  return (
    <div className="page test-page">
      <div className="floaties" aria-hidden="true">
        <span>🟢</span>
        <span>✨</span>
        <span>🌿</span>
        <span>💚</span>
        <span>⭐</span>
        <span>🍀</span>
      </div>

      <header className="test-hero">
        <a
          className="back-link"
          href="#/"
          onClick={(e) => {
            if (window.location.pathname !== '/' && window.location.pathname !== '') {
              e.preventDefault()
              window.location.href = '/'
            }
          }}
        >
          ← Назад на главную
        </a>
        <h1>Тест</h1>
        <p className="subtitle">Страница с зелёным кругом ✨</p>
      </header>

      <main className="test-main">
        <div className="test-card">
          <div
            className="green-circle"
            id="green-circle"
            role="img"
            aria-label="Зелёный круг"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="green-circle-svg"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="#22c55e"
                stroke="#16a34a"
                strokeWidth="4"
              />
            </svg>
          </div>
          <canvas
            ref={canvasRef}
            width={240}
            height={240}
            style={{ display: 'none' }}
            aria-hidden="true"
          />
          <p className="circle-label">Зелёный круг 🟢</p>
        </div>
      </main>

      <footer className="footer">
        <p>Сделано с любовью 💕 София Гужвинская</p>
      </footer>
    </div>
  )
}

export default TestPage
