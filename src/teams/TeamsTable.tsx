export function TeamsTable(props) {
  console.warn("teams", props.loading);
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
        <tbody></tbody>
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
