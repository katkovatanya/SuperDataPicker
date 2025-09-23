export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 2011; y <= currentYear + 10; y++) years.push(y);
  return years;
};

export const getDaysInMonth = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

export const generateTimeSlots = (): string[] => {
  const times: string[] = [];
  for (let h = 0; h < 24; h++) {
    times.push(`${h.toString().padStart(2, "0")}:00`);
    times.push(`${h.toString().padStart(2, "0")}:30`);
  }
  return times;
};
