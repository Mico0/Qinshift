import { useContext } from "react";
import type { Country } from "../../models/country.model";
import Button from "../Button/Button";
import { CountryContext } from "../../Contexts/CountryContext";

interface TripPanelProps {
  country: Country;
}

function TripPanel({ country }: TripPanelProps) {
  const { removeFromTripPlanner, addDays, removeDays } =
    useContext(CountryContext);

  return (
    <div className="p-2 flex items-center justify-center gap-4 flex-wrap text-center sm:justify-between ">
      <label htmlFor="countryDays">Number of days to visit: </label>
      <button
        onClick={() => removeDays(country)}
        className="p-2 text-2xl cursor-pointer"
      >
        -
      </button>
      <input
        type="text"
        name="countryDays"
        id="countryDays"
        className="border w-20 rounded-md p-2 border-[var(--tea-green)] shadow-md text-center bg-[var(--cornsilk)]"
        max={30}
        min={1}
        value={country.days}
      />
      <button
        onClick={() => addDays(country)}
        className="p-2 text-2xl cursor-pointer"
      >
        +
      </button>
      <Button onBtnClick={() => removeFromTripPlanner(country)} icon="delete">
        Remove trip
      </Button>
    </div>
  );
}

export default TripPanel;
