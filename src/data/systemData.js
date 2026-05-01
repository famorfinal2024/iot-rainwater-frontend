const defaultSystemInfo = {
  waterLevel: "80%",
  tankStatus: "Normal",
  nextIrrigation: "March 15, 2026",
  irrigationCount: 4,
  irrigationInterval: 2,
  timesPerDay: 3,
  irrigationDays: 7
};

const SCHEDULE_KEY = 'irrigationSchedule';

export const getSystemInfo = () => {
  const savedSchedule = JSON.parse(localStorage.getItem(SCHEDULE_KEY) || '{}');
  return {
    ...defaultSystemInfo,
    ...savedSchedule
  };
};

export const saveSchedule = (scheduleData) => {
  localStorage.setItem(SCHEDULE_KEY, JSON.stringify(scheduleData));
};

export const alerts = [
  "Water level is stable",
  "Last irrigation successful",
  "Fertilizer mix ready"
];

