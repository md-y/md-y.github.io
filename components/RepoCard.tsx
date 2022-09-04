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

  return <Card mb="1em">{getBody()}</Card>
}

export default RepoCard
