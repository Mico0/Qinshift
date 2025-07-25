import type { Country } from "../models/country.model";
import type { AddTripValues } from "../Pages/AddTripInformation/AddTripInformation";

export const saveToLocalStorage = (
  key: string,
  countries?: Country[],
  tripInfo?: AddTripValues
) => {
  let result;

  if (key === "tripPlanner") {
    result = countries?.filter((country) => country.countryInTripPlanner);
  }

  if (key === "passengerInfo") {
    result = tripInfo;
  }

  localStorage.setItem(`${key}`, JSON.stringify(result));
};

export const loadFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(`${key}`);

  return data ? JSON.parse(data) : [];
};
