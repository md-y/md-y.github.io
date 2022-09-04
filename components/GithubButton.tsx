import { FaGithub } from "react-icons/fa"
import React from "react"
import RepoCardButton from "./RepoCardButton"

const GithubButton: React.FC<{ repo: string }> = ({ repo }) => {
  return (
    <RepoCardButton
      href={`https://github.com/md-y/${repo}`}
      icon={<FaGithub size="md" />}
      hovertext="View Repository on Github"
    />
  )
}

export default GithubButton
