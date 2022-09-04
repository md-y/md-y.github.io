import { Group, Text, Image } from "@mantine/core"
import { FaBook, FaStar } from "react-icons/fa"
import CountUp from "react-countup"
import GithubButton from "./GithubButton"
import RepoCardButton from "./RepoCardButton"
import { Repo } from "../common/types"
import LanguageList from "./LanguageList"
import RepoCardFooter from "./RepoCardFooter"

const MangadexCard: React.FC<{ repo: Repo }> = ({ repo }) => {
  return (
    <>
      <Group position="apart">
        <Text weight={700}>mangadex-full-api</Text>
        <Group>
          <Image src="mangadex.svg" alt="" />
        </Group>
      </Group>

      <Text>
        An unofficial Mangadex API wrapper built with the official JSON API.
      </Text>

      {repo.stargazers_count !== undefined && (
        <Group mt="1em">
          <FaStar />
          <CountUp end={repo.stargazers_count} suffix=" stars!" />
        </Group>
      )}

      <RepoCardFooter>
        <GithubButton repo="mangadex-full-api" />
        <RepoCardButton
          href="https://md-y.github.io/mangadex-full-api/"
          icon={<FaBook size="md" />}
          hovertext="View Documentation"
        />
        <LanguageList languages={["javascript", "node"]} />
      </RepoCardFooter>
    </>
  )
}

export default MangadexCard
