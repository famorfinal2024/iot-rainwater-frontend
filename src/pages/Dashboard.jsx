import { useState, useEffect } from 'react';
import { getSystemInfo, alerts } from "../data/systemData";
import "../styles/dashboard.css";
import IrrigationButton from "../components/IrrigationButton";
import SearchBar from "../components/SearchBar.js";
import Menu from "../pages/menu.jsx";
import Set from "../components/set.jsx";

function Dashboard() {
  const systemInfoData = getSystemInfo();
  const [nextIrrigation, setNextIrrigation] = useState(systemInfoData.nextIrrigation);
  const [irrigationDays, setIrrigationDays] = useState(systemInfoData.irrigationDays);
  const [timesPerDay, setTimesPerDay] = useState(systemInfoData.timesPerDay);
  const [irrigationInterval, setIrrigationInterval] = useState(systemInfoData.irrigationInterval);

  useEffect(() => {
    const systemInfoData = getSystemInfo();
    setNextIrrigation(systemInfoData.nextIrrigation);
    setIrrigationDays(systemInfoData.irrigationDays);
    setTimesPerDay(systemInfoData.timesPerDay);
    setIrrigationInterval(systemInfoData.irrigationInterval);
  }, []);
  
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const systemData = getSystemInfo();
      const results = [
        { title: 'Water Level', desc: String(systemData.waterLevel || 'N/A'), key: 'water' },
        { title: 'Tank Status', desc: String(systemData.tankStatus || 'N/A'), key: 'tank' },
        { title: 'Next Irrigation', desc: String(systemData.nextIrrigation || 'N/A'), key: 'irrigation' },
        { title: 'Irrigation Days', desc: String(systemData.irrigationDays || 'N/A'), key: 'days' },
        { title: 'Times Per Day', desc: String(systemData.timesPerDay || 'N/A'), key: 'times' },
        { title: 'Interval', desc: String(systemData.irrigationInterval || 'N/A'), key: 'interval' }
      ].filter(item => item.title.toLowerCase().includes(searchTerm) || item.desc.toLowerCase().includes(searchTerm));
      console.log('Search results:', results);
      if (results.length > 0) {
        alert(`Found ${results.length} results:\n${results.map(r => `${r.title}: ${r.desc}`).join('\n')}`);
      } else {
        alert('No results found.');
      }
    }
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
          <p>Water Level: {systemInfoData.waterLevel}</p>
          <p>Tank Status: {systemInfoData.tankStatus}</p>
        </section>
        <section className="card">
          <h2>Irrigation Schedule</h2>
          <p>Next Irrigation Date: {nextIrrigation}</p>
          <p>Days to Irrigate: {irrigationDays}</p>
          <p>Times Per Day: {timesPerDay}</p>
          <p>Interval: Every {irrigationInterval} days</p>
          <p>Total Irrigations: {systemInfoData.irrigationCount}</p>
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

