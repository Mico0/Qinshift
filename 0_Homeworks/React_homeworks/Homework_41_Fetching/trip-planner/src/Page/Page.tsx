import { useContext, useEffect, useState, type ReactNode } from "react";
import "./Page.css";
import CountryCard from "../Components/CountryCard/CountryCard";
import Search from "../Components/Search/Search";
import { CountryContext } from "../Contexts/CountryContext";
import type { Country } from "../models/country.model";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

export function Page({ title, children }: PageProps) {
  const { countries } = useContext(CountryContext);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  function handleSearchInput(input: string) {
    if (!input) {
      setFilteredCountries(countries);
    } else {
      // console.log("Homepage and not empty");

      const newData = countries.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );

      setFilteredCountries(newData);
    }
  }

  // console.log("Countries selected", countries);

  return (
    <div className="Page">
      <section className="container">
        <h2 className="pageTitle">{title}</h2>
        {title === "10 most popular tourist destinations" && (
          <Search handleChange={handleSearchInput} />
        )}
        {children}
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common.toLowerCase()}
            country={country}
            className={
              country.landlocked
                ? "CountryCard card green"
                : "CountryCard card blue"
            }
          />
        ))}
      </section>
    </div>
  );
}
