import { useEffect, useState, type ReactNode } from "react";
import "./Page.css";
import type { Country } from "../models/country.model";
import CountryCard from "../Components/CountryCard/CountryCard";
import Search from "../Components/Search/Search";
import COUNTRIES from "../data/countries.json";

interface PageProps {
  page: string;
  title?: string;
  children?: ReactNode;
}

export function Page({ title, children, page }: PageProps) {
  const topCountries = COUNTRIES.slice(0, 10);
  const [countries, setCountries] = useState<Country[]>([]);

  const borderProperties = {
    width: "15px",
    colorGreen: "var(--tea-green)",
    colorBlue: "#26AEE7",
  };

  useEffect(() => {
    if (page !== "Home") {
      // console.log("Not homepage");

      const newData = [...COUNTRIES].filter(
        (country) => country.region.toLowerCase() === page.toLowerCase()
      );
      if (JSON.stringify(newData) !== JSON.stringify(countries)) {
        setCountries(newData);
      }
    } else {
      if (JSON.stringify(topCountries) !== JSON.stringify(countries)) {
        setCountries(topCountries);
      }
    }
  }, [page]);

  function handleSearchInput(input: string) {
    if (!input) {
      // console.log("Homepage and input empty");

      setCountries(topCountries);

      return;
    } else if (input) {
      // console.log("Homepage and not empty");

      const newData = [...COUNTRIES].filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );

      setCountries(newData);
    }
  }

  console.log("Countries selected", countries);

  return (
    <div className="Page">
      <section className="container">
        <h2 className="pageTitle">{title}</h2>
        {page === "Home" && <Search handleChange={handleSearchInput} />}
        {children}
        {countries.map((country) => (
          <CountryCard
            key={country.name.common}
            image={country.image}
            title={country.name.common}
            description={country.description}
            style={
              country.landlocked === true
                ? {
                    borderLeftColor: borderProperties.colorGreen,
                    borderLeftWidth: borderProperties.width,
                  }
                : {
                    borderLeftColor: borderProperties.colorBlue,
                    borderLeftWidth: borderProperties.width,
                  }
            }
          />
        ))}
      </section>
    </div>
  );
}
