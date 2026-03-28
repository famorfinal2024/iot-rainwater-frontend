import Menu from './menu.jsx';
import '../styles/menu.css';

function About() {
  return (
    <div>
      <Menu />
      <header>
        <h1>About Smart Irrigation System</h1>
      </header>
      <main>
        <section className="card">
          <h2>Overview</h2>
          <p>IoT-based rainwater harvesting and irrigation system for efficient water management.</p>
        </section>
        <section className="card">
          <h2>Features</h2>
          <ul>
            <li>Automated irrigation scheduling</li>
            <li>Water level monitoring</li>
            <li>Dark mode & settings</li>
            <li>Reports & alerts</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;

