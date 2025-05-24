import React, { useRef } from "react";
import styled, { useTheme } from "styled-components";

// Section wrapper
const Section = styled.section`
  width: calc(100vw - 80px); /* Subtract navbar width */
  min-height: 100vh;
  margin-left: 80px; /* Offset for navbar */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ bg }) => bg || "transparent"};
  transition: background 0.3s;
  padding: 0; /* Remove extra padding */
`;

const GlassCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  backdrop-filter: blur(12px);
  padding: 2.5rem 3rem 2rem 3rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  border: none; /* Remove debugging border */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    max-width: 90vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.3rem 0.8rem 0.8rem 0.8rem;
  }
`;

const BigTitle = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  margin-bottom: 0.7em;
  font-weight: 700;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const About = styled.p`
  color: #ffd5db;
  margin-bottom: 1.4rem;
  font-weight: 400;
  font-size: 1.1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const NavRow = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.7rem;
  }
`;

const NavButton = styled.button`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  padding: 0.85em 1.7em;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.07rem;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background 0.18s, color 0.18s, border 0.18s, box-shadow 0.18s;
  box-shadow: 0 2px 12px rgba(255,76,104,0.12);
  cursor: pointer;
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.buttonHoverBg};
    color: ${({ theme }) => theme.colors.buttonHoverText};
    border-color: ${({ theme }) => theme.colors.buttonHoverBg};
    box-shadow: 0 4px 18px rgba(255,76,104,0.20);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.65em 1em;
    font-size: 1rem;
  }
`;

// Simple gallery grid
const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const GalleryItem = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  padding: 1rem;
  min-width: 180px;
  min-height: 120px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 12px rgba(255,76,104,0.08);
  text-align: center;
  font-size: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 110px;
    min-height: 70px;
    font-size: 0.9rem;
  }
`;

// Contact info
const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 15px;
  padding: 1.2rem 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 380px;
  box-shadow: 0 2px 12px rgba(255,76,104,0.10);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.8rem 0.6rem;
    max-width: 95vw;
    font-size: 0.97rem;
  }
`;

const Navbar = styled.nav`
  width: 80px; /* Fixed width for the vertical navbar */
  height: 100vh; /* Full height */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0; /* Remove extra padding */
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }

  svg {
    font-size: 1.5rem;
  }
`;

export default function Home() {
  const theme = useTheme();
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = ref => ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw", width: "100vw", background: theme.colors.bg, margin: 0, padding: 0 }}>
    

      {/* Navbar */}
      <Navbar>
        {/* Logo */}
        <Logo src="/logo.png" alt="MUN Logo" />

        {/* Navigation Links */}
        <NavLinks>
          <NavLink theme={theme} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 3.293l6 6V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.707l6-6zM7 1.5a1 1 0 0 1 2 0v1.293l6.707 6.707A1 1 0 0 1 15 10.5V13a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2.5a1 1 0 0 1 .293-.707L7 2.793V1.5z" />
            </svg>
            Home
          </NavLink>
          <NavLink theme={theme} onClick={() => scrollTo(aboutRef)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 12a5 5 0 1 1 0-10A5 5 0 0 1 8 13z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 4zm0 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z" />
            </svg>
            About
          </NavLink>
          <NavLink theme={theme} onClick={() => scrollTo(contactRef)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3zm0 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 4zm0 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z" />
            </svg>
            Contact
          </NavLink>
          <NavLink theme={theme}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 4zm0 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z" />
            </svg>
            Theme
          </NavLink>
        </NavLinks>
      </Navbar>

      {/* Hero/Welcome Section */}
      <Section>
        <GlassCard>
          <BigTitle>Welcome to the MUN Society Portal!</BigTitle>
          <About>
            Explore the world of Model United Nations at our university.<br />
            Stay informed about upcoming events, view our gallery of achievements, or contact our team.
          </About>
          <NavRow>
            <NavButton onClick={() => scrollTo(aboutRef)}>About</NavButton>
            <NavButton onClick={() => scrollTo(eventsRef)}>Events</NavButton>
            <NavButton onClick={() => scrollTo(galleryRef)}>Gallery</NavButton>
            <NavButton onClick={() => scrollTo(contactRef)}>Contact</NavButton>
          </NavRow>
        </GlassCard>
        {/* Add the 3D Globe */}
      </Section>

      {/* About Section */}
      <Section ref={aboutRef} bg="#3c0d22">
        <SectionTitle>About Us</SectionTitle>
        <GlassCard>
          <About>
            Established in 2023, our Model United Nations society is dedicated to empowering students with global awareness and leadership skills. Our mission centers on diplomacy, research, and debate, preparing future leaders to tackle real-world challenges.
          </About>
        </GlassCard>
      </Section>

      {/* Events Section */}
      <Section ref={eventsRef} bg="#571229">
        <SectionTitle>Events</SectionTitle>
        <GlassCard>
          <About>
            <b>Upcoming: MUN Edition III (Sept 2025)</b><br />
            - International conference simulation<br />
            - Crisis committees, workshops, and guest speakers<br />
            <br />
            <b>Past Highlights:</b><br />
            - Edition II: 200+ delegates, 5 committees<br />
            - Guest keynote: Ex-UN diplomat<br />
            - Social evenings, awards, and more!
          </About>
        </GlassCard>
      </Section>

      {/* Gallery Section */}
      <Section ref={galleryRef} bg="#6a1632">
        <SectionTitle>Gallery</SectionTitle>
        <GalleryGrid>
          <GalleryItem>🏅 Best Delegate 2025<br />Ananya Sharma</GalleryItem>
          <GalleryItem>🌍 Opening Ceremony<br />Edition II</GalleryItem>
          <GalleryItem>🎤 Guest Speaker<br />Mr. A. Menon (UN)</GalleryItem>
          <GalleryItem>🤝 Social Night</GalleryItem>
        </GalleryGrid>
      </Section>

      {/* Contact Section */}
      <Section ref={contactRef} bg="#7a1b3d">
        <SectionTitle>Contact</SectionTitle>
        <ContactCard>
          <div><b>Email:</b> mun.society@example.com</div>
          <div><b>Instagram:</b> @mun_society_univ</div>
          <div><b>Faculty Advisor:</b> Dr. R. Sen</div>
          <div style={{ marginTop: "1.1rem" }}>
            <NavButton as="a" href="mailto:mun.society@example.com">Email Us</NavButton>
          </div>
        </ContactCard>
      </Section>
    </div>
  );
}