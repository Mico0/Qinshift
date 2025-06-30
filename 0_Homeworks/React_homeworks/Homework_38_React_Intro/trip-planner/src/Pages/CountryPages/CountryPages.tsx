import "./CountryPages.css";

interface CountryPagesProps {
  pageName: string;
}

function CountryPages({ pageName }: CountryPagesProps) {
  return (
    <div className={pageName}>
      <h2>{pageName} Page</h2>
    </div>
  );
}

export default CountryPages;
