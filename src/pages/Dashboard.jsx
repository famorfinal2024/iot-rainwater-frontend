import { systemInfo, alerts } from "../data/systemData";
import "../styles/dashboard.css";
import IrrigationButton from "../components/IrrigationButton";

function Dashboard() {
  return (
    <>
      <header>
      
        <h1>IoT Rainwater Irrigation Dashboard</h1>
      </header>
      <main>
        <section className="card">
          <h2>Water Monitoring</h2>
          <p>Water Level: {systemInfo.waterLevel}</p>
          <p>Tank Status: {systemInfo.tankStatus}</p>
        </section>
        <section className="card">
          <h2>Irrigation Schedule</h2>
          <p>Next Irrigation Date: {systemInfo.nextIrrigation}</p>
          <p>Total Irrigations: {systemInfo.irrigationCount}</p>
        </section>
        <section className="card">
          <h2>System Alerts</h2>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </section>
        <IrrigationButton />
      </main>
      <footer>
        <p>© 2026 Smart Irrigation System</p>
      </footer>
    </>
  );
}

export default Dashboard;
