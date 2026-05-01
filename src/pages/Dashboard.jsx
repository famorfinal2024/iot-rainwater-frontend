import { useState, useEffect } from 'react';
import "../styles/dashboard.css";
import IrrigationButton from "../components/IrrigationButton";
import SearchBar from "../components/SearchBar.js";
import Menu from "../pages/menu.jsx";
import Set from "../components/set.jsx";

function Dashboard() {
  const [systemInfoData, setSystemInfoData] = useState({
    waterLevel: "Loading...",
    tankStatus: "Loading...",
    irrigationCount: 0,
  });
  
  const [waterLevel, setWaterLevel] = useState("Loading...");
  const [tankStatus, setTankStatus] = useState("Loading...");
  const [alerts, setAlerts] = useState([]);
  const [nextIrrigation, setNextIrrigation] = useState("Loading...");
  const [irrigationDays, setIrrigationDays] = useState(0);
  const [timesPerDay, setTimesPerDay] = useState(0);
  const [irrigationInterval, setIrrigationInterval] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchSystemInfo = () => {
    fetch("http://127.0.0.1:8000/api/systeminfo/")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const latestInfo = data[data.length - 1];

          setSystemInfoData({
            waterLevel: latestInfo.water_level,
            tankStatus: latestInfo.tank_status,
            irrigationCount: latestInfo.irrigation_count || 0,
          });

          setLoading(false);
        } else {
          setLoading(true);
        }
      })
      .catch(error => {
        console.error(error);
        setError("Failed to load system data");
        setLoading(false);
      });
  };

  const fetchSchedule = () => {
    fetch("http://127.0.0.1:8000/api/schedule/")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const latestSchedule = data[data.length - 1];

          const formattedDate = new Date(latestSchedule.date).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          setNextIrrigation(formattedDate);
          setIrrigationDays(latestSchedule.irrigation_days);
          setTimesPerDay(latestSchedule.times_per_day);
          setIrrigationInterval(latestSchedule.irrigation_interval || 0);
        }
      })
  };

  // Initial load
  fetchSystemInfo();

  // Static alerts
  setAlerts([
    "Water level is stable",
    "Last irrigation successful",
    "Fertilizer mix ready"
  ]);

  // Auto refresh every 5 seconds
  const interval = setInterval(() => {
    fetchSystemInfo();
  }, 1000);

  return () => clearInterval(interval);

}, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const results = [
        { title: 'Water Level', desc: String(systemInfoData.waterLevel || 'N/A') },
        { title: 'Tank Status', desc: String(systemInfoData.tankStatus || 'N/A') },
        { title: 'Next Irrigation', desc: String(nextIrrigation || 'N/A') },
        { title: 'Irrigation Days', desc: String(irrigationDays || 'N/A') },
        { title: 'Times Per Day', desc: String(timesPerDay || 'N/A') },
      ].filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (results.length > 0) {
        alert(`Found ${results.length} results:\n${results.map(r => `${r.title}: ${r.desc}`).join('\n')}`);
      } else {
        alert('No results found.');
      }
    }
  };

  const handleDateChange = (scheduleData) => {
    if (scheduleData.date) {
      const formattedDate = new Date(scheduleData.date).toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      );
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

  if (loading) return <p>Loading system data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <header>
        <img src="/logo192.png" alt="System Logo" className="dash-logo" />
        <h1>Irrigation Dashboard</h1>
      </header>

      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <div className="menu-container">
          <Menu />
        </div>
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

          <Set
            currentDate={nextIrrigation}
            onDateChange={handleDateChange}
          />
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