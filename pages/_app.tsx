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
            "jupyter notebook": [
              "#E0F7FA",
              "#B2EBF2",
              "#80DEEA",
              "#4DD0E1",
              "#26C6DA",
              "#00BCD4",
              "#00ACC1",
              "#0097A7",
              "#00838F",
              "#006064",
            ],
            fork: [
              "#ECEFF1",
              "#CFD8DC",
              "#B0BEC5",
              "#90A4AE",
              "#78909C",
              "#607D8B",
              "#546E7A",
              "#455A64",
              "#37474F",
              "#263238",
            ],
            archived: [
              "#FFEBEE",
              "#FFCDD2",
              "#EF9A9A",
              "#E57373",
              "#EF5350",
              "#F44336",
              "#E53935",
              "#D32F2F",
              "#C62828",
              "#B71C1C",
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
