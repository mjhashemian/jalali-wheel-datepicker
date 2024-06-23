import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";
import { WheelComponent } from "../wheel";

interface CustomJalaliCalendarProps {
  onDateChange?: (date: string) => void;
}

export const CustomJalaliCalendar: React.FC<CustomJalaliCalendarProps> = ({
  onDateChange,
}) => {
  const [updateWheel, setUpdateWheel] = React.useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("1");
  const [selectedMonth, setSelectedMonth] = useState<string>("1");
  const [selectedYear, setSelectedYear] = useState<string>(
    moment().jYear().toString()
  );

  useEffect(() => {
    setTimeout(() => {
      setUpdateWheel(true);
    }, 500);
  }, []);

  const handleDayChange = (newDay: string) => {
    setSelectedDay(newDay);
  };

  const handleMonthChange = (newMonth: string) => {
    setSelectedMonth(newMonth);
  };

  const handleYearChange = (newYear: string) => {
    setSelectedYear(newYear);
  };

  useEffect(() => {
    const formattedDate = `${selectedYear}/${selectedMonth}/${selectedDay}`;
    if (onDateChange) {
      onDateChange(formattedDate);
    }
  }, [selectedDay, selectedMonth, selectedYear, onDateChange]);

  const daysInMonth = moment
    .jDaysInMonth(parseInt(selectedYear), parseInt(selectedMonth))
    .toString();

  let lengthNumber;
  if (parseInt(daysInMonth) === 31) {
    lengthNumber = 38;
  } else if (parseInt(daysInMonth) === 29) {
    lengthNumber = 36;
  } else {
    lengthNumber = 37;
  }
  return (
    <div
      style={{
        height: "240px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "240px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {updateWheel && (
          <WheelComponent
            length={lengthNumber}
            loop={false}
            isDay={true}
            selectedDay={Number(selectedDay)}
            selectedMonth={Number(selectedMonth)}
            selectedYear={Number(selectedYear)}
            currentYear={parseInt(selectedYear)}
            currentMonth={moment().jMonth()}
            width="30%"
            height="300px"
            onChangeDate={handleDayChange}
            initialDay={Number(selectedDay)}
          />
        )}
      </div>
      <div
        style={{
          width: "40%",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {updateWheel && (
          <WheelComponent
            length={19} // You can adjust this as needed
            loop={false}
            isMonth={true}
            selectedMonth={Number(selectedMonth)}
            selectedDay={Number(selectedDay)}
            selectedYear={Number(selectedYear)}
            currentYear={parseInt(selectedYear)}
            currentMonth={moment().jMonth()}
            onChangeDate={handleMonthChange}
            width="30%"
            height="300px"
            initialMonth={Number(selectedMonth)}
          />
        )}
      </div>
      <div
        style={{
          width: "30%",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {updateWheel && (
          <WheelComponent
            length={100}
            loop={false}
            isYear={true}
            selectedDay={Number(selectedDay)}
            selectedMonth={Number(selectedMonth)}
            selectedYear={Number(selectedYear)}
            currentYear={moment().jYear()}
            onChangeDate={handleYearChange}
            width="30%"
            height="300px"
            initialYear={Number(selectedYear)}
          />
        )}
      </div>
    </div>
  );
};
