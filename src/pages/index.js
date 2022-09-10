import * as React from "react";
import "../global.css";
import "../fonts.css";
import Logo from "../components/Logo";
import AltLogo from "../components/AltLogo";
import Box from "../components/Box";
import Content from "../components/Content";

import Page from "../components/Page";
import Container from "../components/Container";

const IndexPage = () => {
  return (
    <Page>
      <Container span={3}>
        <Box theme="4">
          <Content>
            <h1>Title</h1>
            <p>
              Aberration type ability modifier acid effects attack cast a spell
              charisma cure spell elf domain fire domain frightful presence
              goblinoid subtype good subtype heat dangers inflict spell living
              luck bonus native subtype nonplayer character renewal domain
              spider domain subschool supernatural ability temporary hit points
              turning check water subtype.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={1}>
        <Box theme="7">
          <Content>
            <h1>Title</h1>
            <p>
              Aberration type ability modifier acid effects attack cast a spell
              charisma cure spell elf domain fire domain frightful presence
              goblinoid subtype good subtype heat dangers inflict spell living
              luck bonus native subtype nonplayer character renewal domain
              spider domain subschool supernatural ability temporary hit points
              turning check water subtype.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={1}>
        <Box theme="6">
          <Content>
            <h1>Title</h1>
            <p>
              Aberration type ability modifier acid effects attack cast a spell
              charisma cure spell elf domain fire domain frightful presence
              goblinoid subtype good subtype heat dangers inflict spell living
              luck bonus native subtype nonplayer character renewal domain
              spider domain subschool supernatural ability temporary hit points
              turning check water subtype.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={1}>
        <Box theme="5">
          <Content>
            <h1>Title</h1>
            <p>
              Aberration type ability modifier acid effects attack cast a spell
              charisma cure spell elf domain fire domain frightful presence
              goblinoid subtype good subtype heat dangers inflict spell living
              luck bonus native subtype nonplayer character renewal domain
              spider domain subschool supernatural ability temporary hit points
              turning check water subtype.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={3}>
        <Box theme={8}>
          <Content>
            <h1>Code of Conduct</h1>

            <p>
              OpenHack Victoria is dedicated to providing a respectful,
              harassment-free community for everyone. We do not tolerate
              harassment or bullying of any community member in any form. This
              extends to everyone attending OpenHack Victoria events.
            </p>

            <p>
              Harassment includes offensive verbal/electronic comments related
              to personal characteristics or choices, sexual images or comments
              in public or online spaces, deliberate intimidation, bullying,
              stalking, following, harassing photography or recording, sustained
              disruption of talks, IRC chats, electronic meetings, physical
              meetings or other events, inappropriate physical contact, or
              unwelcome sexual attention. Participants asked to stop any
              harassing or bullying behavior are expected to comply immediately.
            </p>

            <p>
              If a participant engages in harassing behavior, representatives of
              the community may take reasonable action they deem appropriate,
              including warning the offender, expulsion from any OpenHack
              Victoria event, or expulsion from the Discord server, Slack
              channels and other electronic communications channels to resolve
              the issue. This may include expulsion from OpenHack Victoria
              Meetup group itself.
            </p>

            <p>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please act to intercede or
              ask for help from any member of the OpenHack Victoria community,
              IRC chat admins, website admins, or organizers/representatives of
              any physical events put on under the auspices of OpenHack
              Victoria.
            </p>

            <p>
              This Code of Conduct has been adapted from the{" "}
              <a href="http://plone.org/foundation/materials/foundation-resolutions/code-of-conduct">
                Plone Foundation
              </a>{" "}
              and is licensed under a{" "}
              <a href="http://creativecommons.org/licenses/by-sa/3.0/">
                Creative Commons Attribution-Share Alike 3.0 Unported license
              </a>
            </p>
          </Content>
        </Box>
      </Container>
    </Page>
  );
};

export default IndexPage;
