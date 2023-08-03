function TeamRow({ id, url, promotion, members, name }: Team) {
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value={id} />
      </td>
      <td>{promotion}</td>
      <td>{members}</td>
      <td>{name}</td>
      <td>
        <a href="${url}" target="_blank">
          ${url}
        </a>
      </td>
      <td>
        <button type="button" data-id="${id}" className="action-btn edit-btn">
          &#9998;
        </button>
        <button type="button" data-id="${id}" className="action-btn remove-btn">
          &#x2672
        </button>
      </td>
    </tr>
  );
}
type Team = { id: string; url: string; promotion: string; members: string; name: string };
type Props = { loading: boolean; teams: Team[] };

export function TeamsTable(props: Props) {
  console.warn("teams", props);
  return (
    <form action="" id="teamsForm" className={props.loading ? "loading-mask" : ""}>
      <table id="teamsTable">
        <colgroup>
          <col className="select-all-col" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(team => (
            <TeamRow
              key={team.id}
              id={team.id}
              url={team.url}
              promotion={team.promotion}
              members={team.members}
              name={team.name}
            />
          ))}
        </tbody>
        <tfoot>
          <tr id="edit-form">
            <td></td>
            <td>
              <input type="text" id="promotion" name="promotion" placeholder="Enter promotion" required />
            </td>
            <td>
              <input type="text" id="members" name="members" placeholder="Enter members" required />
            </td>
            <td>
              <input type="text" id="name" name="name" placeholder="Enter project name" required />
            </td>
            <td>
              <input type="text" id="url" name="url" placeholder="Enter project URL" required />
            </td>
            <td>
              <button type="submit">💾</button>
              <button type="reset">✖</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export function TeamsTableWrapper() {
  const teams = [
    {
      id: "toze8j1610313009673",
      promotion: "html",
      members: "Nicolae Matei, HTML",
      name: "Web Presentation",
      url: "https://github.com/nmatei/web-intro-presentation",
      createdBy: "nmatei"
    },
    {
      id: "ezabnf1630345987541",
      promotion: "css",
      members: "Nicolae",
      name: "Names",
      url: "https://github.com/nmatei/nmatei.github.io",
      createdBy: "nmatei"
    },
    {
      id: "86mq81630347385708",
      promotion: "js",
      members: "Matei, Andrei",
      name: "JS/HTML/CSS Quiz",
      url: "https://github.com/nmatei/simple-quiz-app",
      createdBy: "nmatei"
    }
  ];
  return <TeamsTable loading={false} teams={teams} />;
}
