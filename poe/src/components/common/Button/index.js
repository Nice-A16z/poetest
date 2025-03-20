import React from 'react';
import styled, { css } from 'styled-components';
import useAudio from '../../../hooks/useAudio';

// 按钮样式
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-lg);
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all 0.3s var(--easing-magnetic);
  white-space: nowrap;
  height: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  backface-visibility: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:active {
    transform: scale(0.95);
  }

  ${props => props.icon && css`
    display: inline-flex;
    gap: var(--space-xs);
    align-items: center;
  `}

  ${props => props.variant === 'primary' && css`
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    color: #000;
    font-weight: 600;
    box-shadow: var(--shadow-primary), 0 0 0 0 var(--color-primary-glow);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(1, 228, 153, 0.3), 0 0 15px var(--color-primary-glow);
    }
  `}

  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    border: 1px solid var(--color-border-light);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: var(--color-background-pressed);
      border-color: var(--color-primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md), 0 0 10px var(--color-primary-glow);
    }
  `}

  ${props => props.size === 'lg' && css`
    height: 48px;
    padding: var(--space-sm) var(--space-xl);
    font-size: var(--font-size-md);
    border-radius: var(--radius-xl);
    letter-spacing: 0.3px;
  `}

  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.disabled && css`
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none;
    
    &:hover {
      transform: none !important;
      box-shadow: none;
    }
  `}
`;

const Button = ({
  children,
  variant = 'outline',
  size = 'md',
  icon = null,
  fullWidth = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const { playClickSound } = useAudio();

  const handleClick = (e) => {
    if (disabled) return;
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
    
    // 播放点击音效
    playClickSound();
    
    if (onClick) onClick(e);
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      icon={!!icon}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </StyledButton>
  );
};

export default Button;