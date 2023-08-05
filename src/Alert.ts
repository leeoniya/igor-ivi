import { htm as html } from "@ivi/htm";

export const Alert = (text: string, dismiss: () => void) => html`
  <div>
    <strong>${text}</strong>
    <button @click=${dismiss}>X</button>
  </div>
`;