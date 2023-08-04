import { component, useState, useEffect, getProps, strictEq } from "ivi";
import { htm as html } from "@ivi/htm";
import { fakeFetch } from './data.js';

interface TableProps {
  cap: string;
  url: string;
  seed: number;
}

interface TableData {
  fields: string[];
  data: string[][];
}

export const Table = component<TableProps>((c) => {
  let [data, setData] = useState<TableData | null>(c, null);

  const update = useEffect(c, (seed: number) => {
    let { url } = getProps(c);

    fakeFetch(url)
      .then(r => r.json())
      .then(setData);
  }, strictEq);

  return (p) => {
    update(p.seed);

    let d = data();

    if (d == null) {
      return null;
    }

    return html`
      <div>
        <h3>${p.cap}</h3>
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
});

//${List(data, getEntryId, (entry) => Row({ entry, selected: selected === entry.id }))}