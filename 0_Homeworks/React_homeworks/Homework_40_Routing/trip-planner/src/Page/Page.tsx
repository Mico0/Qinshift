import { type ReactNode } from "react";
import "./Page.css";

import type { Country } from "../models/country.model";
import CountryCard from "../Components/CountryCard/CountryCard";

interface PageProps {
  countries: Country[];
  title?: string;
  children?: ReactNode;
}

export function Page({ title, children, countries }: PageProps) {
  const borderProperties = {
    width: "15px",
    colorGreen: "var(--tea-green)",
    colorBlue: "#26AEE7",
  };

  return (
    <div className="Page">
      <section className="container">
        <h2 className="pageTitle">{title || countries[0].region}</h2>
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
