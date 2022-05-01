import { useRef } from "react"

export const RenderCount = ({ message }) => {
  const renderCounter = useRef(0)
  renderCounter.current = renderCounter.current + 1
  console.info(`Renders: ${renderCounter.current}, ${message}`)
}
