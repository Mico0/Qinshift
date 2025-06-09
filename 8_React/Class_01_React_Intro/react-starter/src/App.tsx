import "./App.css";
import PersonInfo from "./Components/PersonInfo/PersonInfo";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Layout/Footer/Footer";

import Header from "./Layout/Header/Header";

function App() {
  const firstName = "Milan";
  const lastName = "Ognjanoski";

  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  const isParagraphShown = true;

  const isFinished = false;

  const colors: string[] = [
    "lightgreen",
    "lightgray",
    "lightblue",
    "lightyellow",
    "lightcoral",
    "aliceblue",
  ];

  return (
    <div>
      <Header />
      <main>
        <h2>Content</h2>
        {/* Rendering dynamic variables in JSX */}
        <h3>Normal variables</h3>
        <h4>{firstName}</h4>
        <h4>{lastName}</h4>

        <br />

        <h3>Object Properties</h3>
        <h4>{person.firstName}</h4>
        <h4>{person.lastName}</h4>

        <button disabled={true}>Test</button>

        <br />
        {isParagraphShown && (
          <p className="hide-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel
            alias doloremque eum quam totam veritatis officia perspiciatis
            expedita. Labore fuga tempora velit consequatur nobis quasi
            perferendis omnis beatae ipsam.
          </p>
        )}
        <div
          className="todo"
          style={{
            backgroundColor: isFinished ? "lightgreen" : "lightpink",
          }}
        >
          Do the dishes
        </div>
        {/* Rendering lists in React */}
        <ul className="list">
          {colors.map((color, i) => (
            <li key={i} style={{ backgroundColor: color }}>
              {color}
            </li>
          ))}
        </ul>

        <ProductList />

        <PersonInfo firstName="John" lastName="Doe" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
