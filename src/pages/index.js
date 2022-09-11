import * as React from "react";
import "../global.css";
import "../fonts.css";
import Logo from "../components/Logo";
import AltLogo from "../components/AltLogo";
import Box from "../components/Box";
import Content from "../components/Content";

import randomTheme from "../randomTheme";

import Page from "../components/Page";
import Container from "../components/Container";

const Header = styled.header`
  grid-column-start: span 6;
  max-height: 100%;
`;

const IndexPage = () => {
  return (
    <Page>
      <Header>
        <Logo theme={1} />
      </Header>

      <Container span={6}>
        <Box theme="2">
          <Content>
            <h1>About OpenHack</h1>
            <p>
              OpenHack Victoria is a casual meetup for software developers,
              hobbyists, and anyone interested software development. We're one
              of the longest continuously running software meetups in Victoria
              (the one in British Columbia, not Australia), having started
              almost ten years ago. We still meet weekly, providing a venue for
              software developers to hang out, hack on side project, and meet
              others in the industry.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={3}>
        <Box theme="3">
          <Content>
            <h1>Format</h1>

            <p>
              The short version: bring your laptop and work on whatever you
              want.
            </p>

            <p>The details:</p>

            <ul>
              <li>We do introductions at 6:15pm.</li>
              <li>Don’t forget to bring a computer!</li>
              <li>
                Work on anything you want: open-source, closed-source, side
                projects, work, play.
              </li>
              <li>All experience levels and technologies are welcome.</li>
            </ul>
          </Content>
        </Box>
      </Container>

      <Container span={3}>
        <Box theme="4">
          <Content>
            <h1>When/Where</h1>
            <p>
              We meet at 6pm, every Tuesday at James Joyce Bistro, which is the
              restaurant in{" "}
              <a href="https://goo.gl/maps/jz692DVt5Rs3C4vZ9" target="_blank">
                Peacock Billiards
              </a>
              .
            </p>

            <p>
              Please join the{" "}
              <a
                href="https://www.meetup.com/openhack-victoria/"
                target="_blank"
              >
                Meetup Group
              </a>{" "}
              and RSVP to the events if you're coming! It helps show others that
              the group is active. (It's not uncommon for to have only a couple
              RSVPs, but an attendance of fifteen or twenty people.)
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={2}>
        <Box theme={5}>
          <Content>
            <h1>What is "OpenHack"?</h1>
            <p>
              OpenHack is a family of meetups proposed by{" "}
              <a href="https://twitter.com/qrush" target="_blank">
                qrush
              </a>{" "}
              (Nick Quaranto) in a lightning talk at RailsConf 2013.{" "}
              <a href="https://github.com/cbrunsdon" target="_blank">
                Clarke Brunsdon
              </a>
              , a local software developer and entrepreneur, brought the idea
              back to Victoria and started OpenHack Victoria.
            </p>

            <p>
              The first lightning talk in this video goes over the original
              concept for OpenHack. Almost ten years later, Victoria OpenHack
              remains one of the few OpenHack chapters that's still alive.
            </p>
          </Content>
        </Box>
      </Container>
      <Container span={4}>
        <Box theme={6} padding={false}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: 30,
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: 9,
              }}
              src="https://www.youtube.com/embed/4T24oUPPaFI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Box>
      </Container>

      <Container span={4}>
        <Box theme={7}>
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

      <Container span={2}>
        <AltLogo theme={8} />
      </Container>
    </Page>
  );
};

export default IndexPage;
