import "./menu.css";
export function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="TODO">
          TODO
        </a>
      </li>
      <li>
        <a href="#" data-page="Teams">
          Teams
        </a>
      </li>
    </ul>
  );
}
