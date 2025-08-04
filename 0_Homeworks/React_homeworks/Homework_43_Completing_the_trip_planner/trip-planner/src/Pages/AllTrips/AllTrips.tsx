import PassengerCard from "../../Components/PassengerCard/PassengerCard";
import type { Country } from "../../models/country.model";
import { loadFromLocalStorage } from "../../service/localStorage";
import type { TripInfo } from "../AddTripInformation/AddTripInformation";

export default function AllTrips() {
  const tripInfo: TripInfo[] = loadFromLocalStorage("passengerInfo");

  console.log(tripInfo);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center place-content-center">
      {tripInfo.map((item, index) => (
        <div className="w-[15rem] md:w-[36rem]" key={index}>
          <PassengerCard
            passengerName={item.passenger?.passengerName}
            budget={item.passenger?.budget}
            comments={item.passenger?.comments}
          />

          {item.countries.map((country: Country) => (
            <div
              key={country.name.common.toLowerCase()}
              className="grid gap-3 m-4 grid-cols-1 bg-[var(--papaya)]"
              id="accordion-collapse-body-1"
            >
              <div className="flex flex-wrap md:flex-nowrap border-[var(--tea-green)] border-2 items-center justify-center md:justify-evenly rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-600">
                <div className="w-20 p-2 shrink-0">
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    className="h-12 w-20 bg-center rounded-sm"
                  />
                </div>
                <div className="p-2">
                  <p className="font-semibold text-lg">{country.name.common}</p>
                </div>
                <div className="p-2">Days reserved: {country.days}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

//  {(Array.isArray(passenger) && passenger.length) !== 0 && (

//       )}
{
}
