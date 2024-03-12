"use client"

import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

interface CodeProps {
  code: string
  language: string
}

export default function Code ({ code, language }: CodeProps) {
  return (
     <CopyBlock 
      text={code}
      wrapLongLines
      language={language}
      showLineNumbers={true}
      theme={dracula}
    /> 
  )
}
