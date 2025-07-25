import { useContext } from "react";
import type { Country } from "../../models/country.model";
import { CountryContext } from "../../Contexts/CountryContext";
import TripPanel from "../TripPanel/TripPanel.js";
import PassengerCard from "../PassengerCard/PassengerCard.js";
import { loadFromLocalStorage } from "../../service/localStorage.js";
import type { AddTripValues } from "../../Pages/AddTripInformation/AddTripInformation.js";

function TripList() {
  const { getTripPlanner } = useContext(CountryContext);

  const countries = getTripPlanner();
  const passenger: AddTripValues = loadFromLocalStorage("passengerInfo");

  console.log(passenger);

  return (
    <div className=" w-full  p-4 shadow-md rounded-lg border-t-2 border-[var(--tea-green)]">
      <div className="flex justify-between pb-4">
        <p className="font-bold text-xl">Your Trip Planner</p>
      </div>

      {passenger && (
        <PassengerCard
          passengerName={passenger?.passengerName}
          budget={passenger?.budget}
          comments={passenger?.comments}
        />
      )}

      {countries.map((item: Country) => {
        return (
          <div
            key={item.name.common.toLowerCase()}
            className="grid gap-3 m-4  grid-cols-1 bg-[var(--papaya)]"
            id="accordion-collapse-body-1"
          >
            <div className="flex flex-wrap md:flex-nowrap border-[var(--tea-green)] border-2 items-center justify-center md:justify-between rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-600">
              <div className="w-20 p-2 shrink-0">
                <img
                  src={item.flags.png}
                  alt={item.flags.alt}
                  className="h-12 w-20 bg-center rounded-sm"
                />
              </div>
              <div className="p-2">
                <p className="font-semibold text-lg">{item.name.common}</p>
              </div>
              <TripPanel country={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TripList;
