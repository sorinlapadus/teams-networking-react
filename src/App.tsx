import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";
import { ContentWrapper } from "./main/components";
import { Page } from "./models";
import { useState } from "react";
function App() {
  const [active, setActive] = useState<Page>("home");
  setTimeout(() => setActive("todos"), 3000);
  return (
    <>
      <AppHeader activePage={active} />
      <ContentWrapper activePage={active} />
      <AppFooter />
    </>
  );
}

export default App;
