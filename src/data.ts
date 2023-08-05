export const TABLES = {
  f1: {
    fields: ["ID", "Route", "Run", "Operator"],
    data: [
      ["1", "Brown Line", "E102", "SJones"],
      ["2", "UPN", "M405", "AJohnson"],
      ["3", "Hiawatha", "A006", "LBeck"],
      ["4", "Red Line", "E432", "LHill"],
      ["5", "Hiawatha", "A005", "LBeck"],
      ["6", "", "M623", "ESanders"],
    ],
  },
  f2: {
    fields: ["ID", "Name"],
    data: [
      ["1", "Vasya"],
      ["2", "Sveta"],
      ["3", "Sam"],
    ],
  },
};

function randInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeID(data: string[][]) {
  return data.map((rec) => {
    let r = rec.slice();
    r[0] = `${randInt(0, 100)}`;
    return r;
  });
}

export function fakeFetch(url: string) {
  console.log(`fakefetch! ${url}`);

  let targ = url.includes("f1") ? TABLES.f1 : TABLES.f2;

  let copy = {
    ...targ,
    data: randomizeID(targ.data),
  };

  return Promise.resolve({
    json: () => Promise.resolve(copy),
  });
}
