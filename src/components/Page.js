import * as React from "react";
import styled from "@emotion/styled";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 8rem;
  gap: 2rem;
  padding: 1rem;
  max-width: 64rem;
  margin: 0 auto;
`;

const Page = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Page;
