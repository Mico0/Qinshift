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
      </ul>
    </nav>
  );
}
