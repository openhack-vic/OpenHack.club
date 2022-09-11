import * as React from "react";
import styled from "@emotion/styled";

import Logo from "./Logo";
import AltLogo from "./AltLogo";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 8rem repeat(auto-fit, auto);
  gap: 2rem;
  padding: 1rem;
  max-width: 64rem;
  margin: 0 auto;
`;

const Header = styled.header`
  grid-column-start: span 6;
  max-height: 100%;
`;

const Footer = styled.footer`
  grid-column-start: span 6;
  max-height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const Page = ({ children }) => {
  return (
    <Wrap>
      <Header>
        <Logo theme={1} />
      </Header>
      {children}
      <Footer>
        <AltLogo theme={2} />
      </Footer>
    </Wrap>
  );
};

export default Page;
