import * as React from "react"
import styled from "@emotion/styled"

import Logo from "./Logo"

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 8rem auto;
  gap: 1rem;
  padding: 1rem;
  max-width: 54rem;
  margin: 0 auto;
`

const Header = styled.div`
  grid-column-start: span 3;
  max-height: 100%;
`

const Page = ({children}) => {
  return (
    <Wrap>
      <Header>
        <Logo theme={1} />
      </Header>
      {children}
    </Wrap>
  )
}

export default Page
