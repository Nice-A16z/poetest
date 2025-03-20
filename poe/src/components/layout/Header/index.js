import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { WalletContext } from "../../../contexts/WalletContext";
import Button from "../../common/Button";
import WalletDropdown from "./WalletDropdown";
import ThemeToggle from "../../common/ToggleTheme";

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
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
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
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
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
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-cyan)
  );
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
    display: ${(props) => (props.isOpen ? "flex" : "none")};
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
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-primary-light)
    );
    border-radius: var(--radius-full);
    transition: width 0.3s var(--easing-explosive);
  }

  &:hover::after,
  &.active::after {
    width: 70%;
  }

  &:hover,
  &.active {
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

    &:hover::after,
    &.active::after {
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

  @media (max-width: 767px) {
    gap: var(--space-xxs);

    .desktop-only {
      display: none;
    }
  }

  @media (min-width: 768px) {
    gap: var(--space-md);

    .menu-toggle {
      display: none;
    }
  }
`;

const MenuToggle = styled.button`
  display: none; // 默认隐藏
  width: 44px; // 使用移动端友好的点击区域
  height: 44px;
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  background-color: var(--color-background-pressed);
  border: var(--border-thin);
  font-size: var(--font-size-lg);
  transition: all var(--transition-normal) var(--easing-magnetic);

  &:hover {
    background-color: var(--color-background-elevated);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity var(--transition-fast);
    z-index: -1;
  }

  &:hover::after {
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    display: flex; // 移动端显示
    align-items: center;
    justify-content: center;
  }

  .theme-light & {
    border: var(--border-thin);
    color: var(--theme-light-text-primary);
    background-color: var(--theme-light-background-pressed);
  }
`;

// 移动端菜单样式
const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: var(--header-height);
  right: 0;
  bottom: 0;
  width: 280px;
  height: calc(100vh - var(--header-height));
  background: var(--color-background-elevated);
  padding: var(--space-lg);
  box-shadow: var(--shadow-lg);
  transform: translateX(100%);
  transition: all var(--transition-normal) var(--easing-explosive);
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding-bottom: calc(var(--space-lg) + env(safe-area-inset-bottom, 20px));
  opacity: 0;
  visibility: hidden;

  &.active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;

    ${NavLink} {
      opacity: 0;
      transform: translateX(20px);
      animation: slideIn 0.4s var(--easing-explosive) forwards;

      @for $i from 1 through 7 {
        &:nth-child(#{$i}) {
          animation-delay: #{0.1 + $i * 0.05}s;
        }
      }
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${NavLink} {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space-md);
    margin-bottom: var(--space-xs);
    text-align: left;
    border-radius: var(--radius-md);
    font-size: var(--font-size-md);
    font-weight: 500;
    color: var(--color-text-secondary);
    transition: all var(--transition-normal) var(--easing-magnetic);
    opacity: 0;
    transform: translateX(20px);

    &:hover {
      background: var(--color-background-pressed);
      color: var(--color-text-primary);
      transform: translateX(4px);
    }

    &.active {
      background: var(--color-primary-alpha);
      color: var(--color-primary);
    }

    &:first-child {
      margin-bottom: var(--space-lg);
      color: var(--color-primary);
      border: 1px solid var(--color-primary-alpha);

      &:hover {
        background: var(--color-primary-alpha);
        transform: translateX(4px);
      }
    }
  }

  ${NavLink}:last-child {
    margin-bottom: var(--space-lg);
  }

  @media (max-width: 767px) {
    display: block;
  }

  /* 适配刘海屏和底部操作条 */
  @supports (padding: max(0px)) {
    padding-top: max(var(--space-lg), env(safe-area-inset-top));
    padding-right: max(var(--space-lg), env(safe-area-inset-right));
    padding-bottom: max(var(--space-lg), env(safe-area-inset-bottom));
  }

  .theme-light & {
    background: var(--theme-light-background-elevated);
    border-left: var(--border-thin);

    ${NavLink} {
      color: var(--theme-light-text-secondary);

      &:hover {
        color: var(--theme-light-text-primary);
      }

      &.active {
        color: var(--color-primary-dark);
      }

      &:first-child {
        color: var(--color-primary-dark);
      }
    }
  }
`;

// 修改 Overlay 的动画效果
const Overlay = styled.div`
  display: none;
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal) var(--easing-explosive);
  z-index: 999;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 767px) {
    display: block;
  }

  .theme-light & {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Header = () => {
  const { walletBtc, toggleWallet } = useContext(WalletContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // 添加响应式检测
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 处理点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    // 处理 ESC 键关闭
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      // 打开菜单时禁止背景滚动
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      // 关闭菜单时恢复背景滚动
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // 处理触摸滑动关闭
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    // 如果向右滑动超过50px，关闭菜单
    if (diff < -50) {
      setIsMenuOpen(false);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 处理菜单切换
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // 添加触觉反馈
    if ("vibrate" in navigator) {
      navigator.vibrate(3);
    }
  };

  return (
    <HeaderContainer
      className={`${isScrolled ? "scrolled" : ""} ${
        isVisible ? "visible" : ""
      }`}
    >
      <HeaderContent>
        <Logo href="#" className="interactive-element">
          <LogoMark>P</LogoMark>
          <LogoText>
            Poker<LogoNow>Now</LogoNow>
          </LogoText>
        </Logo>

        {/* 只在非移动端显示导航菜单 */}
        {!isMobile && (
          <Navigation>
            <NavLinks isOpen={isMenuOpen}>
              <NavLink href="#" className="nav-link active interactive-element">
                首页
              </NavLink>
              <NavLink href="#" className="nav-link interactive-element">
                游戏
              </NavLink>
              <NavLink href="#" className="nav-link interactive-element">
                锦标赛
              </NavLink>
              <NavLink href="#" className="nav-link interactive-element">
                排行榜
              </NavLink>
              <NavLink href="#" className="nav-link interactive-element">
                奖励
              </NavLink>
              <NavLink href="#" className="nav-link interactive-element">
                VIP
              </NavLink>
            </NavLinks>
          </Navigation>
        )}

        <UserActions>
          <WalletDropdown walletBtc={walletBtc} toggleWallet={toggleWallet} />
          <Button
            variant="outline"
            className="desktop-only interactive-element"
          >
            登录
          </Button>
          <Button
            variant="primary"
            className="desktop-only pulse interactive-element"
          >
            注册
          </Button>
          <MenuToggle
            className="menu-toggle interactive-element"
            onClick={toggleMenu}
            aria-label="菜单"
          >
            ☰
          </MenuToggle>
        </UserActions>

        {/* 遮罩层 */}
        <Overlay
          className={isMenuOpen ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* 移动端菜单 */}
        <MobileMenu
          ref={menuRef}
          className={isMenuOpen ? "active" : ""}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <NavLink href="#" className="nav-link interactive-element">
            登录/注册
          </NavLink>
          <NavLink href="#" className="nav-link active interactive-element">
            首页
          </NavLink>
          <NavLink href="#" className="nav-link interactive-element">
            游戏
          </NavLink>
          <NavLink href="#" className="nav-link interactive-element">
            锦标赛
          </NavLink>
          <NavLink href="#" className="nav-link interactive-element">
            排行榜
          </NavLink>
          <NavLink href="#" className="nav-link interactive-element">
            奖励
          </NavLink>
          <NavLink href="#" className="nav-link interactive-element">
            VIP
          </NavLink>
          <ThemeToggle isMobile={true} />
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
