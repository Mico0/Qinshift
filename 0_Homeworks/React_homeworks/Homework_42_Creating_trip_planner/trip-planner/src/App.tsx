import "./App.css";
import CountryContextProvider from "./Contexts/CountryContext";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

import { Page } from "./Page/Page";
import { Route, Routes, useLocation } from "react-router-dom";
import TripPlanner from "./Pages/TripPlanner/TripPlanner";

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
        <Routes>
          <Route
            path="/"
            element={
              <CountryContextProvider initRegion={page}>
                <Page title="10 most popular tourist destinations" />
              </CountryContextProvider>
            }
          />
          <Route
            path="/europe"
            element={
              <CountryContextProvider initRegion={page}>
                <Page title={page} />
              </CountryContextProvider>
            }
          />
          <Route
            path="/asia"
            element={
              <CountryContextProvider initRegion={page}>
                <Page title={page} />
              </CountryContextProvider>
            }
          />
          <Route
            path="/africa"
            element={
              <CountryContextProvider initRegion={page}>
                <Page title={page} />
              </CountryContextProvider>
            }
          />
          <Route
            path="/oceania"
            element={
              <CountryContextProvider initRegion={page}>
                <Page title={page} />
              </CountryContextProvider>
            }
          />
          <Route
            path="/americas"
            element={
              <CountryContextProvider initRegion={page}>
                <Page title={page} />
              </CountryContextProvider>
            }
          />
          <Route
            path="/trip-planner"
            element={
              <CountryContextProvider initRegion={page}>
                <TripPlanner />
              </CountryContextProvider>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
