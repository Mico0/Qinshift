import { useContext } from "react";
import Button from "../../Components/Button/Button";
import "./TripPlanner.css";
import { CountryContext } from "../../Contexts/CountryContext";

function TripPlanner() {
  const { getTripPlanner } = useContext(CountryContext);

  console.log(getTripPlanner());
  return (
    <div className="TripPlanner m-auto w-full h-full">
      <ul className="country-list">
        <label htmlFor="countryDays">Number of days to visit: </label>
        <input
          type="number"
          name="countryDays"
          id="countryDays"
          max={30}
          min={1}
        />
        {/* <Button icon="delete">Remove trip</Button> */}
      </ul>
    </div>
  );
}

export default TripPlanner;
