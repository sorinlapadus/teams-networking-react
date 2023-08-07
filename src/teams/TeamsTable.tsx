import React from "react";
import { deleteTeamRequest, loadTeamsRequest } from "./middleware";

type Team = {
  id: string;
  url: string;
  promotion: string;
  members: string;
  name: string;
};

type RowProps = {
  team: Team;
};
type RowActions = {
  deleteTeam(id: string): void;
  startEdit(team: Team): void;
};
function TeamRow(props: RowProps & RowActions) {
  const { id, url, promotion, members, name } = props.team;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value={id} />
      </td>
      <td>{promotion}</td>
      <td>{members}</td>
      <td>{name}</td>
      <td>
        <a href={url} target="_blank">
          {url}
        </a>
      </td>
      <td>
        <button
          type="button"
          className="action-btn edit-btn"
          onClick={() => {
            props.startEdit(props.team);
          }}
        >
          &#9998;
        </button>
        <button
          type="button"
          className="action-btn remove-btn"
          onClick={() => {
            props.deleteTeam(id);
          }}
        >
          &#x2672;
        </button>
      </td>
    </tr>
  );
}

type Props = {
  loading: boolean;
  teams: Team[];
  team: Team;
};
type Actions = {
  deleteTeam(id: string): void;
  startEdit(team: Team): void;
  save(): void;
};
export function TeamsTable(props: Props & Actions) {
  console.warn("teams", props);
  return (
    <form
      action=""
      id="teamsForm"
      className={props.loading ? "loading-mask" : ""}
      onSubmit={e => {
        e.preventDefault();
        console.info("submit");
        props.save();
      }}
    >
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
              team={team}
              deleteTeam={function (id: string) {
                props.deleteTeam(id);
              }}
              startEdit={() => {
                props.startEdit(team);
              }}
            />
          ))}
        </tbody>
        <tfoot>
          <tr id="edit-form">
            <td></td>
            <td>
              <input
                type="text"
                id="promotion"
                name="promotion"
                placeholder="Enter promotion"
                required
                disabled={!!props.team.id}
              />
            </td>
            <td>
              <input
                type="text"
                id="members"
                name="members"
                placeholder="Enter members"
                required
                disabled={!!props.team.id}
              />
            </td>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter project name"
                required
                disabled={!!props.team.id}
              />
            </td>
            <td>
              <input
                type="text"
                id="url"
                name="url"
                placeholder="Enter project URL"
                required
                disabled={!!props.team.id}
              />
            </td>
            <td>
              <button type="submit" disabled={!!props.team.id}>
                💾
              </button>
              <button type="reset" disabled={!!props.team.id}>
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
  team: Team;
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    console.warn("props", props);
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: {
        id: "",
        name: "",
        promotion: "",
        members: "",
        url: ""
      }
    };
  }

  componentDidMount(): void {
    this.loadTeams();
  }

  loadTeams() {
    loadTeamsRequest().then(teams => {
      console.info("loadTeamsRequest", teams);
      this.setState({ loading: false, teams: teams });
    });
  }

  render() {
    return (
      <TeamsTable
        loading={this.state.loading}
        teams={this.state.teams}
        team={this.state.team}
        deleteTeam={async id => {
          console.warn("should remove", id);
          this.setState({ loading: true });
          const status = await deleteTeamRequest(id);
          if (status.success) {
            this.loadTeams();
          }
        }}
        save={() => {
          console.info("save");
        }}
        startEdit={team => {
          console.info("startEdit=", team);
          this.setState({ team });
        }}
      />
    );
  }
}
