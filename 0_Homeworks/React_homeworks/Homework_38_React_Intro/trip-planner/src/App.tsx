import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountryCard from "./Components/CountryCard/CountryCard";
import countryData from "./data/countries.json";
import { useState } from "react";
import CountryPages from "./Pages/CountryPages/CountryPages";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");

  const isHomepage = selectedPage === "Home" || "";

  const homepageMain = (
    <div className="container">
      <h1 className="pageTitle">10 most popular tourist destinations</h1>
      {countryData.map((country) => (
        <CountryCard
          image={country.image}
          title={country.name}
          description={country.description}
        />
      ))}
    </div>
  );

  return (
    <div className="App">
      <Header onClickMenu={setSelectedPage} />
      <main>
        {(isHomepage && homepageMain) || (
          <CountryPages pageName={selectedPage} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
