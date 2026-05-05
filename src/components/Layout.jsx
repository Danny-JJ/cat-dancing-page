export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">🐱 Dancing Cat</h1>
        <p className="subtitle">나만의 댄싱 고양이</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>클릭해서 고양이와 함께 춤춰요! 🎶</p>
      </footer>
    </div>
  )
}
