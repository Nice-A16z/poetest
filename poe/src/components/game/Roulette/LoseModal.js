// src/components/game/Roulette/LoseModal.js
import React from 'react';
import styled from 'styled-components';
import useAudio from '../../../hooks/useAudio';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s var(--easing-magnetic);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

const ResultModal = styled.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  width: 360px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  transform: scale(0.8);
  transition: transform 0.5s var(--easing-explosive);
  box-shadow: var(--shadow-lg), 0 20px 40px var(--color-accent-glow);
  border: var(--border-thin);
  position: relative;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, 
      transparent 0%, 
      var(--color-accent-alpha) 30%, 
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.3;
  }
  
  ${ModalOverlay}.active & {
    transform: scale(1);
  }
  
  .theme-light & {
    border-color: var(--color-accent-alpha);
    box-shadow: var(--shadow-lg), 0 20px 40px var(--color-accent-alpha);
  }
`;

const ModalHeader = styled.div`
  padding: var(--space-md) var(--space-lg);
  background: linear-gradient(135deg, var(--color-surface), var(--color-surface-hover));
  text-align: center;
  position: relative;
  border-bottom: var(--border-thin);
`;

const ModalClose = styled.button`
  position: absolute;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
  line-height: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-explosive);
  z-index: 10;
  
  &:hover {
    color: var(--color-text-primary);
    background-color: var(--color-background-pressed);
    transform: translateY(-50%) rotate(90deg) scale(1.1);
    box-shadow: var(--shadow-md), 0 0 15px var(--color-accent-glow);
    border-color: var(--color-accent);
  }
  
  .theme-light & {
    border-color: var(--color-accent-alpha);
  }
`;

const ModalTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-xxs);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ModalSubtitle = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`;

const ModalContent = styled.div`
  padding: var(--space-lg);
  text-align: center;
`;

const ResultEmoji = styled.div`
  font-size: 72px;
  margin-bottom: var(--space-md);
  display: inline-block;
  animation: shake 1.5s infinite alternate var(--easing-explosive);
  filter: drop-shadow(0 0 10px var(--color-accent-glow));
  
  @keyframes shake {
    0% { transform: translateX(0) rotate(0); }
    15% { transform: translateX(-5px) rotate(-5deg); }
    30% { transform: translateX(5px) rotate(5deg); }
    45% { transform: translateX(-5px) rotate(-3deg); }
    60% { transform: translateX(5px) rotate(3deg); }
    75% { transform: translateX(-2px) rotate(-1deg); }
    100% { transform: translateX(0) rotate(0); }
  }
`;

const ResultMessage = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textGlow 2s infinite alternate ease-in-out;
  
  @keyframes textGlow {
    0% { text-shadow: 0 0 5px rgba(255, 92, 92, 0.1); }
    100% { text-shadow: 0 0 15px rgba(255, 92, 92, 0.3); }
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: var(--space-sm);
  padding: 0 var(--space-lg) var(--space-lg);
`;

const TryAgainButton = styled.button`
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-align: center;
  transition: all 0.3s var(--easing-magnetic);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #000;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-primary), 0 4px 0 var(--color-primary-dark);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark), 0 10px 20px rgba(1, 228, 153, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: var(--shadow-primary), 0 2px 0 var(--color-primary-dark);
  }
`;

const LoseModal = ({ isOpen, onTryAgain, onClose }) => {
  const { playClickSound } = useAudio();
  
  const handleButtonClick = (callback) => {
    playClickSound();
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
    
    if (callback) callback();
  };
  
  return (
    <ModalOverlay className={isOpen ? 'active' : ''}>
      <ResultModal className="gpu-layer">
        <ModalHeader>
          <ModalTitle>游戏结果</ModalTitle>
          <ModalSubtitle>幸运轮盘</ModalSubtitle>
          <ModalClose 
            className="interactive-element" 
            onClick={() => handleButtonClick(onClose)}
          >
            ×
          </ModalClose>
        </ModalHeader>
        <ModalContent>
          <ResultEmoji>😢</ResultEmoji>
          <ResultMessage>很遗憾，你输了！</ResultMessage>
        </ModalContent>
        <ModalActions>
          <TryAgainButton 
            className="interactive-element" 
            onClick={() => handleButtonClick(onTryAgain)}
          >
            再试一次
          </TryAgainButton>
        </ModalActions>
      </ResultModal>
    </ModalOverlay>
  );
};

export default LoseModal;