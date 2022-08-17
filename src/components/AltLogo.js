import * as React from "react"
import styled from "@emotion/styled"

import AltLogoSVG from "../images/OpenHackAlt.svg"

const AltLogoWrap = styled.div`
  --logo-primary: var(--theme-${({theme}) => theme}-primary);
  --logo-fill: var(--theme-${({theme}) => theme}-fill);
`

const AltLogo = ({theme}) => {
  return(
    <AltLogoWrap theme={theme}>
      <AltLogoSVG/>
    </AltLogoWrap>
  )
}

export default AltLogo
