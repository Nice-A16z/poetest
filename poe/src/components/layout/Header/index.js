import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { WalletContext } from '../../../contexts/WalletContext';
import Button from '../../common/Button';
import WalletDropdown from './WalletDropdown';

const HeaderContainer = styled.header`
  background-color: rgba(12, 14, 20, 0.9);
  border-bottom: var(--border-thin);
  height: var(--header-height);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s var(--easing-quantum);
  
  &.scrolled {
    transform: translateY(-100%);
  }
  
  &.scrolled.visible {
    transform: translateY(0);
  }
  
  .theme-light & {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--theme-light-border);
    box-shadow: 0 4px 20px rgba(1, 209, 145, 0.05);
  }
`;

const HeaderContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: auto;
  margin-right: var(--space-md);
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
  transition: transform 0.3s var(--easing-explosive);
  
  ${Logo}:hover & {
    transform: rotate(-10deg);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
  }
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

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 991px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--color-background);
    padding: var(--space-md);
    flex-direction: column;
    align-items: flex-start;
    border-bottom: var(--border-thin);
    box-shadow: var(--shadow-lg);
    animation: navSlideDown 0.3s var(--easing-explosive);
    
    .theme-light & {
      background-color: var(--theme-light-background-elevated);
    }
  }
  
  @keyframes navSlideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const NavLink = styled.a`
  color: var(--color-text-secondary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  font-size: 16px;
  font-weight: 600;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
    transition: width 0.3s var(--easing-explosive);
  }
  
  &:hover::after, &.active::after {
    width: 70%;
  }
  
  &:hover, &.active {
    color: var(--color-text-primary);
    background-color: var(--color-background-elevated);
    transform: translateY(-2px);
  }
  
  &.active {
    color: var(--color-primary);
    background-color: var(--color-primary-alpha);
  }
  
  .theme-light & {
    color: var(--theme-light-text-secondary) !important;
  }
  
  .theme-light &:hover, 
  .theme-light &.active {
    color: var(--theme-light-text-primary) !important;
    background-color: var(--theme-light-background-elevated) !important;
  }
  
  .theme-light &.active {
    color: var(--color-primary-dark) !important;
  }
  
  @media (max-width: 991px) {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    
    &::after {
      bottom: auto;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 3px;
      height: 0;
    }
    
    &:hover::after, &.active::after {
      width: 3px;
      height: 70%;
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-shrink: 0;
  margin-left: auto;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  transition: all 0.3s var(--easing-magnetic);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::after {
    opacity: 0.5;
  }
  
  &:hover {
    background-color: var(--color-background-elevated);
    color: var(--color-primary);
    transform: rotate(90deg);
  }
  
  .theme-light & {
    border: 1px solid var(--color-primary);
    color: var(--theme-light-text-primary);
  }
  
  @media (max-width: 991px) {
    display: block;
  }
`;

const Header = () => {
  const { walletBtc, toggleWallet } = useContext(WalletContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 处理滚动效果
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 头部隐藏/显示逻辑
      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 处理菜单切换
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
  };

  return (
    <HeaderContainer className={`${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}>
      <HeaderContent>
        <Logo href="#" className="interactive-element">
          <LogoMark>P</LogoMark>
          <LogoText>Poker<LogoNow>Now</LogoNow></LogoText>
        </Logo>
        
        <Navigation>
          <NavLinks isOpen={isMenuOpen}>
            <NavLink href="#" className="nav-link active interactive-element">首页</NavLink>
            <NavLink href="#" className="nav-link interactive-element">游戏</NavLink>
            <NavLink href="#" className="nav-link interactive-element">锦标赛</NavLink>
            <NavLink href="#" className="nav-link interactive-element">排行榜</NavLink>
            <NavLink href="#" className="nav-link interactive-element">奖励</NavLink>
            <NavLink href="#" className="nav-link interactive-element">VIP</NavLink>
          </NavLinks>
        </Navigation>
        
        <UserActions>
          <WalletDropdown walletBtc={walletBtc} toggleWallet={toggleWallet} />
          <Button variant="outline">登录</Button>
          <Button variant="primary" className="pulse">注册</Button>
          <MenuToggle 
            className="interactive-element" 
            onClick={toggleMenu}
          >
            ☰
          </MenuToggle>
        </UserActions>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;