import type { setDateProps } from "../../shared/types";
import "./NowTab.css";

const NowTab: React.FC<setDateProps> = ({ setDate, date }) => {
  return (
    <div className="now-tab">
      <p>
        Setting the time to "now" means that on every refresh this time will be
        set to the time of the refresh.
      </p>
      <button>Set start date and time to now</button>
    </div>
  );
};
export default NowTab;
