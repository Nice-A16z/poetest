import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 2000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: all 0.3s var(--easing-explosive);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-3px) rotate(15deg);
    box-shadow: var(--shadow-lg), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-toggle-icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s var(--easing-explosive);
  }

  &:hover .theme-toggle-icon {
    transform: scale(1.1);
  }

  .sun-icon {
    display: ${(props) => (props.isDarkMode ? "block" : "none")};
  }

  .moon-icon {
    display: ${(props) => (props.isDarkMode ? "none" : "block")};
  }

  .theme-light & {
    border-color: var(--color-primary);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileToggleButton = styled.button`
  display: none;
  width: 100%;
  padding: var(--space-md);
  background-color: var(--color-background-elevated);
  border: var(--border-thin);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-md);
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  text-align: left;

  .theme-toggle-icon {
    width: 20px;
    height: 20px;
    margin-right: var(--space-sm);
    vertical-align: middle;
  }

  &:hover {
    background-color: var(--color-background-pressed);
    color: var(--color-primary);
    transform: translateX(4px);
  }

  &.active {
    background: var(--color-primary-alpha);
    color: var(--color-primary);
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }

  .theme-light & {
    border-color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

const ThemeToggle = ({ isMobile }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const ButtonComponent = isMobile ? MobileToggleButton : ToggleButton;

  return (
    <ButtonComponent
      className="theme-toggle interactive-element"
      onClick={toggleTheme}
      isDarkMode={isDarkMode}
    >
      {(!isMobile || (isMobile && isDarkMode)) && (
        <svg
          className="theme-toggle-icon sun-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )}
      {(!isMobile || (isMobile && !isDarkMode)) && (
        <svg
          className="theme-toggle-icon moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
      {isMobile && (isDarkMode ? "切换到浅色模式" : "切换到深色模式")}
    </ButtonComponent>
  );
};

export default ThemeToggle;
