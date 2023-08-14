import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";
import { ContentWrapper } from "./main/components";
import { Page } from "./models";
function App() {
  const activePage: Page = "teams" as Page;
  return (
    <>
      <AppHeader activePage={activePage} />
      <ContentWrapper activePage={activePage} />
      <AppFooter />
    </>
  );
}

export default App;
