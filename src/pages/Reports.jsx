import Menu from './menu.jsx';
import '../styles/menu.css'; // Reuse styles

function Reports() {
  return (
    <div>
      <Menu />
      <header>
        <h1>Reports</h1>
      </header>
      <main>
        <section className="card">
          <h2>Irrigation Reports</h2>
          <p>Recent irrigation logs and charts would go here.</p>
          <ul>
            <li>2026-03-15: 3 sessions, 80L used</li>
            <li>2026-03-13: 2 sessions, 60L used</li>
          </ul>
        </section>
        <section className="card">
          <h2>Water Usage Summary</h2>
          <p>Total this month: 500L</p>
        </section>
      </main>
    </div>
  );
}

export default Reports;

