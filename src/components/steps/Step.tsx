import { HiOutlineClipboardList } from "react-icons/hi";
import { BsBox } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

import './step.css'

const Step = () => {
  return (
    <div className="step__container">
      <div className="step__wrapper">
        <h2>Follow Simple Steps</h2>
        <div className="step__flex">
          <div className="step__item">
            <HiOutlineClipboardList className="step_icon"/>
            <h3>Fill the Form</h3>
            <p>
              We specialize in the rapid, cost-effective and reliable delivery
              of couriers across different locations.
            </p>
          </div>
          <div className="step__item">
            <BsBox className="step_icon"/>
            <h3>Fill the Form</h3>
            <p>
              Priority depends on the urgency of the package and the type of
              goods, catering to varying budgets.
            </p>
          </div>
          <div className="step__item">
            <TbTruckDelivery className="step_icon"/>
            <h3>Delivery</h3>
            <p>
              Our reliable logistics network enables the fastest and most
              dependable door-to-door transit service in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
