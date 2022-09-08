import { Modal, UnstyledButton } from "@mantine/core"
import React, { useState } from "react"

const YoutubeModal: React.FC<{
  title: string
  id: string
  children: React.ReactNode
}> = ({ title, id, children }) => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xl"
        title={title}
      >
        {opened && (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
            allowFullScreen
            style={{
              border: "none",
              marginTop: "1em",
              width: "100%",
              aspectRatio: "16/9",
            }}
          />
        )}
      </Modal>

      <UnstyledButton onClick={() => setOpened(true)}>
        {children}
      </UnstyledButton>
    </>
  )
}

export default YoutubeModal
