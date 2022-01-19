import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactElement, useEffect } from "react";
import Cursor from "./Cursor";

export default function Frame({ children }: { children: ReactElement }) {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("#cursor")!
    const trail = document.querySelector<HTMLElement>("#cursor-trail")!
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      setTimeout(() => {
        trail.style.left = e.clientX + "px";
        trail.style.top = e.clientY + "px";
      }, 200)

      document.addEventListener("click", (e) => {
        cursor.classList.add("scale-[2]")
        trail.classList.add("scale-[2]")
        setTimeout(() => {
          cursor.classList.remove("scale-[2]")
          trail.classList.remove("scale-[2]")
        }, 750)
      })
    })
  },[])

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
