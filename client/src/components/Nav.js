import { useTodoContext } from "../hooks/useTodoContext"

export const Nav = ({ menuItems }) => {
  const {
    actions: { toggleFilter }
  } = useTodoContext()

  return (
    <nav className="primary-nav">
      <ul className="nav--list">
        {menuItems.map(item => (
          <li className="nav--list-item" key={item.name} onClick={() => toggleFilter(item.filter)}>
            <span className={item.color ? `color-icon ${item.color}` : ""}>
              {item.icon ? item.icon : item.color ? "" : null}
            </span>
            <span>{item.name}</span>
            <span className={item.howMany ? (item.color ? item.color : "") : "empty"}>
              {item.howMany ? item.howMany : null}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
