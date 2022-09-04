import { Button, Center, Group } from "@mantine/core"
import type { NextPage } from "next/types"

const Page404: NextPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>How&apos;d you end up here?</h1>
      <h1>404</h1>
      <Button
        component="a"
        href="https://md-y.github.io"
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Back to safety
      </Button>
    </div>
  )
}

export default Page404
