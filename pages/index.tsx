import { Container, Grid, SimpleGrid } from "@mantine/core"
import { Octokit } from "@octokit/rest"
import type { GetStaticProps, NextPage } from "next/types"
import type { Repo } from "../common/types"
import RepoCard from "../components/RepoCard"

type Props = {
  repos: Repo[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const octokit = new Octokit()
  const repos = await octokit.request("GET /users/{username}/repos", {
    username: "md-y",
  })

  return {
    props: {
      repos: repos.data,
    },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  const repos = props.repos.sort(
    (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
  )
  const columnA = repos.filter((_, i) => i % 2 == 0)
  const columnB = repos.filter((_, i) => i % 2 == 1)

  return (
    <Container my="md">
      <Grid>
        <Grid.Col md={6}>
          {columnA.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </Grid.Col>
        <Grid.Col md={6}>
          {columnB.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default IndexPage
