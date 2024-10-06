export interface IButtonModal {
  type: "primary" | "success" | "warning" | "danger";
  label: string;
  onClick: () => void;
}
