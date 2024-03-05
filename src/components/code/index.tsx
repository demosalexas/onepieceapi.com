"use client"

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Box, Code as ChakraCode } from "@chakra-ui/react";

export default function Code ({ code, language, lineNumbers }: any) {
  const ref = useRef<HTMLPreElement>(null)

  useEffect(() => {
    lineNumbers && ref.current?.setAttribute('data-line', `${lineNumbers}`)
    Prism.highlightAll()
  })

  return (
    <Box>
      <pre ref={ref}>
        <ChakraCode className={`language-${language}`}>{code}</ChakraCode>
      </pre>
    </Box>
  )
}
