import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks: string[] = [
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Americas",
  ];

  return (
    <nav className="Navbar">
      <ul>
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        {navLinks.map((link) => (
          <li key={link.toLowerCase()}>
            <Link to={link.toLowerCase()}>{link}</Link>
          </li>
        ))}
        <li id="trip-planner" key="trip-planner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="48.World">
              <path d="M12 24A12 12 0 1 1 22.691 6.545l-1.781.91a10 10 0 1 0-7.091 14.38l.362 1.967A12.029 12.029 0 0 1 12 24z" />
              <path d="m4.707 19.707-1.414-1.414L4.586 17h2L8 15.586v-3.822l1-2V8.236L8.382 7H6.697L3.445 4.832l1.11-1.664L7.303 5h2.315L11 7.764v2.472l-1 2v4.178L7.414 19h-2l-.707.707zM17.105 7.447 15.882 5l1.223-2.447 1.79.894L18.118 5l.777 1.553-1.79.894zM18 23.447 14.7 20a6 6 0 1 1 6.6 0zM18 11a3.99 3.99 0 0 0-2.121 7.376l.189.156L18 20.553l2.121-2.177A3.99 3.99 0 0 0 18 11z" />
              <path d="M17 14h2v2h-2z" />
            </g>
          </svg>

          <Link onClick={} to="trip-planner">
            Trip Planner
          </Link>
        </li>
      </ul>
    </nav>
  );
}
