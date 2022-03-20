import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DarkModeSwitch from "../utils/DarkModeSwitch";

export default function NavBar() {
  const router = useRouter();
  const [isDarkTheme, setDarkTheme] = useState(
    document.body.classList.contains("dark")
  );

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <nav className="text-black bg-white dark:bg-material-dark-main dark:text-white">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Works</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <div></div>
          <li>
            <button onClick={toggleTheme}>
              <DarkModeSwitch on={isDarkTheme} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
