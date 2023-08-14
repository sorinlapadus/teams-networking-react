import { TeamsTableWrapper } from "../teams/TeamsTable";
import { useState } from "react";

export function ContentWrapper() {
  const [search, setSearch] = useState("");
  return (
    <div id="main">
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
    </div>
  );
}
