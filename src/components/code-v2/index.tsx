"use client"

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Box, Text } from "@chakra-ui/react";

export default function CodeV2 ({ code="2", language="javascript", lineNumbers=0 }: any) {

 
  const codeText = " console.log(32)";
  
  const piecesOfCode: any = ["console",".","log"]
  const piecesOfCode2: any = [
    {
      color: 'red',
      value: 'console'
    },
    {
      color: 'blue',
      value: '.'
    },
    {
      color: 'orange',
      value: 'log'
    },
    {
      color: 'blue',
      value: '('
    },
    {
      color: 'pink',
      value: '23'
    },
    {
      color: 'blue',
      value: ')'
    }
  ]

  return (
    <Box>
      {piecesOfCode2.map((piece: any) => <Text fontFamily={"Source Code Pro"} fontWeight={500} fontSize={16} as="span" color={piece.color}>{piece.value}</Text>)}
    </Box>
  )
}
