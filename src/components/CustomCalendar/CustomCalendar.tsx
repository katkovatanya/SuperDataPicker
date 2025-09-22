import React, { useEffect, useState } from "react";
import { months, weekDays } from "../../shared/constants";
import {
  generateTimeSlots,
  getDaysInMonth,
  getFirstDayOfMonth,
  getYears,
} from "../../shared/utils";
import "./CustomCalendar.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import type { setDateProps } from "../../shared/types";

const CustomCalendar: React.FC<setDateProps> = ({ setDate, date }) => {
  const years = getYears();
  const timeSlots = generateTimeSlots();

  const initialDate = date || new Date();
  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);
  const [selectedTime, setSelectedTime] = useState<string>("00:00");

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIdx = getFirstDayOfMonth(year, month);

  const totalCells = [];
  for (let i = 0; i < firstDayIdx; i++) totalCells.push(null);
  totalCells.push(...daysInMonth);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  };

  useEffect(() => {
    if (date) {
      setYear(date.getFullYear());
      setMonth(date.getMonth());
      setSelectedDate(date);
    }
  }, [date]);

  return (
    <div className="calendar__wrapper">
      <div className="calendar">
        <div className="calendar__nav">
          <button onClick={prevMonth}>
            <FaAngleLeft />
          </button>

          <div>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {months.map((m, i) => (
                <option key={i} value={i}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <button onClick={nextMonth}>
            <FaAngleRight />
          </button>
        </div>

        <div className="calendar__weekdays">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="calendar__days">
          {totalCells.map((date, index) =>
            date ? (
              <div
                key={date.toISOString()}
                onClick={() => {
                  const newDate = new Date(selectedDate || new Date());
                  newDate.setFullYear(year, month, date.getDate());
                  setSelectedDate(newDate);
                  setDate(newDate);
                }}
                className={`calendar-day ${
                  selectedDate &&
                  selectedDate.getFullYear() === date.getFullYear() &&
                  selectedDate.getMonth() === date.getMonth() &&
                  selectedDate.getDate() === date.getDate()
                    ? "calendar-day_selected"
                    : ""
                }`}
              >
                {date.getDate()}
              </div>
            ) : (
              <div key={"empty-" + index} />
            )
          )}
        </div>
      </div>

      <div className="calendar__time">
        <div className="calendar__time-slots">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => {
                const [hours, minutes] = time.split(":").map(Number);
                const newDate = new Date(selectedDate || new Date());
                newDate.setHours(hours, minutes);
                setSelectedTime(time);
                setSelectedDate(newDate);
                setDate(newDate);
              }}
              className={`calendar__time-slot ${
                selectedTime === time ? "calendar__time-slot_active" : ""
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
