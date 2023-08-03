import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
  return (
    <div id="main">
      <div className="tbar tbar-lr">
        <div className="tbar-left">
          <button id="removeSelected">❌ Remove selected</button>
        </div>
        <div className="tbar-right">
          <input type="search" id="searchTeams" placeholder="Search" />
          <label htmlFor="search">🔎</label>
        </div>
      </div>
      <TeamsTableWrapper />
    </div>
  );
}
