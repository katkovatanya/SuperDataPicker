import { intervalOptions } from "../../shared/constants";
import type { setDateProps } from "../../shared/types";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";
import "./RelativeTab.css";

const RelativeTab: React.FC<setDateProps> = ({ setDate, date }) => {
  return (
    <div className="relative-tab">
      <NumberInput />
      <CustomDropdown options={intervalOptions} />
    </div>
  );
};
export default RelativeTab;
