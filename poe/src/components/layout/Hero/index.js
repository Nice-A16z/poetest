import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const HeroContainer = styled.section`
  text-align: center;
  padding: var(--space-xxl) 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--color-background);
  margin-bottom: var(--space-xl);
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.4;
    filter: blur(50px);
    z-index: 0;
    animation: pulse 8s infinite alternate ease-in-out;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.3); opacity: 0.5; }
  }
  
  &::before {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }
  
  &::after {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, var(--color-secondary-glow) 0%, transparent 70%);
    bottom: -80px;
    left: -80px;
    animation-delay: 2s;
  }
  
  .theme-light & {
    background-color: var(--theme-light-background);
    background-image: 
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%2301d191' fill-opacity='0.05' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E"),
      radial-gradient(circle at 10% 20%, rgba(1, 209, 145, 0.07) 0%, transparent 30%),
      radial-gradient(circle at 90% 80%, rgba(1, 209, 145, 0.07) 0%, transparent 30%);
    position: relative;
  }
  
  .theme-light &::before, .theme-light &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    z-index: 0;
    animation: lightPulse 8s infinite alternate ease-in-out;
  }
  
  @keyframes lightPulse {
    0% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.3); opacity: 0.5; }
  }
  
  .theme-light &::before {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(1, 209, 145, 0.2) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }
  
  .theme-light &::after {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(1, 209, 145, 0.25) 0%, transparent 70%);
    bottom: -80px;
    left: -80px;
    animation-delay: 2s;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(1, 228, 153, 0.05) 0%, 
    rgba(12, 14, 20, 0) 50%, 
    rgba(77, 97, 252, 0.05) 100%);
  z-index: 0;
  
  .theme-light & {
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 1500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' stroke='%2301d191' stroke-width='0.5' stroke-opacity='0.08' d='M0 6 L24 6 M6 0 L6 24 M12 0 L12 24 M18 0 L18 24 M0 12 L24 12 M0 18 L24 18'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E"),
    linear-gradient(135deg, 
      rgba(1, 209, 145, 0.05) 0%, 
      rgba(255, 255, 255, 0) 50%, 
      rgba(1, 209, 145, 0.05) 100%);
    z-index: 0;
    opacity: 0.7;
  }
`;

const Container = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  width: 100%;
`;

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-lg);
  position: relative;
  transform: translateZ(0);
  will-change: transform;
  animation: titleGlow 4s infinite alternate ease-in-out;
  
  @keyframes titleGlow {
    0% { text-shadow: 0 0 10px rgba(1, 228, 153, 0); }
    100% { text-shadow: 0 0 15px rgba(1, 228, 153, 0.4); }
  }
`;

const HeroSubtitle = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  position: relative;
`;

const HeroCta = styled.div`
  display: inline-flex;
  gap: var(--space-md);
  position: relative;
  
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    gap: var(--space-sm);
  }
`;

const Hero = () => {
  return (
    <HeroContainer className="hero">
      <HeroBackground className="hero-background" />
      <Container>
        <HeroContent data-parallax="0.2">
          <HeroTitle>最好玩的加密货币游戏平台</HeroTitle>
          <HeroSubtitle>体验高质量的扑克和游戏，与来自全球的玩家一同竞技，尽情享受高品质娱乐。</HeroSubtitle>
          <HeroCta>
            <Button variant="primary" size="lg" className="interactive-element">
              立即开始
            </Button>
            <Button variant="outline" size="lg" className="interactive-element">
              了解更多
            </Button>
          </HeroCta>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default Hero;