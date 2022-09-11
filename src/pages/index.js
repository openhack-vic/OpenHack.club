import * as React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import shuffle from "lodash.shuffle";

import "../global.css";
import "../fonts.css";

import Logo from "../components/Logo";
import AltLogo from "../components/AltLogo";
import Box from "../components/Box";
import Content from "../components/Content";
import Page from "../components/Page";
import Container from "../components/Container";

const MainLogoWrap = styled.div`
  max-width: 360px;
`;

const allThemes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const IndexPage = () => {
  const [themes, setThemes] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const [one, two, three, four, five, six, seven, eight, nine] = themes;

  const shuffleColours = () => setThemes(() => shuffle(allThemes));

  useEffect(() => {
    shuffleColours()
  }, [0])

  return (
    <Page>
      <Container span={2}>
        <MainLogoWrap>
          <Logo theme={one} />
        </MainLogoWrap>
      </Container>

      <Container span={4}>
        <Box theme={two}>
          <Content>
            <p>
              OpenHack Victoria is a casual meetup for programmers of all
              experience levels. Whether you're an industry veteran or looking
              for your first job as a software developer, come join us at
              OpenHack. We're one of the longest continuously running software
              meetups in Victoria, having started almost ten years ago. We still
              meet weekly, providing a place for software developers to hang
              out, hack on side projects, and meet others in the industry.
            </p>

            <p>
              You can{" "}
              <a href="#" onClick={shuffleColours}>
                shuffle
              </a>{" "}
              the colours.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={2}>
        <Box theme={three}>
          <Content>
            <h1>Format</h1>

            <ul>
              <li>We do introductions at 6:15pm sharp!</li>
              <li>Bring your laptop!</li>
              <li>
                Work on anything you want: open-source, closed-source,
                side-projects, work, play.
              </li>
              <li>All experience levels and technologies are welcome.</li>
              <li>
                Food and drinks are available from the restaurant, but are not
                provided.
              </li>
              <li>Follow our code of conduct! (See below)</li>
            </ul>
          </Content>
        </Box>
      </Container>

      <Container span={2}>
        <Box theme={four}>
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
              the group is active.
            </p>
          </Content>
        </Box>
      </Container>

      <Container span={2}>
        <Box theme={five}>
          <Content>
            <h1>Links</h1>

            <ul>
              <li>
                Join the{" "}
                <a href="https://discord.gg/jRbukPPEfH" target="_blank">
                  Discord server
                </a>
              </li>
              <li>
                Follow{" "}
                <a href="https://twitter.com/openhackvic" target="_blank">
                  our Twitter account
                </a>{" "}
                for updates
              </li>
              <li>
                RSVP on{" "}
                <a
                  href="https://www.meetup.com/openhack-victoria/"
                  target="_blank"
                >
                  Meetup.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jardonamron" target="_blank">
                  Jared
                </a>{" "}
                is the current organizer
              </li>
              <li>
                OpenHack Victoria is sponsored by{" "}
                <a href="https://supergood.software" target="_blank">
                  Super Good
                </a>
              </li>
            </ul>
          </Content>
        </Box>
      </Container>

      <Container span={3}>
        <Box theme={six}>
          <Content>
            <h1>What is "OpenHack"?</h1>
            <p>
              OpenHack is a family of meetups put forward by{" "}
              <a href="https://twitter.com/qrush" target="_blank">
                qrush
              </a>{" "}
              (Nick Quaranto) in a lightning talk at RailsConf 2013.{" "}
              <a href="https://github.com/cbrunsdon" target="_blank">
                Clarke Brunsdon
              </a>
              , a local software developer and entrepreneur, brought the idea
              back to Victoria and started our OpenHack chapter.
            </p>

            <p>
              The first lightning talk in this video goes over the original
              concept for OpenHack. Almost ten years later, Victoria OpenHack
              remains one of the few OpenHack chapters that's still running.
            </p>
          </Content>
        </Box>
      </Container>
      <Container span={3}>
        <Box theme={seven} padding={false}>
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
        <Box theme={eight}>
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
        <div style={{ maxWidth: 360 }}>
          <AltLogo theme={nine} />
        </div>
      </Container>
    </Page>
  );
};

export default IndexPage;
