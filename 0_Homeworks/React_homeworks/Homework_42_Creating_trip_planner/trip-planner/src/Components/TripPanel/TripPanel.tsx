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

  const MIN_DAYS = 1;
  const MAX_DAYS = 30;

  return (
    <div className="p-2 flex items-center justify-center gap-4 flex-wrap text-center sm:justify-between ">
      <label htmlFor="countryDays">Number of days to visit: </label>
      <button
        disabled={country.days === MIN_DAYS}
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
        max={MAX_DAYS}
        min={MIN_DAYS}
        onChange={() => {}}
        value={country.days}
      />
      <button
        disabled={country.days === MAX_DAYS}
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
