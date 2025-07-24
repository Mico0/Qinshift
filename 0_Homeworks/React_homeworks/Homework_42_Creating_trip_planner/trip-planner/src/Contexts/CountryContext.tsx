import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Country } from "../models/country.model";
import { httpService } from "../service/httpService.ts";
import Spinner from "../Components/Spinner/Spinner.tsx";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../service/localStorage.ts";
import { toast, ToastContainer } from "react-toastify";
import { Slide } from "react-toastify/unstyled";

interface CountryContextInterface {
  countries: Country[];
  addToTripPlanner: (selectedCountry: Country) => void;
  removeFromTripPlanner: (selectedCountry: Country) => void;
  addDays: (selectedCountry: Country) => void;
  removeDays: (selectedCountry: Country) => void;
  getTripPlanner: () => Country[];
}

export const CountryContext = createContext<CountryContextInterface>({
  countries: [],
  addToTripPlanner() {},
  removeFromTripPlanner() {},
  addDays() {},
  removeDays() {},
  getTripPlanner() {
    return [];
  },
});

function CountryContextProvider({
  children,
  initRegion,
}: {
  children: ReactNode;
  initRegion: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [tripPlanner, setTripPlanner] = useState<Country[]>([]);

  useEffect(() => {
    const savedTripPlanner = loadFromLocalStorage() || [];
    setTripPlanner(savedTripPlanner);
  }, []);

  const fetchCountries = async () => {
    setIsLoading(true);
    let dataCountries: Country[] = [];
    try {
      // console.log("IN FETCH");

      // console.log(initRegion);
      if (initRegion !== "Home" && initRegion !== "TRIP-PLANNER") {
        const { data } = await httpService.get(
          `/region/${initRegion.toLowerCase()}?fields=name,capital,region,area,flags,population,landlocked`
        );

        dataCountries = data;
      } else if (initRegion === "Home") {
        const { data } = await httpService.get(
          `/all?fields=name,capital,region,area,flags,population,landlocked`
        );

        dataCountries = data;
      }
      // console.log(data);

      const result =
        initRegion === "Home" ? dataCountries.slice(0, 10) : dataCountries;

      setCountries(result);

      // console.log(result);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!initRegion || initRegion === "TRIP-PLANNER") return;

    fetchCountries();
  }, [initRegion]);

  function addToTripPlanner(selectedCountry: Country) {
    setTripPlanner((prevCountries) => {
      if (
        prevCountries.some(
          (country) => country.name.common === selectedCountry.name.common
        )
      ) {
        toast.info("Country already in planner");

        return prevCountries;
      }

      const countryToAdd = {
        ...selectedCountry,
        days: 1,
        countryInTripPlanner: true,
      };

      const updated = [...prevCountries, countryToAdd];

      saveToLocalStorage(updated);

      toast.success("Country added to planner");
      return updated;
    });
  }

  function removeFromTripPlanner(selectedCountry: Country) {
    setTripPlanner((prevCountries) => {
      const updated = prevCountries.filter(
        (country) => country.name.common !== selectedCountry.name.common
      );

      saveToLocalStorage(updated);

      toast.warning("Country removed from planner");

      return updated;
    });
  }

  const addDays = (selectedCountry: Country) => {
    setTripPlanner((prevCountries) => {
      const updated = prevCountries.map((country) => {
        if (country.name.common === selectedCountry.name.common) {
          return { ...country, days: country.days + 1 };
        }

        return country;
      });

      saveToLocalStorage(updated);

      return updated;
    });
  };

  const removeDays = (selectedCountry: Country) => {
    setTripPlanner((prevCountries) => {
      const updated = prevCountries.map((country) => {
        if (country.name.common === selectedCountry.name.common) {
          return { ...country, days: country.days - 1 };
        }
        return country;
      });
      saveToLocalStorage(updated);
      return updated;
    });
  };

  function getTripPlanner() {
    return tripPlanner;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ToastContainer
            position="bottom-center"
            theme="colored"
            pauseOnHover={false}
            autoClose={2000}
            transition={Slide}
          />
          <CountryContext.Provider
            value={{
              countries,
              addToTripPlanner,
              removeFromTripPlanner,
              addDays,
              removeDays,
              getTripPlanner,
            }}
          >
            {children}
          </CountryContext.Provider>
        </>
      )}
    </>
  );
}

export default CountryContextProvider;
