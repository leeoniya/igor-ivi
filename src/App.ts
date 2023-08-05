import { component, createRoot, invalidate, update, useEffect } from "ivi";
import { Table } from "./Table.js";
import { Alert } from "./Alert.js";
import { Button } from "./Button.js";

import { useState2 } from "./useState2.js";
import { TableData, fakeFetch } from "./data.js";

interface AppData {
  [url: string]: TableData | null;
}

const App = component((c) => {
  let data: AppData = {
    f1: null,
    f2: null,
  };

  const fetchData = (url: string) =>
    fakeFetch(url)
      .then((r) => r.json())
      .then((d) => {
        data[url] = d;
        invalidate(c);
      });

  let alertVisible = useState2(c, false);
  let dismissAlert = () => alertVisible(false);

  // initial fetch
  useEffect(c, () => {
    fetchData('f1');
    fetchData('f2');
  })();

  return () => [
    Table({ cap: "Routes", data: data.f1 }),
    Table({ cap: "Operators", data: data.f2 }),
    Button("Update Table 1", () => fetchData("f1")),
    Button("Update Table 2", () => fetchData("f2")),
    Button("Show Alert", () => alertVisible(true)),
    alertVisible() ? Alert({ text: "Error!", dismiss: dismissAlert }) : null,
  ];
});

update(createRoot(document.body), App());
