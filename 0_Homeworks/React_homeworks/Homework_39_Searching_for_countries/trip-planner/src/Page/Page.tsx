import type { ReactNode } from "react";
import "./Page.css";

interface PageProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <section className="container">
      <h2 className="pageTitle">{title}</h2>

      {/* Children is a in built react prop that contains all the content between the opening and closing tags */}
      {children}
    </section>
  );
}
