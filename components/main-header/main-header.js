import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href={"/"}>
        <Image src={logo} alt="a plate with a food on it" priority={true} />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
