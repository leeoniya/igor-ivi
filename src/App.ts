import { component, createRoot, update } from "ivi";
import { Table } from "./Table.js";
import { Alert } from "./Alert.js";
import { Button } from "./Button.js";

import { useState2 } from "./useState2.js";

const App = component((c) => {
  let seed1 = useState2(c, 0);
  let seed2 = useState2(c, 0);

  let alertVisible = useState2(c, false);
  let dismissAlert = () => alertVisible(false);

  return () => [
    Table({ url: "f1", cap: "Routes", seed: seed1() }),
    Table({ url: "f2", cap: "Operators", seed: seed2() }),
    Button("Update Table 1", () => seed1(seed1() + 1)),
    Button("Update Table 2", () => seed2(seed2() + 1)),
    Button("Show Alert", () => alertVisible(true)),
    alertVisible() ? Alert({ text: "Error!", dismiss: dismissAlert }) : null,
  ];
});

update(createRoot(document.body), App());
