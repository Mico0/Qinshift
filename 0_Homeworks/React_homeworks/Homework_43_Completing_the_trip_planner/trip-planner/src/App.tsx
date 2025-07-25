import "./App.css";
import CountryContextProvider from "./Contexts/CountryContext";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

import { Page } from "./Page/Page";
import { Route, Routes, useLocation } from "react-router-dom";
import TripPlanner from "./Pages/TripPlanner/TripPlanner";
import AddTripInformation from "./Pages/AddTripInformation/AddTripInformation";

function App() {
  const { pathname } = useLocation();
  const page =
    pathname === "/"
      ? "Home"
      : pathname.slice(1, pathname.length).toUpperCase();

  // console.log("PAGE IS:", page);

  return (
    <div className="App">
      <Header />
      <main>
        <CountryContextProvider initRegion={page}>
          <Routes>
            <Route
              path="/"
              element={<Page title="10 most popular tourist destinations" />}
            />
            <Route path="/europe" element={<Page title={page} />} />
            <Route path="/asia" element={<Page title={page} />} />
            <Route path="/africa" element={<Page title={page} />} />
            <Route path="/oceania" element={<Page title={page} />} />
            <Route path="/americas" element={<Page title={page} />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/add-trip" element={<AddTripInformation />} />
          </Routes>
        </CountryContextProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
