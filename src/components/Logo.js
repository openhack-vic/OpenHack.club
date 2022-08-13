import * as React from "react"
import styled from "@emotion/styled"

import LogoSVG from "../images/OpenHack.svg"

const LogoWrap = styled.div`
  --logo-primary: ${({primaryColor}) => primaryColor};
  --logo-fill: ${({fillColor}) => fillColor};
`

const Logo = () => {
  return(
  <LogoWrap primaryColor="#00aaaa" fillColor="#aaff00">
    <LogoSVG/>
  </LogoWrap>
  )
}

export default Logo
