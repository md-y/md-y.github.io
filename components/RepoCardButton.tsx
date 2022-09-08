import { ActionIcon, Text, HoverCard, Tooltip } from "@mantine/core"
import React from "react"

const RepoCardButton: React.FC<{
  href: string
  icon: React.ReactNode
  hovertext: string
}> = ({ href, icon, hovertext }) => {
  return (
    <Tooltip label={hovertext}>
      <ActionIcon size="md" component="a" href={href} target="_blank">
        {icon}
      </ActionIcon>
    </Tooltip>
  )
}

export default RepoCardButton
