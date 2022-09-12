import styled from "@emotion/styled";

import LogoSVG from "../images/OpenHack.svg";

const Logo = styled(LogoSVG)`
  --logo-primary: var(--theme-${({ theme }) => theme}-primary);
  --logo-fill: var(--theme-${({ theme }) => theme}-fill);
  display: block;
  max-height: 100%;
`;

export default Logo;
