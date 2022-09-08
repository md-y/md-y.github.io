import { Badge } from "@mantine/core"
import React from "react"

const BadgeList: React.FC<{ badges: string[] }> = ({ badges }) => {
  return (
    <>
      {badges.map((text, i) => (
        <Badge color={text.toLowerCase()} variant="light" key={text + i}>
          {text}
        </Badge>
      ))}
    </>
  )
}

export default BadgeList
