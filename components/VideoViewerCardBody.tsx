import { Group, Text } from "@mantine/core"
import { FaFire } from "react-icons/fa"
import GithubButton from "./GithubButton"
import RepoCardButton from "./RepoCardButton"
import LanguageList from "./LanguageList"
import RepoCardFooter from "./RepoCardFooter"

const VideoViewerCard: React.FC = () => {
  return (
    <>
      <Group position="apart">
        <Text weight={700}>videoviewer</Text>
      </Group>

      <Text>A Spigot plugin that allows video playback on entities.</Text>

      <iframe
        src="https://www.youtube.com/embed/dAN99kQACi8?modestbranding=1&rel=0"
        allowFullScreen
        style={{ border: "none", marginTop: "1em" }}
      />

      <RepoCardFooter>
        <GithubButton repo="videoviewer" />
        <RepoCardButton
          href="https://www.curseforge.com/minecraft/bukkit-plugins/videoviewer"
          icon={<FaFire size="md" />}
          hovertext="View on CurseForge"
        />
        <LanguageList languages={["java"]} />
      </RepoCardFooter>
    </>
  )
}

export default VideoViewerCard
