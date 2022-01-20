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
      <main className="text-blue-300 bg-gray-900">{children}</main>
      <footer className="text-center text-blue-300 bg-gray-900">
        <Footer />
      </footer>
    </>
  );
}
