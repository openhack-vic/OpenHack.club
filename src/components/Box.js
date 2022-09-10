import * as React from "react"
import styled from "@emotion/styled"

const BoxOuter = styled.div`
  --spacing: 1.25rem;
  background-color: var(--theme-${({theme}) => theme}-primary);
  border-radius: 1rem;
  margin-top: var(--spacing);
  margin-left: var(--spacing);
  position: relative;
`

const BoxInner = styled.div`
  color: var(--theme-${({theme}) => theme}-primary);
  background-color: var(--theme-${({theme}) => theme}-fill);
  border: 8px solid var(--theme-${({theme}) => theme}-primary);
  border-radius: 1rem;
  position: relative;
  top: calc(-1 * var(--spacing));
  left: calc(-1 * var(--spacing));
  padding: 1rem;
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
