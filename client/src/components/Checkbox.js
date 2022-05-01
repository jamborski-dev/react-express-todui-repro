import { Check2 } from "react-bootstrap-icons"

export const Checkbox = ({ checked, ...props }) => {
  return (
    <div className="checkbox-box">
      <input className="checkbox--hidden" type="checkbox" checked={checked} readOnly />
      <div className={`checkbox--custom ${checked ? "checked" : ""}`} checked={checked} {...props}>
        <span className="checkbox-icon">
          <Check2 />
        </span>
      </div>
    </div>
  )
}
