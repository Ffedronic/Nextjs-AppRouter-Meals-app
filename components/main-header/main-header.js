"use client";

import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

function Header() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={logo} alt="a plate with a food on it" priority={true} />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
              {/* <Link
                href={"/meals"}
                className={path.startsWith("/meals") ? classes.active : ""}
              >
                Browse Meals
              </Link> */}
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
              {/* <Link
                href={"/community"}
                className={path.startsWith("/community") ? classes.active : ""}
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
