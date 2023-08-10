import { Team } from "../models";

let loadURL = "http://localhost:3000/teams-json";
if (window.location.host === "sorinlapadus.github.io") {
  loadURL = "http://sorinlapadus.github.io/teams-json";
}
export function loadTeamsRequest(): Promise<Team[]> {
  return fetch("http://localhost:3000/teams-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
}

export function deleteTeamRequest(id: string, callback?: (status: any) => void): Promise<{ success: boolean }> {
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  })
    .then(r => r.json())
    .then(status => {
      if (typeof callback === "function") callback(status);
      return status;
    });
}

export function updateTeamRequest(team): Promise<{ success: boolean }> {
  return fetch("http://localhost:3000/teams-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

export function createTeamRequest(team): Promise<{ success: boolean; id: string }> {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}
