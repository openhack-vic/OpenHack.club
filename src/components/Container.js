import * as React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  grid-column-start: span ${({span}) => span};
`

export default Container
