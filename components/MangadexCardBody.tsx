import { Group, Text, Image } from "@mantine/core"
import { FaStar } from "react-icons/fa"
import CountUp from "react-countup"
import RepoCardButton from "./RepoCardButton"
import { Repo } from "../common/types"
import BadgeList from "./BadgeList"
import RepoCardFooter from "./RepoCardFooter"

const MangadexCard: React.FC<{ repo: Repo }> = ({ repo }) => {
  return (
    <>
      <Text>
        An unofficial Mangadex API wrapper built with the official JSON API.
      </Text>

      {repo.stargazers_count !== undefined && (
        <Group mt="1em">
          <FaStar />
          <CountUp end={repo.stargazers_count} suffix=" stars" duration={4} />
        </Group>
      )}

      <RepoCardFooter>
        <RepoCardButton
          href="https://md-y.github.io/mangadex-full-api/"
          icon={<Image src="mangadex.svg" alt="" width="2em" />}
          hovertext="View Documentation"
        />
        <BadgeList badges={["javascript", "node"]} />
      </RepoCardFooter>
    </>
  )
}

export default MangadexCard
