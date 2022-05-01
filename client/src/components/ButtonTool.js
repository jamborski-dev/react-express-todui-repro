export const ButtonTool = ({ children, className = "", ...props }) => {
  const cls = `btn ${className}`
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
