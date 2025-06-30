import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";

interface HeaderProps {
  onClickMenu: (page: string) => void;
}

export default function Header({ onClickMenu }: HeaderProps) {
  return (
    <header className="Header">
      <h1>Trip Planner</h1>
      <Navbar onClickNavLink={onClickMenu} />
    </header>
  );
}
