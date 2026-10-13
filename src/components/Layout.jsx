export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          춤추는 고양이 <span aria-hidden="true">🐾</span>
        </h1>
        <p>고양이를 클릭하면 춤을 시작하거나 멈춰요</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">Made with React &amp; CSS keyframes</footer>
    </div>
  )
}
