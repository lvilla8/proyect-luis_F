import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/luis">luis_</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
