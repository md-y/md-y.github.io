import { Card, Group, Text } from "@mantine/core"
import React from "react"
import { Repo } from "../common/types"
import MangadexCard from "./MangadexCardBody"
import RepoCardBody from "./RepoCardBody"
import VideoViewerCard from "./VideoViewerCardBody"

const RepoCard: React.FC<{ repo: Repo }> = ({ repo }) => {
  const getBody = () => {
    if (repo.name === "mangadex-full-api") return <MangadexCard repo={repo} />
    else if (repo.name === "videoviewer") return <VideoViewerCard />
    return <RepoCardBody repo={repo} />
  }

  return (
    <Card mb="1em">
      <Group>
        <Text weight={700} component="a" href={repo.html_url} target="_blank">
          {repo.name}
        </Text>
      </Group>
      {getBody()}
    </Card>
  )
}

export default RepoCard
