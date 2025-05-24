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

  @media (max-width: 768px) { /* Tablet screens */
    margin-left: 0; /* Remove navbar offset */
    width: 100vw;
    padding: 1rem;
  }
`;

const GlassCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  backdrop-filter: blur(12px);
  padding: 2.5rem 3rem 2rem 3rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 8rem;
  border: none; /* Remove debugging border */

  @media (max-width: 768px) { /* Tablet screens */
    padding: 2rem 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 480px) { /* Mobile screens */
    padding: 1.5rem 1rem;
    max-width: 95%;
  }
`;

const GlassCardHome = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0 0 50% 50%; /* Proper semi-circle shape */
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  backdrop-filter: blur(12px);
  padding: 3rem 4rem; /* Adjust padding for content */
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  width: 100%; /* Full width for alignment */
  height: 300px; /* Adjust height for semi-circle */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2; /* Ensure it stays above the next section */

  @media (max-width: 768px) { /* Tablet screens */
    padding: 2.5rem 2rem;
    height: 250px; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) { /* Mobile screens */
    padding: 2rem 1.5rem;
    height: 200px; /* Adjust height for mobile */
  }
`;

const BigTitle = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  margin-bottom: 0.7em;
  font-weight: 700;

  @media (max-width: 768px) { /* Tablet screens */
    font-size: 1.8rem;
  }

  @media (max-width: 480px) { /* Mobile screens */
    font-size: 1.4rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) { /* Tablet screens */
    font-size: 1.6rem;
  }

  @media (max-width: 480px) { /* Mobile screens */
    font-size: 1.2rem;
  }
`;

const About = styled.p`
  color: #ffd5db;
  margin-bottom: 1.4rem;
  font-weight: 400;
  font-size: 1.1rem;

  @media (max-width: 768px) { /* Tablet screens */
    font-size: 1rem;
  }

  @media (max-width: 480px) { /* Mobile screens */
    font-size: 0.9rem;
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
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: ${({ theme }) => theme.colors.navbarBg || "#7a1b3d"}; /* Reddish background */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  @media (max-width: 768px) { /* Tablet screens */
    padding: 0 1rem;
  }

  @media (max-width: 480px) { /* Mobile screens */
    flex-direction: column;
    height: auto;
    padding: 0.5rem 1rem;
  }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease-in-out;
  }

  span {
    color: ${({ theme }) => theme.colors.text || "#ffd5db"}; /* Light pink text */
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.text || "#ffd5db"}; /* Light pink text */
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent || "#ffcccb"}; /* Highlight color */
    }
  }

  @media (max-width: 480px) { /* Mobile screens */
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const NavLinksOld = styled.div`
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

const FadeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bg || "#002855"}; /* Match site background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};

  img {
    width: 100px;
    height: 100px;
    animation: fadeInOut 2s ease-in-out;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;

export default function Home() {
  const theme = useTheme();
  const [isLogoVisible, setIsLogoVisible] = React.useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoVisible(false);
      setIsNavbarVisible(true); // Show navbar after logo fades out
    }, 2000); // Show the logo for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = ref => ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Fade-In/Fade-Out Logo */}
      <FadeWrapper isVisible={isLogoVisible}>
        <img src="/logo.png" alt="MUN Logo" />
      </FadeWrapper>

      {/* Navbar */}
      <Navbar isVisible={isNavbarVisible}>
        <NavLogo>
          <img src="/logo.png" alt="MUN Logo" />
          <span>DSU MUNSOC</span>
        </NavLogo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#dsmun">DSUMUN-II</a>
          <a href="#events">Events</a>
          <a href="#secretariat">The Secretariat</a>
          <a href="#contact">Contact</a> {/* New Contact Link */}
        </NavLinks>
      </Navbar>

      {/* Main Content */}
      <div style={{ minHeight: "100vh", minWidth: "100vw", width: "100vw", background: theme.colors.bg, margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <Section id="home">
          <GlassCardHome>
            <BigTitle>Welcome to the MUN Society Portal!</BigTitle>
            <About>
              Explore the world of Model United Nations at our university.<br />
              Stay informed about upcoming events, view our gallery of achievements, or contact our team.
            </About>
          </GlassCardHome>
        </Section>

        {/* Other Sections */}
        <Section id="dsmun" bg="#3c0d22">
          <SectionTitle>DSUMUN-II</SectionTitle>
          <GlassCard>
            <About>
              Details about DSUMUN-II, including dates, committees, and registration information.
            </About>
          </GlassCard>
        </Section>

        <Section id="events" bg="#571229">
          <SectionTitle>Events</SectionTitle>
          <GlassCard>
            <About>
              Information about upcoming and past events organized by the MUN Society.
            </About>
          </GlassCard>
        </Section>

        <Section id="secretariat" bg="#6a1632">
          <SectionTitle>The Secretariat</SectionTitle>
          <GlassCard>
            <About>
              Meet the team behind DSU MUNSOC, including faculty advisors and student leaders.
            </About>
          </GlassCard>
        </Section>

        {/* Contact Section */}
        <Section id="contact" bg="#3c0d22">
          <SectionTitle>Contact Us</SectionTitle>
          <ContactCard>
            <p>
              Have questions or want to get in touch? Reach out to us!
            </p>
            <p>
              <strong>Email:</strong> contact@dsumunsoc.com
            </p>
            <p>
              <strong>Phone:</strong> +91-123-456-7890
            </p>
            <p>
              <strong>Address:</strong> DSU Campus, Model United Nations Society, Bangalore, India
            </p>
          </ContactCard>
        </Section>
      </div>
    </>
  );
}