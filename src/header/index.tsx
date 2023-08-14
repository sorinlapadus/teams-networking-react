import logo from "../images/network-team-icon.png";
import { MainMenu } from "../menu/MainMenu";
import { Page } from "../models";
type Props = { activePage: Page };
type Actions = { setActive(active: Page): void };
export default function AppHeader(props: Props & Actions) {
  return (
    <div id="header-wrapper">
      <header>
        <div id="my-picture">
          <img src={logo} alt="poza" width="100" />
        </div>
        <div>
          <h1>Teams networking</h1>
          <h2>
            <span className="app-icon">{getIcon(props.activePage)}</span>CRUD operations example (Create, Read, Update,
            Delete)
          </h2>
        </div>
      </header>
      <MainMenu activePage={props.activePage} setActive={props.setActive} />
    </div>
  );
}

const icons: { [key in Page]: string } = {
  home: "💼",
  todos: "📆",
  teams: "🎭"
};

function getIcon(page: Page) {
  return icons[page];
}
