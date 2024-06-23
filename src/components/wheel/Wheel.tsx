import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import moment from "moment-jalaali";
import "moment/locale/fa";

interface WheelProps {
  perspective?: string;
  length: number;
  loop?: boolean;
  width: string;
  height: string;
  isDay?: boolean;
  isMonth?: boolean;
  isYear?: boolean;
  currentMonth?: number;
  currentYear?: number;
  onChangeDate: (newValue: string) => void;
  selectedMonth?: number;
  selectedDay?: number;
  selectedYear?: number;
  initialDay?: number;
  initialMonth?: number;
  initialYear?: number;
}

interface Ioption {
  created: (s: { size: number }) => void;
  detailsChanged: (s: { track: { details: string } }) => void;
  dragEnd: (s: {
    moveToIdx: (index: number, bool: boolean) => void;
    track: { details: { rel: number } };
  }) => void;
  initial: number;
  loop: boolean | undefined;
  mode: string;
  rubberband: boolean;
  slides: {
    number: number;
    origin: string;
    perView: number;
  };
  updated: (s: { size: number }) => void;
  vertical: boolean;
  dragSpeed: (val: number) => void;
}

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const persianMonths = [
  { value: "فروردین", number: "1" },
  { value: "اردیبهشت", number: "2" },
  { value: "خرداد", number: "3" },
  { value: "تیر", number: "4" },
  { value: "مرداد", number: "5" },
  { value: "شهریور", number: "6" },
  { value: "مهر", number: "7" },
  { value: "آبان", number: "8" },
  { value: "آذر", number: "9" },
  { value: "دی", number: "10" },
  { value: "بهمن", number: "11" },
  { value: "اسفند", number: "12" },
];

export const WheelComponent: React.FC<WheelProps> = ({
  perspective = "center",
  length,
  loop,
  width,
  height,
  isDay,
  isMonth,
  isYear,
  currentMonth,
  currentYear,
  onChangeDate,
  selectedMonth,
  selectedYear,
  initialDay,
  initialMonth,
  initialYear,
}) => {
  const wheelSize = 20;
  const slideDegree = 360 / wheelSize;
  const slidesPerView = loop ? 9 : 8;
  const size = useRef<number>(360);

  useEffect(() => {
    size.current = 360;
  }, []);

  const options: { current: {} } = useRef<Ioption>({
    slides: {
      number: length || 1,
      origin: loop ? "center" : "auto",
      perView: slidesPerView,
    },
    vertical: true,
    initial: isDay
      ? initialDay! - 1
      : isMonth
      ? initialMonth! - 1
      : isYear
      ? currentYear! - initialYear! + 15
      : 0,
    loop: loop,
    dragSpeed: (val: number) => {
      const height = size.current;
      return (
        val &&
        val *
          (height /
            ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
            slidesPerView)
      );
    },
    created: (s: { size: number }) => {
      size.current = s.size;
    },
    updated: (s: { size: number }) => {
      size.current = s.size;
    },
    detailsChanged: (s: { track: { details: string } }) => {
      setSliderState(s.track.details);
    },
    dragEnd: (slider: any) => {
      const currentSlide = slider.track.details.rel;
      if (currentSlide <= 0) {
        slider.moveToIdx(0, true);
      } else if (currentSlide >= length - 1) {
        slider.moveToIdx(length - 1, true);
      }
    },

    rubberband: !loop,
    mode: "free-snap",
  });

  const [sliderState, setSliderState] = React.useState<any>(null);
  const [sliderRef, slider] = useKeenSlider(options.current);

  const [radius, setRadius] = React.useState(0);

  useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2);
  }, [slider]);

  function slideValues() {
    if (!sliderState) return [];

    const offset = loop ? 1 / 2 - 1 / slidesPerView / 2 : 0;
    const values = [];

    for (let i = 0; i < length; i++) {
      const distance = sliderState
        ? (sliderState.slides?.[i]?.distance - offset) * slidesPerView
        : 0;

      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1;

      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      };

      let value = "";
      let displayValue = "";

      if (isDay) {
        const isLeapYears = isLeapYear(selectedYear!);
        let daysInMonth =
          Number(selectedMonth) >= 6
            ? 30
            : moment.jDaysInMonth(currentYear!, currentMonth!);
        if (isLeapYears && Number(selectedMonth) === 12) {
          daysInMonth = 29;
        }
        value = `${i + 1 <= daysInMonth ? i + 1 : ""}`;
        displayValue = value;
      } else if (isMonth) {
        value = `${i + 1}`;
        displayValue = persianMonths[i]?.value;
      } else if (isYear) {
        value = `${currentYear! - 15 - i}`;
        displayValue = value;
      }

      values.push({ style, value, displayValue });
    }

    return values;
  }

  useEffect(() => {
    if (sliderState) {
      const selectedValue = slideValues()[sliderState.abs];
      if (selectedValue) {
        onChangeDate(selectedValue.value);
      }
    }
  }, [sliderState, onChangeDate]);

  return (
    <div
      style={{
        display: "block",
        color: "#000",
        height: "100%",
        overflow: "visible",
        width: "100%",
        perspectiveOrigin: "calc(50% + 100px) 50%",
        transform: "translateX(10px)",
      }}
      ref={sliderRef}
    >
      <div
        className="wheel__shadow-top"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
          background:
            "linear-gradient(to bottom,rgba(255, 255, 255, 0.9) 0%,rgba(253, 253, 253, 0.1) 100%)",
          left: "0",
          height: "calc(42% + 2px)",
          width: "100%",
          borderBottom: "0.5px solid",
          position: "relative",
          marginTop: "-2px",
          zIndex: "5",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          height: "16%",
          width: "100%",
        }}
        className="wheel__inner"
      >
        <div
          className="wheel__slides"
          style={{
            width: width || "100%",
            height: height || "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            backfaceVisibility: "hidden",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          {slideValues().map(({ style, displayValue }, index) => (
            <div
              className="wheel__slide"
              style={{
                ...style,
                width: width || "100%",
                height: height || "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                backfaceVisibility: "hidden",
                fontSize: "20px",
                fontWeight: "400",
              }}
              key={index}
            >
              <span style={{ textAlign: "center" }}>{displayValue}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="wheel__shadow-bottom"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
          background:
            "linear-gradient(to bottom,rgba(255, 255, 255, 0.9) 0%,rgba(253, 253, 253, 0.1) 100%)",
          left: "0",
          borderTop: "0.5px solid",
          height: "calc(42% + 2px)",
          width: "100%",
          position: "relative",
          marginTop: "2px",
          zIndex: "5",
        }}
      />
    </div>
  );
};
