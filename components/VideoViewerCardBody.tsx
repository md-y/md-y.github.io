import { Text } from "@mantine/core"
import { FaFire } from "react-icons/fa"
import RepoCardButton from "./RepoCardButton"
import BadgeList from "./BadgeList"
import RepoCardFooter from "./RepoCardFooter"

const VideoViewerCard: React.FC = () => {
  return (
    <>
      <Text>A Spigot plugin that allows video playback on entities.</Text>

      <iframe
        src="https://www.youtube.com/embed/dAN99kQACi8?modestbranding=1&rel=0"
        allowFullScreen
        style={{ border: "none", marginTop: "1em" }}
      />

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
