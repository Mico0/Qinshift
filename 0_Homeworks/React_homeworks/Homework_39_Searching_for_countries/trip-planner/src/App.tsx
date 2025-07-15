import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountryCard from "./Components/CountryCard/CountryCard";
import Search from "./Components/Search/Search";
import countryData from "./data/countries.json";
import { useState } from "react";
import type { Country } from "./models/country.model";
import { Page } from "./Page/Page";

function App() {
  const topCountries = countryData.slice(0, 10);
  const [selectedPage, setSelectedPage] = useState("Home");
  const [view, setView] = useState<Country[]>(topCountries);

  const isHomepage = selectedPage === "Home" || "";

  function handleSearchInput(input: string) {
    if (!input) {
      setView(topCountries);
      return;
    }

    const newData = [...countryData].filter((country) =>
      country.name.common.toLowerCase().includes(input.toLowerCase())
    );

    setView(newData);
  }

  console.log(view);
  console.log(selectedPage);

  let defaultView;

  if (!isHomepage) {
    defaultView = <Page title={selectedPage}></Page>;
  } else {
    defaultView = (
      <Page title="10 most popular tourist destinations">
        <Search handleChange={handleSearchInput} />
        {view.map((country) => (
          <CountryCard
            key={country.name.common}
            image={country.image}
            title={country.name.common}
            description={country.description}
          />
        ))}
      </Page>
    );
  }

  return (
    <div className="App">
      <Header onClickMenu={setSelectedPage} />
      <main>{defaultView}</main>
      <Footer />
    </div>
  );
}

export default App;
