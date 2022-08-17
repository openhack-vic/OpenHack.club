import * as React from "react"
import "../global.css"
import "../fonts.css"
import Logo from "../components/Logo"
import AltLogo from "../components/AltLogo"

const IndexPage = () => {
  return (
    <>
      <div style={{display: "flex"}}>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="1"/>
          <AltLogo theme="1"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="2"/>
          <AltLogo theme="2"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="3"/>
          <AltLogo theme="3"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="4"/>
          <AltLogo theme="4"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="5"/>
          <AltLogo theme="5"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="6"/>
          <AltLogo theme="6"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="7"/>
          <AltLogo theme="7"/>
        </div>
        <div style={{flex: 1, padding: "1em"}}>
          <Logo theme="8"/>
          <AltLogo theme="8"/>
        </div>
      </div>
    </>
  )
}

export default IndexPage
