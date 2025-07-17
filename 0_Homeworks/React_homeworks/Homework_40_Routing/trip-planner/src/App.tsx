import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountryCard from "./Components/CountryCard/CountryCard";
import Search from "./Components/Search/Search";
import countryData from "./data/countries.json";
import { useEffect, useState } from "react";
import type { Country } from "./models/country.model";
import { Page } from "./Page/Page";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const topCountries = countryData.slice(0, 10);
  const [countries, setCountries] = useState<Country[]>([]);
  const { pathname } = useLocation();
  const slicedPath = pathname.slice(1, pathname.length);
  let newData = [];

  function handleSearchInput(input: string) {
    if (!input && slicedPath === "") {
      console.log("Homepage and input empty");

      setCountries(topCountries);

      return;
    } else if (input && slicedPath === "") {
      console.log("Homepage and not empty");

      newData = [...countryData].filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );

      setCountries(newData);
    }
  }

  useEffect(() => {
    if (slicedPath !== "") {
      console.log("Not homepage");

      newData = [...countryData].filter(
        (country) => country.region.toLowerCase() === slicedPath
      );

      setCountries(newData);
    }
  }, [slicedPath]);

  console.log("Countries", countries);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Page
                countries={countries}
                title="10 most popular tourist destinations"
              >
                <Search handleChange={handleSearchInput} />
              </Page>
            }
          />
          <Route path="/europe" element={<Page countries={countries}></Page>} />
          <Route path="/asia" element={<Page countries={countries}></Page>} />
          <Route path="/africa" element={<Page countries={countries}></Page>} />
          <Route
            path="/oceania"
            element={<Page countries={countries}></Page>}
          />
          <Route
            path="/americas"
            element={<Page countries={countries}></Page>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
