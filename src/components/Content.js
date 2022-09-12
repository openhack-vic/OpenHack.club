import styled from "@emotion/styled"

const Content = styled.div`
  line-height: 1.4;

  * {
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.125rem;
  }

  a {
    color: inherit;
    font-weight: bold;
  }

  ul {
    padding-left: 0rem;
    list-style-type: none;

    li:before {
      content: "→ ";
    }
  }

  li + li {
    margin-top: 0.625rem;
  }
`

export default Content
