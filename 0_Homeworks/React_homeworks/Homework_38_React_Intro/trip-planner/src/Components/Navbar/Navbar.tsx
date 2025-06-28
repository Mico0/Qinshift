import "./Navbar.css";

export default function Navbar() {
  const navLinks: string[] = [
    "Home",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Americas",
  ];

  return (
    <nav className="Navbar">
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <a href={`/${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
