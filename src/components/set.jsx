import { useState } from 'react';
import '../styles/set.css';

function Set({ currentDate, onDateChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [irrigationDays, setIrrigationDays] = useState(7);
  const [timesPerDay, setTimesPerDay] = useState(3);
  const [irrigationInterval, setIrrigationInterval] = useState(2);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    onDateChange({
      date: selectedDate,
      irrigationDays: irrigationDays,
      timesPerDay: timesPerDay,
      irrigationInterval: irrigationInterval
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="set-button" onClick={handleOpenModal}>
        Set Schedule
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Set Irrigation Schedule</h3>
            
            <div className="form-group">
              <label>Next Irrigation Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-input"
              />
            </div>

            <div className="form-group">
              <label>Number of Days to Irrigate:</label>
              <input
                type="number"
                min="1"
                max="30"
                value={irrigationDays}
                onChange={(e) => setIrrigationDays(parseInt(e.target.value))}
                className="number-input"
              />
            </div>

            <div className="form-group">
              <label>Times Per Day:</label>
              <select
                value={timesPerDay}
                onChange={(e) => setTimesPerDay(parseInt(e.target.value))}
                className="select-input"
              >
                <option value="1">1 time per day</option>
                <option value="2">2 times per day</option>
                <option value="3">3 times per day</option>
                <option value="4">4 times per day</option>
                <option value="5">5 times per day</option>
                <option value="6">6 times per day</option>
              </select>
            </div>

            <div className="form-group">
              <label>Interval (days between irrigation cycles):</label>
              <input
                type="number"
                min="1"
                max="30"
                value={irrigationInterval}
                onChange={(e) => setIrrigationInterval(parseInt(e.target.value))}
                className="number-input"
              />
            </div>

            <div className="modal-buttons">
              <button onClick={handleSave} className="save-button">Save</button>
              <button onClick={handleCloseModal} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Set;
