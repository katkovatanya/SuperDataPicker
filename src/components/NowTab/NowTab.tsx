import CustomButton from "../CustomButton/CustomButton";
import "./NowTab.css";

type NowTabProps = {
  setDate: (date: Date) => void;
};

const NowTab: React.FC<NowTabProps> = ({ setDate }) => {
  return (
    <div className="now-tab">
      <p>
        Setting the time to "now" means that on every refresh this time will be
        set to the time of the refresh.
      </p>
      <CustomButton
        text="Set start date and time to now"
        onClick={() => {
          setDate(new Date());
        }}
      />
    </div>
  );
};
export default NowTab;
