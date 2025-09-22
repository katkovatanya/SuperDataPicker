import React, { useState } from "react";
import "./EndPointSelect.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import RelativeTab from "../RelativeTab/RelativeTab";
import NowTab from "../NowTab/NowTab";
import { TABS } from "../../shared/constants";
import type { setDateProps, TabType } from "../../shared/types";

const EndPointSelect: React.FC<setDateProps> = ({ setDate, date }) => {
  const [activeTab, setActiveTab] = useState<TabType>("absolute");

  return (
    <div className="end-point-select">
      <div className="end-point-select__tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`end-point-select__tab ${
              activeTab === tab ? "end-point-select__tab_active" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="end-point-select__tab-content">
        {activeTab === "absolute" && (
          <div>
            <CustomCalendar date={date} setDate={setDate} />
          </div>
        )}
        {activeTab === "relative" && (
          <RelativeTab date={date} setDate={setDate} />
        )}
        {activeTab === "now" && <NowTab date={date} setDate={setDate} />}
      </div>
    </div>
  );
};

export default EndPointSelect;
