import * as React from "react"
import styled from "@emotion/styled"

const BoxOuter = styled.div`
  background-color: var(--theme-${({theme}) => theme}-primary);
  border-radius: 16px;
  margin-top: 16px;
  margin-left: 16px;
  position: relative;
`

const BoxInner = styled.div`
  color: var(--theme-${({theme}) => theme}-primary);
  background-color: var(--theme-${({theme}) => theme}-fill);
  border: 8px solid var(--theme-${({theme}) => theme}-primary);
  border-radius: 16px;
  position: relative;
  top: -16px;
  left: -16px;
  padding: 16px;
`

const Box = ({children, theme}) => {
  return(
    <BoxOuter theme={theme}>
      <BoxInner theme={theme}>
        {children}
      </BoxInner>
    </BoxOuter>
  )
}

export default Box
