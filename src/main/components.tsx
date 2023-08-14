import { TeamsTableWrapper } from "../teams/TeamsTable";
import { useState } from "react";
import { Page } from "../models";
import { TodosApp } from "../todos/components";
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
  return <TodosApp />;
}
type Props = { activePage: Page };
export function ContentWrapper(props: Props) {
  //console.warn("wrapper.render %o", search);
  const activePage = props.activePage;
  let page;
  switch (activePage) {
    case "home":
      page = <HomePage />;
      break;
    case "todos":
      page = <TodosPage />;
      break;
    case "teams":
      page = <TeamsPage />;
      break;
    default:
      page = null;
      break;
  }
  return <div id="main">{page}</div>;
}
