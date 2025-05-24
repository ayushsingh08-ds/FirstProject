import React from "react";
import styled from "styled-components";

// Glassmorphism card style
const GlassCard = styled.div`
  background: rgba(30, 30, 60, 0.55);
  border-radius: 18px;
  box-shadow: 0 6px 36px rgba(0,0,0,0.18);
  backdrop-filter: blur(12px);
  padding: 2rem;
  margin: 1.5rem auto;
  max-width: 700px;
  color: #def;
  text-align: center;
`;

const SectionRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 1.5rem;
`;

const SectionCard = styled.div`
  background: rgba(30, 30, 60, 0.68);
  border-radius: 15px;
  width: 220px;
  padding: 1.25rem 1rem;
  box-shadow: 0 2px 18px rgba(0,0,0,0.17);
  color: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.6em 1.5em;
  border-radius: 9px;
  border: 1.5px solid #60eaff;
  background: transparent;
  color: #60eaff;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.16s;
  &:hover {
    background: #60eaff22;
  }
`;

export default function MunEventsBlock() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <GlassCard>
        <Heading>About MUN Society</Heading>
        <p>
          The Model United Nations (MUN) at Our University empowers students to engage with global issues, diplomacy, and leadership. 
          Our mission: foster skills in research, negotiation, and public speaking through immersive conferences and events. 
          Join us as we inspire change and shape tomorrow’s leaders!
        </p>
        <div style={{ marginTop: "1.5em", fontSize: "1.25em" }}>
          <span style={{ color: "#eee" }}>Explore</span>{" "}
          <span style={{ color: "#ff7c6b", fontWeight: 600 }}>new horizons</span>
        </div>
      </GlassCard>
      <SectionRow>
        <SectionCard>
          <Heading style={{ color: "#7ef9ff" }}>Contact</Heading>
          <p>Connect with our team for queries or collaborations.</p>
          <Button>Reach Out</Button>
        </SectionCard>
        <SectionCard>
          <Heading style={{ color: "#ffef7e" }}>Events</Heading>
          <p>Discover our lineup of upcoming and past MUN events.</p>
          <Button>View Events</Button>
        </SectionCard>
        <SectionCard>
          <Heading style={{ color: "#ffb37e" }}>Gallery</Heading>
          <p>See the highlights and memories from previous conferences.</p>
          <Button>View Gallery</Button>
        </SectionCard>
      </SectionRow>
    </div>
  );
}