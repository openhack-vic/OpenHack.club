import * as React from "react"
import styled from "@emotion/styled"

import AltLogoSVG from "../images/OpenHackAlt.svg"

const AltLogoWrap = styled.div`
  --logo-primary: ${({primaryColor}) => primaryColor};
  --logo-fill: ${({fillColor}) => fillColor};
`

const AltLogo = () => {
  return(
  <AltLogoWrap primaryColor="#00aaaa" fillColor="#aaff00">
    <AltLogoSVG/>
  </AltLogoWrap>
  )
}

export default AltLogo
