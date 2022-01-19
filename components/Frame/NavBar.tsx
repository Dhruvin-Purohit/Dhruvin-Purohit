import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="flex">
      <ul>
        <li className={router.pathname === "/#home" ? "active" : ""}>
          <Link href="#home"></Link>
        </li>
        <li className={router.pathname === "/#about" ? "active" : ""}>
          <Link href="#about"></Link>
        </li>
        <li className={router.pathname === "/#contact" ? "active" : ""}>
          <Link href="#contact"></Link>
        </li>
      </ul>
    </nav>
  );
}
