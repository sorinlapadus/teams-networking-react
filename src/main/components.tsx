import { TeamsTableWrapper } from "../teams/TeamsTable";
import { useState } from "react";
import { Page } from "../models";
export function TeamsPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="tbar tbar-lr">
        <div className="tbar-left">
          <button id="removeSelected">❌ Remove selected</button>
        </div>
        <div className="tbar-right">
          <input
            type="search"
            id="searchTeams"
            placeholder="Search"
            onChange={e => {
              console.info("search", e.target.value);
              setSearch(e.target.value);
            }}
          />
          <label htmlFor="search">🔎</label>
        </div>
      </div>
      <TeamsTableWrapper search={search} />
    </>
  );
}

export function HomePage() {
  return <div>Home...</div>;
}

export function TodosPage() {
  return <div>Todos...</div>;
}

export function ContentWrapper() {
  //console.warn("wrapper.render %o", search);
  const activePage: Page = "teams" as Page;
  return (
    <div id="main">
      {activePage === "home" ? <HomePage /> : null}
      {activePage === "todos" ? <TodosPage /> : null}
      {activePage === "teams" ? <TeamsPage /> : null}
    </div>
  );
}
