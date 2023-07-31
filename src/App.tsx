import React from "react";
//import logo from "./logo.svg";
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppHeader() {
  return (
    <div id="header-wrapper">
      <header>
        <div id="my-picture">
          <img src={logo} alt="poza" width="100" />
        </div>
        <div>
          <h1>Teams networking</h1>
          <h2>CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </header>
    </div>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://github.com/nmatei/node-api" target="_blank">
        <span>📃 </span>
        <span>API Docs</span>
      </a>
      |
      <a href="https://github.com/sorinlapadus/teams-networking" target="_blank">
        <span>👩&zwj;💻 </span>
        <span>Source Code</span>
      </a>
    </footer>
  );
}

function ContentWrapper() {
  // TODO
  return <div id="main"></div>;
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
