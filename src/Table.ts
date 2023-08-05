import { component, shallowEq } from "ivi";
import { htm as html } from "@ivi/htm";
import { TableData } from "./data.js";

interface TableProps {
  cap: string;
  data: TableData | null;
}

export const Table = component<TableProps>((c) => {
  return ({cap, data: d}) => {
    if (d == null) {
      return null;
    }

    console.log(`redraw ${cap}!`);

    return html`
      <div>
        <h3>${cap}</h3>
        <table>
          <thead>
            <tr>
              ${d.fields.map(fld => html`
                <th>${fld}</th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${d.data.map(row => html`
              <tr>
                ${row.map(col => html`
                  <td>
                    ${col}
                  </td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  };
}, shallowEq);

//${List(data, getEntryId, (entry) => Row({ entry, selected: selected === entry.id }))}