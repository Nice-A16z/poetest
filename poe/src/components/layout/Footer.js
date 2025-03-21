// src/components/layout/Footer/index.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--color-background-elevated);
  padding-top: var(--space-xl);
  margin-top: var(--space-xxl);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--color-border);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-primary-glow),
      var(--color-secondary-glow),
      var(--color-primary-glow),
      transparent
    );
    animation: borderFlow 10s infinite linear;
  }
  
  @keyframes borderFlow {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
  }
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
    border-top: 1px solid var(--theme-light-border);
  }
`;

const Container = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  width: 100%;
`;

const FooterUpper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xxl);
  margin-bottom: var(--space-xl);
  margin-top: var(--space-xl);
  position: relative;
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 767px) {
    gap: var(--space-lg);
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  position: relative;
  
  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: var(--space-lg);
  }
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
  transition: transform 0.3s var(--easing-explosive);
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoMark = styled.div`
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-background);
  font-weight: 700;
  font-size: var(--font-size-md);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
`;

const LogoText = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
`;

const LogoNow = styled.span`
  background: linear-gradient(to right, var(--color-primary), var(--color-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterDesc = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  max-width: 360px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`;

const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: all 0.3s var(--easing-explosive);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--color-primary-alpha) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background-color: var(--color-background-pressed);
    color: var(--color-primary);
    transform: translateY(-6px) rotate(10deg);
    box-shadow: var(--shadow-md), 0 10px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const SocialIcon = styled.span`
  position: relative;
  z-index: 1;
  transition: transform 0.3s var(--easing-explosive);
  
  ${SocialLink}:hover & {
    transform: scale(1.2);
  }
`;

const FooterLinksWrap = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-xl);
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    width: 100%;
  }
`;

const FooterLinksColumn = styled.div`
  @media (max-width: 767px) {
    padding: var(--space-xs) 0;
  }
`;

const FooterLinksTitle = styled.h3`
  font-weight: 600;
  margin-bottom: var(--space-lg);
  position: relative;
  padding-bottom: var(--space-sm);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  letter-spacing: 0.5px;
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
    transition: width 0.3s var(--easing-explosive);
  }
  
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-xs);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @media (max-width: 767px) {
    gap: var(--space-xs);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    li {
      display: flex;
      align-items: center;
    }
  }
`;

const FooterLink = styled.a`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  transition: all 0.3s var(--easing-magnetic);
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: var(--space-sm);
  max-width: fit-content;
  line-height: 1.2;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.3s var(--easing-explosive);
  }
  
  &:hover {
    color: var(--color-primary);
    transform: translateX(8px);
  }
  
  &:hover::before {
    opacity: 1;
    transform: translateY(-50%) scale(1.5);
    box-shadow: 0 0 10px var(--color-primary-glow);
  }

  @media (max-width: 767px) {
    font-size: var(--font-size-xs);
    padding-left: var(--space-xs);
    min-height: 24px;
  }
`;

const FooterFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
  margin-top: var(--space-xl);
  position: relative;
  z-index: 2;
  
  @media (max-width: 991px) {
    margin-top: calc(-1 * var(--space-xl));
    gap: var(--space-lg);
  }
  
  @media (max-width: 767px) {
    margin-top: 0;
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  transition: all 0.3s var(--easing-magnetic);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-lg);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  transform: translateZ(0);
  will-change: transform, box-shadow;
  box-shadow: var(--shadow-md);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg), 0 10px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
    background-color: var(--color-background-pressed);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 991px) {
    transform: none !important;
    padding: var(--space-md);
  }
`;

const FeatureIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary-alpha), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: var(--color-primary);
  flex-shrink: 0;
  border: 1px solid var(--color-primary-alpha);
  transition: all 0.3s var(--easing-explosive);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--color-primary-glow) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${FeatureItem}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 10px 20px var(--color-primary-glow);
    background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-primary-glow));
  }
  
  ${FeatureItem}:hover &::after {
    opacity: 0.5;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-weight: 600;
  margin-bottom: var(--space-xs);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  ${FeatureItem}:hover & {
    transform: translateX(3px);
  }
`;

const FeatureDesc = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  transition: all 0.3s ease;
  
  ${FeatureItem}:hover & {
    color: var(--color-text-primary);
  }
`;

const FooterCertificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-xl);
  gap: var(--space-lg) var(--space-xl);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      var(--color-primary-alpha) 30%, 
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
    border-bottom-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const CertGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const CertItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-md);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    background-color: var(--color-background-pressed);
    transform: translateY(-5px);
    box-shadow: var(--shadow-md), 0 10px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const CertIcon = styled.span`
  color: var(--color-primary);
  font-size: var(--font-size-md);
  position: relative;
  z-index: 1;
  transition: transform 0.3s var(--easing-explosive);
  
  ${CertItem}:hover & {
    transform: rotate(15deg) scale(1.2);
  }
`;

const FooterBottom = styled.div`
  padding: var(--space-lg) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xs);
  border-top: 1px solid var(--color-border);
  
  .theme-light & {
    border-top-color: var(--color-primary-alpha);
  }
  
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const FooterBottomLink = styled.a`
  color: var(--color-text-tertiary);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-primary-alpha);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`;

const CopyrightIcon = styled.span`
  color: var(--color-primary);
  font-size: 18px;
  transition: transform 0.3s var(--easing-explosive);
  
  ${Copyright}:hover & {
    transform: rotate(360deg);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        {/* 特色服务栏目 */}
        <FooterFeatures>
          <FeatureItem className="interactive-element" data-parallax="0.03">
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>安全保障</FeatureTitle>
              <FeatureDesc>使用区块链技术确保所有交易透明可靠，为您的资产提供最高级别的安全保障。</FeatureDesc>
            </FeatureContent>
          </FeatureItem>
          
          <FeatureItem className="interactive-element" data-parallax="0.03">
            <FeatureIcon>🌐</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>全球覆盖</FeatureTitle>
              <FeatureDesc>支持多种语言和货币，让您随时随地都能畅享游戏，与全球玩家一起竞技。</FeatureDesc>
            </FeatureContent>
          </FeatureItem>
          
          <FeatureItem className="interactive-element" data-parallax="0.03">
            <FeatureIcon>💎</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>VIP服务</FeatureTitle>
              <FeatureDesc>专属客户经理、更高返利和独家活动邀请，尊享顶级VIP会员的非凡礼遇。</FeatureDesc>
            </FeatureContent>
          </FeatureItem>
        </FooterFeatures>
        
        {/* 页脚上部 */}
        <FooterUpper>
          <FooterBrand>
            <Logo href="#" className="interactive-element">
              <LogoMark>P</LogoMark>
              <LogoText>Poker<LogoNow>Now</LogoNow></LogoText>
            </Logo>
            <FooterDesc>PokerNow是一家面向全球玩家的加密货币游戏平台，提供安全、公平的游戏体验。我们致力于通过区块链技术打造透明的游戏环境，所有游戏结果均可验证公平性。</FooterDesc>
            <SocialLinks>
              <SocialLink href="#" className="interactive-element">
                <SocialIcon>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </SocialLink>
              <SocialLink href="#" className="interactive-element">
                <SocialIcon>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </SocialLink>
              <SocialLink href="#" className="interactive-element">
                <SocialIcon>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </SocialLink>
              <SocialLink href="#" className="interactive-element">
                <SocialIcon>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.14551 8.20556 0.991263 9.97631 1.00008 11.75C0.989358 13.537 1.14361 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0064 13.5103 23.0001 11.75C23.0101 9.96295 22.8558 8.1787 22.5401 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </SocialLink>
            </SocialLinks>
          </FooterBrand>
          
          <FooterLinksWrap>
            <FooterLinksColumn>
              <FooterLinksTitle>平台介绍</FooterLinksTitle>
              <FooterLinks>
                <li><FooterLink href="#" className="interactive-element">关于我们</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">平台特点</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">合作伙伴</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">联系我们</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">加入我们</FooterLink></li>
              </FooterLinks>
            </FooterLinksColumn>
            
            <FooterLinksColumn>
              <FooterLinksTitle>游戏中心</FooterLinksTitle>
              <FooterLinks>
                <li><FooterLink href="#" className="interactive-element">德州扑克</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">奥马哈</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">老虎机</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">轮盘</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">百家乐</FooterLink></li>
              </FooterLinks>
            </FooterLinksColumn>
            
            <FooterLinksColumn>
              <FooterLinksTitle>帮助与支持</FooterLinksTitle>
              <FooterLinks>
                <li><FooterLink href="#" className="interactive-element">常见问题</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">游戏规则</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">充值提现</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">安全保障</FooterLink></li>
                <li><FooterLink href="#" className="interactive-element">联系客服</FooterLink></li>
              </FooterLinks>
            </FooterLinksColumn>
          </FooterLinksWrap>
        </FooterUpper>
        
        {/* 证书和合作伙伴 */}
        <FooterCertificates>
          <CertGroup>
            <CertItem className="interactive-element">
              <CertIcon>🔒</CertIcon>
              <span>SSL安全加密</span>
            </CertItem>
            <CertItem className="interactive-element">
              <CertIcon>✓</CertIcon>
              <span>区块链认证</span>
            </CertItem>
            <CertItem className="interactive-element">
              <CertIcon>🔰</CertIcon>
              <span>游戏公平认证</span>
            </CertItem>
          </CertGroup>
          
          <CertGroup>
            <CertItem className="interactive-element">
              <CertIcon>🔞</CertIcon>
              <span>负责任游戏</span>
            </CertItem>
            <CertItem className="interactive-element">
              <CertIcon>🏆</CertIcon>
              <span>卓越服务奖</span>
            </CertItem>
          </CertGroup>
        </FooterCertificates>
        
        {/* 页脚底部 */}
        <FooterBottom>
          <Copyright>
            <CopyrightIcon>©</CopyrightIcon>
            <span>2025 PokerNow. 保留所有权利。仅供18岁以上人士娱乐。</span>
          </Copyright>
          
          <FooterBottomLinks>
            <FooterBottomLink href="#" className="interactive-element">服务条款</FooterBottomLink>
            <FooterBottomLink href="#" className="interactive-element">隐私政策</FooterBottomLink>
            <FooterBottomLink href="#" className="interactive-element">反洗钱政策</FooterBottomLink>
            <FooterBottomLink href="#" className="interactive-element">责任博彩</FooterBottomLink>
          </FooterBottomLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;