import Link from "next/link";

export default function NavbarMenu() {
  return (
    <div className="navbar-menu">
      <ul className="navbar-menu__list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Catagory</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
