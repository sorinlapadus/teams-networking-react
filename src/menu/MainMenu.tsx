import "./menu.css";
import { useState } from "react";
type PageType = "home" | "TODO" | "Teams";
export function MainMenu() {
  //const active: string = "home";
  const [active, setActive] = useState<PageType>("home");
  return (
    <ul id="top-menu-bar">
      <li>
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={() => {
            setActive("home");
          }}
        >
          HOME
        </a>
      </li>
      <li>
        <a
          href="#TODO"
          className={active === "TODO" ? "active" : ""}
          onClick={() => {
            setActive("TODO");
          }}
        >
          TODO
        </a>
      </li>
      <li>
        <a
          href="Teams"
          className={active === "Teams" ? "active" : ""}
          onClick={() => {
            setActive("Teams");
          }}
        >
          Teams
        </a>
      </li>
    </ul>
  );
}
