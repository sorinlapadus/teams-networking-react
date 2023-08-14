import logo from "../images/network-team-icon.png";
import { MainMenu } from "../menu/MainMenu";
export default function AppHeader() {
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
      <MainMenu />
    </div>
  );
}
