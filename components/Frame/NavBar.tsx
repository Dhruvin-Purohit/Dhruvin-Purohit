import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav className="fixed w-screen max-w-full bg-gray-900">
        <ul className="flex text-xl font-medium text-center text-blue-300 justify-evenly">
          <li
            className={`rounded-md flex-grow${
              router.asPath === "/#home" ? " bg-blue-300 text-gray-900" : ""
            }`}
          >
            <Link href="#home">
              <a className="flex justify-center flex-grow py-3">Home</a>
            </Link>
          </li>
          <li
            className={`rounded-md flex-grow${
              router.asPath === "/#about" ? " bg-blue-300 text-gray-900" : ""
            }`}
          >
            <Link href="#about">
              <a className="flex justify-center flex-grow py-3">About</a>
            </Link>
          </li>
          <li
            className={`rounded-md flex-grow${
              router.asPath === "/#contact" ? " bg-blue-300 text-gray-900" : ""
            }`}
          >
            <Link href="#contact">
              <a className="flex justify-center flex-grow py-3">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
