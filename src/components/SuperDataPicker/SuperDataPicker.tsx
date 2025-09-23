import { CiCalendar } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuMoveRight } from "react-icons/lu";
import "./SuperDataPicker.css";
import { useRef, useState } from "react";
import EndPointSelect from "../EndPointSelect/EndPointSelect";
import { useStore } from "../../store/store";
import { QuickSelect } from "../QuickSelect/QuickSelect";

function SuperDataPicker() {
  const { start, end, setStart, setEnd } = useStore();
  const [activeDropdown, setActiveDropdown] = useState<
    "calendar" | "start" | "end" | null
  >(null);
  const [dropdownPosition, setDropdownPosition] = useState<number>(0);

  const calendarButtonRef = useRef<HTMLButtonElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const endButtonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = (dropdown: "calendar" | "start" | "end") => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      return;
    }

    let buttonRef;
    switch (dropdown) {
      case "calendar":
        buttonRef = calendarButtonRef;
        break;
      case "start":
        buttonRef = startButtonRef;
        break;
      case "end":
        buttonRef = endButtonRef;
        break;
    }

    if (buttonRef?.current && calendarButtonRef?.current) {
      if (dropdown === "calendar") {
        setDropdownPosition(0);
      } else {
        const startComponent =
          calendarButtonRef.current.getBoundingClientRect().left;
        const rect = buttonRef.current.getBoundingClientRect();
        const left = rect.left - startComponent;
        setDropdownPosition(left);
      }
    }

    setActiveDropdown(dropdown);
  };

  return (
    <div className="sdp">
      <div className="sdp__wrapper">
        <button
          className="calendar__button"
          onClick={() => toggleDropdown("calendar")}
          ref={calendarButtonRef}
        >
          <CiCalendar /> <MdKeyboardArrowDown />
        </button>
        <button
          className="interval__button"
          onClick={() => toggleDropdown("start")}
          ref={startButtonRef}
        >{`${start.toLocaleString()}`}</button>
        <LuMoveRight />
        <button
          className="interval__button"
          onClick={() => toggleDropdown("end")}
          ref={endButtonRef}
        >{`${end.toLocaleString()}`}</button>
      </div>
      <div
        className={`dropdown-menu ${
          activeDropdown === "calendar" ? "dropdown-menu_open" : ""
        }`}
        style={{
          left: dropdownPosition,
        }}
      >
        <QuickSelect setStart={setStart} setEnd={setEnd} />
      </div>
      <div
        className={`dropdown-menu ${
          activeDropdown === "start" ? "dropdown-menu_open" : ""
        }`}
        style={{
          left: dropdownPosition,
        }}
      >
        <EndPointSelect date={start} setDate={setStart} label="Start date" />
      </div>
      <div
        className={`dropdown-menu ${
          activeDropdown === "end" ? "dropdown-menu_open" : ""
        }`}
        style={{
          left: dropdownPosition,
        }}
      >
        <EndPointSelect date={end} setDate={setEnd} label="End date" />
      </div>
    </div>
  );
}

export { SuperDataPicker };
