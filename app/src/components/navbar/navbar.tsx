import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1>
        {" "}
        <br />
        Navbar <br /> .
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/luis">luis_</Link>
          </li>
          <li>
            <Link href="/libros">Libros</Link>
          </li>
          <li>
            <Link href="/autores">Autores</Link>
          </li>
          <li>
            <Link href="/">Usuarios</Link>
          </li>
          <li>
            <Link href="/prestamos">Prestamos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
