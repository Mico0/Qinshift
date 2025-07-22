import type { Country } from "../models/country.model";

export const saveToLocalStorage = (countries: Country[]) => {
  const tripPlanner = countries.filter(
    (country) => country.countryInTripPlanner
  );

  localStorage.setItem("tripPlanner", JSON.stringify(tripPlanner));
};

export const loadFromLocalStorage = (): Country[] => {
  const data = localStorage.getItem("tripPlanner");

  return data ? JSON.parse(data) : [];
};
