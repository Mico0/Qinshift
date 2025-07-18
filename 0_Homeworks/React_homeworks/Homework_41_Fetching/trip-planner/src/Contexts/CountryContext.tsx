import { createContext, useState, type ReactNode } from "react";
import type { Country } from "../models/country.model";

interface CountryContextInterface {
  countries: Country[];
}

export const CountryContext = createContext<CountryContextInterface>({
  countries: [],
});

function CountryContextProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  return (
    <>
      <CountryContext.Provider value={{ countries }}>
        {children}
      </CountryContext.Provider>
    </>
  );
}

export default CountryContextProvider;
