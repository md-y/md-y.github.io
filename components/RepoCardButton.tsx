import { ActionIcon, Text, HoverCard } from "@mantine/core"
import React from "react"

const RepoCardButton: React.FC<{
  href: string
  icon: React.ReactNode
  hovertext: string
}> = ({ href, icon, hovertext }) => {
  return (
    <HoverCard position="bottom-end">
      <HoverCard.Target>
        <ActionIcon
          size="md"
          variant="light"
          component="a"
          href={href}
          target="_blank"
        >
          {icon}
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text>{hovertext}</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  )
}

export default RepoCardButton
