import Menu from './menu.jsx';
import '../styles/menu.css';

function Help() {
  return (
    <div>
      <Menu />
      <header>
        <h1>Help & Support</h1>
      </header>
      <main>
        <section className="card">
          <h2>FAQ</h2>
          <p>Q: How to set irrigation schedule? A: Use Dashboard > Set Schedule.</p>
          <p>Q: How to toggle dark mode? A: Settings panel.</p>
        </section>
        <section className="card">
          <h2>Contact</h2>
          <p>Email: support@irrigation.com</p>
        </section>
      </main>
    </div>
  );
}

export default Help;

