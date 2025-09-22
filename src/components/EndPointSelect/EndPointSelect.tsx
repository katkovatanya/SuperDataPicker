import React, { useState } from "react";
import "./EndPointSelect.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import RelativeTab from "../RelativeTab/RelativeTab";
import NowTab from "../NowTab/NowTab";

type TabType = "absolute" | "relative" | "now";

const TABS: TabType[] = ["absolute", "relative", "now"];

const EndPointSelect: React.FC = () => {
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
            <CustomCalendar />
          </div>
        )}
        {activeTab === "relative" && <RelativeTab />}
        {activeTab === "now" && <NowTab />}
      </div>
    </div>
  );
};

export default EndPointSelect;
