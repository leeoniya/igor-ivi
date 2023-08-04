import { htm as html } from "@ivi/htm";

export const Button = (text: string, onclick: () => void) => html`
  <button @click=${onclick}>${text}</button>
`;