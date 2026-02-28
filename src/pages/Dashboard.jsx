import { useState } from 'react';
import { systemInfo, alerts } from "../data/systemData";
import "../styles/dashboard.css";
import IrrigationButton from "../components/IrrigationButton";
import SearchBar from "../components/SearchBar.js";
import Menu from "../pages/menu.jsx";
import Set from "../components/set.jsx";

function Dashboard() {
  const [nextIrrigation, setNextIrrigation] = useState(systemInfo.nextIrrigation);
  const [irrigationDays, setIrrigationDays] = useState(systemInfo.irrigationDays);
  const [timesPerDay, setTimesPerDay] = useState(systemInfo.timesPerDay);
  const [irrigationInterval, setIrrigationInterval] = useState(systemInfo.irrigationInterval);
  
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const handleDateChange = (scheduleData) => {
    if (scheduleData.date) {
      const dateObj = new Date(scheduleData.date);
      const formattedDate = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      setNextIrrigation(formattedDate);
    }
    if (scheduleData.irrigationDays) {
      setIrrigationDays(scheduleData.irrigationDays);
    }
    if (scheduleData.timesPerDay) {
      setTimesPerDay(scheduleData.timesPerDay);
    }
    if (scheduleData.irrigationInterval) {
      setIrrigationInterval(scheduleData.irrigationInterval);
    }
  };

  return (
    <>
      <header>
        <img src="/logo192.png" alt="System Logo" className="dash-logo" />
        <h1>Irrigation Dashboard</h1>
      </header>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <div className="menu-container"> <Menu /></div>
      </div>
      <main>
        <section className="card">
          <h2>Water Monitoring</h2>
          <p>Water Level: {systemInfo.waterLevel}</p>
          <p>Tank Status: {systemInfo.tankStatus}</p>
        </section>
        <section className="card">
          <h2>Irrigation Schedule</h2>
          <p>Next Irrigation Date: {nextIrrigation}</p>
          <p>Days to Irrigate: {irrigationDays}</p>
          <p>Times Per Day: {timesPerDay}</p>
          <p>Interval: Every {irrigationInterval} days</p>
          <p>Total Irrigations: {systemInfo.irrigationCount}</p>
          <Set currentDate={nextIrrigation} onDateChange={handleDateChange} />
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
