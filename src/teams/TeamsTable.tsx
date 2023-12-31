import React from "react";
import { createTeamRequest, deleteTeamRequest, loadTeamsRequest, updateTeamRequest } from "./middleware";
import { Team } from "../models";
type RowProps = {
  team: Team;
};
type RowActions = {
  deleteTeam(id: string): void;
  startEdit(team: Team): void;
};

type EditRowProps = {
  team: Team;
};
type EditRowActions = { inputChange(name: keyof Team, value: string): void };
function EditTeamRow(props: EditRowProps & EditRowActions) {
  const { id, url, promotion, members, name } = props.team;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value={id} />
      </td>
      <td>
        <input
          type="text"
          value={promotion}
          name="promotion"
          placeholder="Enter promotion"
          required
          onChange={e => {
            console.info("onChange", e.target.value);
            props.inputChange("promotion", e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          value={members}
          name="members"
          placeholder="Enter members"
          required
          onChange={e => {
            console.info("onChange", e.target.value);
            props.inputChange("members", e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter project name"
          required
          onChange={e => {
            console.info("onChange", e.target.value);
            props.inputChange("name", e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          value={url}
          name="url"
          placeholder="Enter project URL"
          required
          onChange={e => {
            console.info("onChange", e.target.value);
            props.inputChange("url", e.target.value);
          }}
        />
      </td>
      <td>
        <button type="submit" className="action-btn">
          💾
        </button>
        <button type="reset" className="action-btn">
          ✖
        </button>
      </td>
    </tr>
  );
}

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
        <a href={url} target="_blank" rel="noopener">
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
  inputChange(name: keyof Team, value: string): void;
  save(): void;
  reset(): void;
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
      onReset={e => {
        props.reset();
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
          {props.teams.map(team => {
            if (team.id === props.team.id) {
              return <EditTeamRow key={team.id} team={props.team} inputChange={props.inputChange} />;
            }
            return (
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
            );
          })}
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
                value={props.team.id ? "" : props.team.promotion}
                disabled={!!props.team.id}
                onChange={e => {
                  props.inputChange("promotion", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                id="members"
                name="members"
                placeholder="Enter members"
                required
                value={props.team.id ? "" : props.team.members}
                disabled={!!props.team.id}
                onChange={e => {
                  props.inputChange("members", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter project name"
                required
                value={props.team.id ? "" : props.team.name}
                disabled={!!props.team.id}
                onChange={e => {
                  props.inputChange("name", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                id="url"
                name="url"
                placeholder="Enter project URL"
                required
                value={props.team.id ? "" : props.team.url}
                disabled={!!props.team.id}
                onChange={e => {
                  props.inputChange("url", e.target.value);
                }}
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

type WrapperProps = { search: string };
type State = {
  loading: boolean;
  teams: Team[];
  team: Team;
};

function getEmptyTeam() {
  return {
    id: "",
    name: "",
    promotion: "",
    members: "",
    url: ""
  };
}
export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    console.warn("props", props);
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: getEmptyTeam()
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

  async save() {
    const team = this.state.team;
    this.setState({ loading: true });
    let done: boolean;
    if (team.id) {
      console.info("save", team);
      const { success } = await updateTeamRequest(team);
      done = success;
      await this.loadTeams();
    } else {
      console.info("create");
      const { id, success } = await createTeamRequest(team);
      done = success;
      this.setState(state => ({
        teams: [...state.teams, { ...team, id }]
      }));
    }
    if (done) {
      this.setState({ loading: false, team: getEmptyTeam() });
    }
  }

  async deleteTeam(id) {
    console.warn("should remove", id);
    this.setState({ loading: true });
    const status = await deleteTeamRequest(id);
    if (status.success) {
      this.loadTeams();
    }
  }

  inputChange(name: keyof Team, value: string) {
    console.info("inputChange", value);
    this.setState(state => {
      const team = { ...state.team };
      team[name] = value;
      return { team };
    });
  }

  render() {
    const teams = filterElements(this.state.teams, this.props.search);
    console.info("render");
    return (
      <TeamsTable
        loading={this.state.loading}
        teams={teams}
        team={this.state.team}
        deleteTeam={id => {
          this.deleteTeam(id);
        }}
        save={() => {
          this.save();
        }}
        reset={() => {
          console.info("reset", this.state.team);
          this.setState({ team: getEmptyTeam() });
        }}
        startEdit={team => {
          console.info("startEdit=", team);
          this.setState({ team });
        }}
        inputChange={(name, value) => {
          this.inputChange(name, value);
        }}
      />
    );
  }
}

function filterElements<T extends {}>(elements: T[], search: string) {
  if (!search) return elements;
  search = search.trim().toLowerCase();
  return elements.filter(element => {
    return Object.entries(element).some(([key, value]) => {
      if (key !== "id") {
        if (typeof value === "string") return value.toString().toLowerCase().includes(search);
        return value;
      }
    });
  });
}
