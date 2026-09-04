import { useEffect, useState } from 'react'
import './DogGallery.css'

const dogPhotos = [
  {
    src: '/assets/images/AgACAgQAAxkBAAMHaprK4euum9r_9qzDTtFk0uTbNTcAAm8aaxswodFQvoPV4KMuMfsBAAMCAAN5AAM9BA.jpg',
    alt: 'София обнимает свою собачку',
  },
  {
    src: '/assets/images/AgACAgQAAxkBAAMXaprQTqwq65KaDiyp7EHIN5Fs__IAAtsaaxswodFQ1ONS_OOqZxcBAAMCAAN4AAM9BA.jpg',
    alt: 'София с собачкой',
  },
]

function DogGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null)
      if (event.key === 'ArrowRight') {
        setOpenIndex((current) => (current === null ? current : (current + 1) % dogPhotos.length))
      }
      if (event.key === 'ArrowLeft') {
        setOpenIndex((current) =>
          current === null ? current : (current - 1 + dogPhotos.length) % dogPhotos.length,
        )
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openIndex])

  return (
    <div className="page dog-page">
      <div className="floaties" aria-hidden="true">
        <span>🐾</span>
        <span>🐶</span>
        <span>❤️</span>
        <span>🐾</span>
        <span>🦴</span>
        <span>✨</span>
      </div>

      <header className="dog-hero">
        <a className="back-link" href="#/">
          ← Назад на главную
        </a>
        <h1>🐶 Собачки</h1>
        <p className="subtitle">Галерея с моими любимыми собачками</p>
      </header>

      <main className="dog-gallery-main">
        {dogPhotos.length === 0 ? (
          <p className="dog-gallery-empty">Скоро тут появятся фото 🐾</p>
        ) : (
          <div className="dog-gallery-grid">
            {dogPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                className="dog-gallery-item"
                onClick={() => setOpenIndex(index)}
              >
                <img src={photo.src} alt={photo.alt} />
              </button>
            ))}
          </div>
        )}
      </main>

      {openIndex !== null && (
        <div className="dog-lightbox" onClick={() => setOpenIndex(null)}>
          <button
            type="button"
            className="dog-lightbox-close"
            onClick={() => setOpenIndex(null)}
            aria-label="Закрыть"
          >
            ✕
          </button>
          {dogPhotos.length > 1 && (
            <>
              <button
                type="button"
                className="dog-lightbox-nav dog-lightbox-prev"
                onClick={(event) => {
                  event.stopPropagation()
                  setOpenIndex((current) =>
                    current === null ? current : (current - 1 + dogPhotos.length) % dogPhotos.length,
                  )
                }}
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                type="button"
                className="dog-lightbox-nav dog-lightbox-next"
                onClick={(event) => {
                  event.stopPropagation()
                  setOpenIndex((current) => (current === null ? current : (current + 1) % dogPhotos.length))
                }}
                aria-label="Следующее фото"
              >
                ›
              </button>
            </>
          )}
          <img
            className="dog-lightbox-image"
            src={dogPhotos[openIndex].src}
            alt={dogPhotos[openIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <footer className="footer">
        <p>Сделано с любовью 💕 София Гужвинская</p>
      </footer>
    </div>
  )
}

export default DogGallery
