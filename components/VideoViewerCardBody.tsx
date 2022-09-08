import { Text, Image, Group } from "@mantine/core"
import { FaFire } from "react-icons/fa"
import RepoCardButton from "./RepoCardButton"
import BadgeList from "./BadgeList"
import RepoCardFooter from "./RepoCardFooter"
import YoutubeModal from "./YoutubeModal"

const VideoViewerCard: React.FC = () => {
  return (
    <>
      <Text>A Spigot plugin that allows video playback on entities.</Text>

      <YoutubeModal id="dAN99kQACi8" title="In-Game Demo">
        <Group pr="10%" mt="1em">
          <Image src="videoviewerthumb.svg" alt="Play YouTube Video" />
        </Group>
      </YoutubeModal>

      <RepoCardFooter>
        <RepoCardButton
          href="https://www.curseforge.com/minecraft/bukkit-plugins/videoviewer"
          icon={<FaFire size="md" color="#FFCCBC" />}
          hovertext="View on CurseForge"
        />
        <BadgeList badges={["java"]} />
      </RepoCardFooter>
    </>
  )
}

export default VideoViewerCard
