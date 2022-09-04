import { Badge } from "@mantine/core"
import React from "react"

const LanguageList: React.FC<{ languages: string[] }> = ({ languages }) => {
  return (
    <>
      {languages.map((lang, i) => (
        <Badge color={lang.toLowerCase()} variant="light" key={lang + i}>
          {lang}
        </Badge>
      ))}
    </>
  )
}

export default LanguageList
