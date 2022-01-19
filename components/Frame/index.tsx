import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactElement } from "react";

export default function Frame({ children }: { children: ReactElement }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
