import {
  buttons,
  itemsDirection,
  unitsOfMeasurement,
} from "../../shared/constants";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";
import "./QuickSelect.css";

const QuickSelect: React.FC = () => {
  return (
    <>
      <h2>Quick select</h2>
      <div className="interval-selection">
        <CustomDropdown options={itemsDirection} />
        <NumberInput />
        <CustomDropdown options={unitsOfMeasurement} />
        <button className="apply-button">Apply</button>
      </div>
      <h2>Commonly used</h2>
      <div className="dropdown-menu__buttons">
        {buttons.map((label, index) => (
          <button key={index} className="dropdown-menu__button">
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export { QuickSelect };
