import './App.css'

const photo =
  '/assets/images/AgACAgQAAxkBAAMHaprK4euum9r_9qzDTtFk0uTbNTcAAm8aaxswodFQvoPV4KMuMfsBAAMCAAN5AAM9BA.jpg'

const loves = [
  { emoji: '🐶', title: 'Собачки', text: 'Лучший друг всегда рядом и обожает обнимашки' },
  { emoji: '🎨', title: 'Рисование', text: 'Яркие картинки и разноцветные фломастеры' },
  { emoji: '🎶', title: 'Музыка', text: 'Танцевать и подпевать любимым песням' },
  { emoji: '📚', title: 'Сказки', text: 'Истории про приключения и волшебство' },
  { emoji: '🌈', title: 'Радуга', text: 'Всё яркое, блестящее и разноцветное' },
  { emoji: '🍦', title: 'Мороженое', text: 'Особенно летом, особенно с посыпкой' },
]

function App() {
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
            {loves.map((item) => (
              <div className="love-card" key={item.title}>
                <div className="love-emoji">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
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
      </main>

      <footer className="footer">
        <p>Сделано с любовью 💕 София Гужвинская</p>
      </footer>
    </div>
  )
}

export default App
