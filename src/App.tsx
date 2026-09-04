import { useEffect, useState } from 'react'
import './App.css'
import DogGallery from './DogGallery'

const photo =
  '/assets/images/AgACAgQAAxkBAAMZaprRQtOdHXN1JninfKSyMRi-on8AAvUaaxswodFQRxmIy2cIwbEBAAMCAAN5AAM9BA.jpg'

const loves = [
  { emoji: '🐶', title: 'Собачки', text: 'Лучший друг всегда рядом и обожает обнимашки', link: '#/dog' },
  { emoji: '🎨', title: 'Рисование', text: 'Яркие картинки и разноцветные фломастеры' },
  { emoji: '🎹', title: 'Пианино', text: 'Разучивать новые мелодии на пианино' },
  { emoji: '🎤', title: 'Пение', text: 'Петь любимые песни во весь голос' },
  { emoji: '📚', title: 'Сказки', text: 'Истории про приключения и волшебство' },
  { emoji: '🌈', title: 'Радуга', text: 'Всё яркое, блестящее и разноцветное' },
  { emoji: '🍦', title: 'Мороженое', text: 'Особенно летом, особенно с посыпкой' },
]

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

function App() {
  const hash = useHashRoute()

  if (hash === '#/dog') {
    return <DogGallery />
  }

  return (
    <div className="page">
      <div className="floaties" aria-hidden="true">
        <span>⭐</span>
        <span>🌸</span>
        <span>🐾</span>
        <span>💖</span>
        <span>✨</span>
        <span>🦄</span>
      </div>

      <header className="hero">
        <div className="hero-photo-wrap">
          <img className="hero-photo" src={photo} alt="София обнимает свою собачку" />
        </div>
        <h1>Привет, я София! 👋</h1>
        <p className="subtitle">Мне 9 лет, и это моя страничка ✨</p>
      </header>

      <main>
        <section className="loves">
          <h2>Что я люблю</h2>
          <div className="loves-grid">
            {loves.map((item) => {
              const content = (
                <>
                  <div className="love-emoji">{item.emoji}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </>
              )
              return item.link ? (
                <a className="love-card love-card--link" href={item.link} key={item.title}>
                  {content}
                </a>
              ) : (
                <div className="love-card" key={item.title}>
                  {content}
                </div>
              )
            })}
          </div>
        </section>

        <section className="best-friend">
          <div className="best-friend-card">
            <span className="paw">🐾</span>
            <h2>Мой лучший друг</h2>
            <p>
              Эта пушистая собачка всегда рядом — вместе мы обнимаемся, играем и
              просто хорошо проводим время!
            </p>
          </div>
        </section>

        <section className="talent">
          <div className="talent-card">
            <span className="note">🎵</span>
            <h2>Пою и играю на пианино</h2>
            <p>
              Я обожаю петь песни и разучивать новые мелодии на пианино —
              музыка делает меня самой счастливой! 🎹🎤
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Сделано с любовью 💕 София Гужвинская</p>
      </footer>
    </div>
  )
}

export default App
