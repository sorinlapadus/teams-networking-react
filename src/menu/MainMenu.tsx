import { useState } from "react";
import "./menu.css";
import { Page } from "../models";

export function MainMenu() {
  //const active: string = "teams"; // 48 lines
  const [active, setActive] = useState<Page>("home");

  const elements = [
    { text: "Home", name: "home" },
    { text: "Todos", name: "todos" },
    { text: "Teams", name: "teams" }
  ];

  return (
    <ul className="top-menu-bar">
      {elements.map(element => (
        <li>
          <a
            href={"#" + element.name}
            className={active === element.name ? "active" : ""}
            onClick={() => {
              setActive(element.name as Page); // tmp use 'as Page'
            }}
          >
            {element.text}
          </a>
        </li>
      ))}
    </ul>
  );
}