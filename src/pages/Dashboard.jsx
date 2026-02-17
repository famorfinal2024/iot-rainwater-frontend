import React from 'react';
import '../styles/dashboard.css';
import { systemData, alerts } from '../data/systemData';

function Dashboard() {
  return (
    <div>
      <header>
        <h1>IoT Rainwater Utilization System</h1>
      </header>

      <main>
        <section>
          <h2>System Status</h2>
          <p>Tank Level: {systemData.tankLevel}</p>
          <p>Pump Status: {systemData.pumpStatus}</p>
          <p>Rainfall Today: {systemData.rainfallToday}</p>
        </section>

        <section>
          <h2>System Alerts</h2>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2026 IoT Rainwater Monitoring</p>
      </footer>
    </div>
  );
}

export default Dashboard;
