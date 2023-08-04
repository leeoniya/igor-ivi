import { component } from "ivi";
import { htm as html } from "@ivi/htm";

interface AlertProps {
  text: string;
  dismiss: () => void;
}

export const Alert = component<AlertProps>((c) => {
  return (p) => html`
    <div>
      <strong>${p.text}</strong>
      <button @click=${p.dismiss}>X</button>
    </div>
  `;
});
