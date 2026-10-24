import { useEffect, useState } from 'react'
import './PortfolioPage.css'

interface PortfolioItem {
  id: string
  src: string
  title: string
  description?: string
  alt: string
}

const portfolioPhotos: PortfolioItem[] = [
  {
    id: 'photo-1',
    src: '/assets/images/AgACAgQAAxkBAAM_atyEiYWvbVKEpMsTFdDYtmsF3vgAAngPaxuBSOhSLS6O934ZYFwBAAMCAAN5AAM9BA.jpg',
    title: 'Аквагрим «Волшебный аватар»',
    description: 'Это я всё сделала ✨',
    alt: 'София с волшебным сине-голубым аквагримом — это я всё сделала',
  },
]

function PortfolioPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null)
      if (event.key === 'ArrowRight') {
        setOpenIndex((current) =>
          current === null ? current : (current + 1) % portfolioPhotos.length,
        )
      }
      if (event.key === 'ArrowLeft') {
        setOpenIndex((current) =>
          current === null
            ? current
            : (current - 1 + portfolioPhotos.length) % portfolioPhotos.length,
        )
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openIndex])

  return (
    <div className="page portfolio-page">
      <div className="floaties" aria-hidden="true">
        <span>🎨</span>
        <span>✨</span>
        <span>🖌️</span>
        <span>💖</span>
        <span>⭐</span>
        <span>🎭</span>
      </div>

      <header className="portfolio-hero">
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
        <h1>🎨 Портфолио</h1>
        <p className="subtitle">Мои творческие работы, рисунки и образы ✨</p>
      </header>

      <main className="portfolio-main">
        {portfolioPhotos.length === 0 ? (
          <p className="portfolio-empty">Скоро здесь появятся мои работы 🎨✨</p>
        ) : (
          <div className="portfolio-grid">
            {portfolioPhotos.map((item, index) => (
              <div key={item.id} className="portfolio-card">
                <button
                  type="button"
                  className="portfolio-card-image-btn"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Открыть фото «${item.title}» во весь экран`}
                >
                  <img src={item.src} alt={item.alt} />
                </button>
                <div className="portfolio-card-info">
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {openIndex !== null && (
        <div
          className="portfolio-lightbox"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="portfolio-lightbox-close"
            onClick={() => setOpenIndex(null)}
            aria-label="Закрыть"
          >
            ✕
          </button>
          {portfolioPhotos.length > 1 && (
            <>
              <button
                type="button"
                className="portfolio-lightbox-nav portfolio-lightbox-prev"
                onClick={(event) => {
                  event.stopPropagation()
                  setOpenIndex((current) =>
                    current === null
                      ? current
                      : (current - 1 + portfolioPhotos.length) % portfolioPhotos.length,
                  )
                }}
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                type="button"
                className="portfolio-lightbox-nav portfolio-lightbox-next"
                onClick={(event) => {
                  event.stopPropagation()
                  setOpenIndex((current) =>
                    current === null ? current : (current + 1) % portfolioPhotos.length,
                  )
                }}
                aria-label="Следующее фото"
              >
                ›
              </button>
            </>
          )}
          <div
            className="portfolio-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="portfolio-lightbox-image"
              src={portfolioPhotos[openIndex].src}
              alt={portfolioPhotos[openIndex].alt}
            />
            <div className="portfolio-lightbox-caption">
              <h3>{portfolioPhotos[openIndex].title}</h3>
              {portfolioPhotos[openIndex].description && (
                <p>{portfolioPhotos[openIndex].description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>Сделано с любовью 💕 София Гужвинская</p>
      </footer>
    </div>
  )
}

export default PortfolioPage
