import { Badge, Group, Text } from "@mantine/core"
import { BsBoxArrowUpRight } from "react-icons/bs"
import React from "react"
import { Repo } from "../common/types"
import GithubButton from "./GithubButton"
import LanguageList from "./LanguageList"
import RepoCardFooter from "./RepoCardFooter"
import RepoCardButton from "./RepoCardButton"

const RepoCard: React.FC<{ repo: Repo }> = ({ repo }) => {
  const languages = []
  if (repo.language) languages.push(repo.language)

  const usesNode = (repo.topics ?? [])
    .map((topic) => topic.toLowerCase())
    .some((topic) => topic.includes("node"))
  if (usesNode) languages.push("node")

  return (
    <>
      <Group position="apart">
        <Text weight={700}>{repo?.name}</Text>
      </Group>

      <Text>{repo.description}</Text>

      <RepoCardFooter>
        <GithubButton repo={repo.name} />
        {repo.homepage && (
          <>
            <RepoCardButton
              href={repo.homepage}
              icon={<BsBoxArrowUpRight />}
              hovertext="Go to Website"
            />
          </>
        )}
        {languages.length > 0 && <LanguageList languages={languages} />}
        {repo.archived && <Badge color="red">Archived</Badge>}
      </RepoCardFooter>
    </>
  )
}

export default RepoCard
