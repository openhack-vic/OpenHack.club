import * as React from "react"
import styled from "@emotion/styled"

import LogoSVG from "../images/OpenHack.svg"

const LogoWrap = styled.div`
  --logo-primary: var(--theme-${({theme}) => theme}-primary);
  --logo-fill: var(--theme-${({theme}) => theme}-fill);
`

const Logo = ({theme}) => {
  return(
    <LogoWrap theme={theme}>
      <LogoSVG/>
    </LogoWrap>
  )
}

export default Logo
