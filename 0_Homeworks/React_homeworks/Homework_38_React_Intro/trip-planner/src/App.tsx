import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountryCard from "./Components/CountryCard/CountryCard";
import countryData from "./data/countries.json";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <h2>10 most popular tourist destinations</h2>
          {countryData.map((country) => (
            <CountryCard
              image={country.image}
              title={country.name}
              description={country.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
