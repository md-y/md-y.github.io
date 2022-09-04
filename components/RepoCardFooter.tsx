import { Card, Group } from "@mantine/core"
import React from "react"

const RepoCardFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Group mt="1em">{children}</Group>
}

export default RepoCardFooter
