import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>m;dy</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            javascript: [
              "#FFFDE7",
              "#FFF9C4",
              "#FFF59D",
              "#FFF176",
              "#FFEE58",
              "#FFEB3B",
              "#FDD835",
              "#FBC02D",
              "#F9A825",
              "#F57F17",
            ],
            node: [
              "#E8F5E9",
              "#C8E6C9",
              "#A5D6A7",
              "#81C784",
              "#66BB6A",
              "#4CAF50",
              "#43A047",
              "#388E3C",
              "#2E7D32",
              "#1B5E20",
            ],
            java: [
              "#FFF3E0",
              "#FFE0B2",
              "#FFCC80",
              "#FFB74D",
              "#FFA726",
              "#FF9800",
              "#FB8C00",
              "#F57C00",
              "#EF6C00",
              "#E65100",
            ],
            typescript: [
              "#E3F2FD",
              "#BBDEFB",
              "#90CAF9",
              "#64B5F6",
              "#42A5F5",
              "#2196F3",
              "#1E88E5",
              "#1976D2",
              "#1565C0",
              "#0D47A1",
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
