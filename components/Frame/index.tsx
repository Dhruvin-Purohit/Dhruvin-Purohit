import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Frame({ children }: { children: unknown }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
