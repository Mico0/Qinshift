import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

import { Page } from "./Page/Page";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const page =
    pathname === "/"
      ? "Home"
      : pathname.slice(1, pathname.length).toUpperCase();

  console.log("PAGE IS:", page);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Page page={page} title="10 most popular tourist destinations" />
            }
          />
          <Route
            path="/europe"
            element={<Page title={page} page={page}></Page>}
          />
          <Route
            path="/asia"
            element={<Page title={page} page={page}></Page>}
          />
          <Route
            path="/africa"
            element={<Page title={page} page={page}></Page>}
          />
          <Route
            path="/oceania"
            element={<Page title={page} page={page}></Page>}
          />
          <Route
            path="/americas"
            element={<Page title={page} page={page}></Page>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
