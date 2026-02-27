import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HeroSection = styled.section`
  padding: 100px 0 80px;
  background: radial-gradient(circle at top left, #ff7f11 0%, #30364f 45%, #151827 100%);
  color: #ffffff;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroKicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(236, 248, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 3.4vw + 1.8rem, 3.8rem);
  margin: 20px 0 16px;
  line-height: 1.1;
  font-weight: 800;
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  max-width: 520px;
  color: rgba(226, 232, 206, 0.9);
  margin-bottom: 32px;

  @media (max-width: 900px) {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const SecondaryLink = styled.button`
  background: transparent;
  border: none;
  color: #e2e8ce;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;

  &:hover {
    color: #ffffff;
  }
`;

const HeroMeta = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 28px;
  font-size: 0.9rem;
  opacity: 0.85;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const HeroStat = styled.div`
  strong {
    display: block;
    font-size: 1.1rem;
  }
`;

const VisualCard = styled.div`
  position: relative;
  background: rgba(12, 14, 24, 0.9);
  border-radius: 24px;
  padding: 26px 24px 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.6);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle at top, rgba(255, 127, 17, 0.28), transparent 60%);
    opacity: 0.9;
    pointer-events: none;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
`;

const Tag = styled.span`
  font-size: 0.8rem;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(172, 191, 164, 0.12);
  border: 1px solid rgba(172, 191, 164, 0.4);
  color: #e2e8ce;
`;

const MiniMetric = styled.div`
  font-size: 0.8rem;
  text-align: right;

  strong {
    display: block;
    font-size: 1.2rem;
  }
`;

const GraphArea = styled.div`
  position: relative;
  z-index: 1;
  background: radial-gradient(circle at top left, #30364f 0%, #151827 60%);
  border-radius: 18px;
  padding: 22px 20px 18px;
  overflow: hidden;
`;

const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.85rem;
  color: #e2e8ce;
`;

const GraphBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 120px;
`;

const Bar = styled.div`
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(to top, #ff7f11, #f5d08a);
  opacity: ${(props) => props.dimmed ? 0.35 : 1};
  height: ${(props) => props.height}%;
  box-shadow: 0 0 0 1px rgba(5, 8, 18, 0.45);
`;

const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 0.75rem;
  color: rgba(226, 232, 206, 0.8);
`;

const Hero = () => (
  <HeroSection>
    <HeroContainer>
      <div>
        <HeroKicker>
          <span>🔥</span>
          <span>Nowa jakość treningu</span>
        </HeroKicker>
        <HeroTitle>Buduj formę z inteligentnym wsparciem.</HeroTitle>
        <HeroSubtitle>
          Zestaw akcesoriów, planów i analityki, który sprawi, że każdy trening
          będzie przemyślany, bezpieczny i skuteczny.
        </HeroSubtitle>
        <HeroActions>
          <Button text="Sprawdź ofertę" />
          <SecondaryLink>
            Zobacz produkty
            <span>→</span>
          </SecondaryLink>
        </HeroActions>
        <HeroMeta>
          <HeroStat>
            <strong>+4 500</strong>
            zadowolonych użytkowników
          </HeroStat>
          <HeroStat>
            <strong>3x szybciej</strong>
            widoczne efekty treningu
          </HeroStat>
        </HeroMeta>
      </div>

      <VisualCard aria-hidden="true">
        <BadgeRow>
          <Tag>Aktywny plan PRO</Tag>
          <MiniMetric>
            Ostatni trening
            <strong>54 min</strong>
          </MiniMetric>
        </BadgeRow>
        <GraphArea>
          <GraphHeader>
            <span>Obciążenie tygodniowe</span>
            <span>+18%</span>
          </GraphHeader>
          <GraphBars>
            <Bar height={40} dimmed />
            <Bar height={55} dimmed />
            <Bar height={65} />
            <Bar height={85} />
            <Bar height={70} />
          </GraphBars>
          <Legend>
            <span>pon</span>
            <span>wt</span>
            <span>śr</span>
            <span>czw</span>
            <span>pt</span>
          </Legend>
        </GraphArea>
      </VisualCard>
    </HeroContainer>
  </HeroSection>
);

export default Hero;
