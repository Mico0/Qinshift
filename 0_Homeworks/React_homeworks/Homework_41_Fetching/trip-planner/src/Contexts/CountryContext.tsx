import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Country } from "../models/country.model";
import { httpService } from "../service/httpService.ts";
import Spinner from "../Components/Spinner/Spinner.tsx";

interface CountryContextInterface {
  countries: Country[];
}

export const CountryContext = createContext<CountryContextInterface>({
  countries: [],
});

function CountryContextProvider({
  children,
  initRegion,
}: {
  children: ReactNode;
  initRegion: string;
}) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCountries = async () => {
    setIsLoading(true);
    let dataCountries: Country[] = [];
    try {
      // console.log("IN FETCH");

      if (initRegion !== "Home") {
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

      // console.log(initRegion);

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
    if (!initRegion) return;

    fetchCountries();
  }, [initRegion]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CountryContext.Provider value={{ countries }}>
          {children}
        </CountryContext.Provider>
      )}
    </>
  );
}

export default CountryContextProvider;
