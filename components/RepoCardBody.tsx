import { Text } from "@mantine/core"
import { MdHome } from "react-icons/md"
import React from "react"
import { Repo } from "../common/types"
import BadgeList from "./BadgeList"
import RepoCardFooter from "./RepoCardFooter"
import RepoCardButton from "./RepoCardButton"

const RepoCard: React.FC<{ repo: Repo }> = ({ repo }) => {
  const badges = []
  if (repo.language) badges.push(repo.language)

  const usesNode = (repo.topics ?? [])
    .map((topic) => topic.toLowerCase())
    .some((topic) => topic.includes("node"))
  if (usesNode) badges.push("node")

  if (repo.fork) badges.push("Fork")
  if (repo.archived) badges.push("Archived")

  return (
    <>
      <Text>{repo.description}</Text>

      <RepoCardFooter>
        {repo.homepage && (
          <>
            <RepoCardButton
              href={repo.homepage}
              icon={<MdHome size="1.4em" />}
              hovertext="Go to Homepage"
            />
          </>
        )}
        {badges.length > 0 && <BadgeList badges={badges} />}
      </RepoCardFooter>
    </>
  )
}

export default RepoCard
