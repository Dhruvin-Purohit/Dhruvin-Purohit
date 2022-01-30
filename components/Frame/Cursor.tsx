import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("#cursor")!;
    const trail = document.querySelector<HTMLElement>("#cursor-trail")!;
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      setTimeout(() => {
        trail.style.left = e.clientX + "px";
        trail.style.top = e.clientY + "px";
      }, 200);

      document.addEventListener("click", (e) => {
        cursor.classList.add("scale-[2]");
        trail.classList.add("scale-[2]");
        setTimeout(() => {
          cursor.classList.remove("scale-[2]");
          trail.classList.remove("scale-[2]");
        }, 750);
      });
    });
  }, []);

  return (
    <>
      <div
        id="cursor"
        className="fixed w-1 h-1 transition duration-500 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pointer-events-none z-[1]"
      ></div>
      <div
        id="cursor-trail"
        className="fixed w-8 h-8 transition duration-500 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-25 rounded-full pointer-events-none z-[1]"
      ></div>
    </>
  );
}
