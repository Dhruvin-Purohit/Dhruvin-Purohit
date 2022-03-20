import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactElement } from "react";
import Cursor from "./Cursor";

export default function Frame({ children }: { children: ReactElement }) {

  return (
    <>
      <Cursor />
      <header>
        <NavBar />
      </header>
      <main className="text-black dark:text-white dark:bg-material-dark-main">{children}</main>
      <footer className="text-center text-black dark:text-white dark:bg-material-dark-main">
        <Footer />
      </footer>
    </>
  );
}
