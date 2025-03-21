// src/components/game/Roulette/BetControls.js
import React, { useState } from 'react';
import styled from 'styled-components';
import useAudio from '../../../hooks/useAudio';

const GameControlsContainer = styled.div`
  flex: 1;
  width: 100%;
  
  @media (max-width: 480px) {
    padding: 0 var(--space-xs);
  }
`;

const BettingCard = styled.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: var(--border-thin);
  box-shadow: var(--shadow-md);
  transition: all 0.4s var(--easing-magnetic);
  transform: translateZ(0);
  will-change: transform, box-shadow;
  position: relative;
  margin-bottom: var(--space-lg);
  
  @media (max-width: 480px) {
    margin-bottom: var(--space-md);
    border-radius: var(--radius-md);
  }
  
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
    z-index: 0;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 0.5;
  }
  
  &:hover {
    box-shadow: var(--shadow-lg), 0 15px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
    transform: translateY(-5px);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const CardHeader = styled.div`
  padding: var(--space-md);
  border-bottom: var(--border-thin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-elevated);
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
  }
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const OddsBadge = styled.div`
  background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-secondary-alpha));
  border: 1px solid var(--color-primary);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-primary);
  box-shadow: 0 0 15px var(--color-primary-glow);
  animation: badgePulse 3s infinite alternate ease-in-out;
  
  @keyframes badgePulse {
    0% { box-shadow: 0 0 10px var(--color-primary-glow); }
    100% { box-shadow: 0 0 20px var(--color-primary-glow); }
  }
`;

const CardBody = styled.div`
  padding: var(--space-md);
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
  }
`;

const BetOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  
  @media (max-width: 480px) {
    gap: var(--space-xs);
    margin-bottom: var(--space-sm);
  }
`;

const BetOption = styled.button`
  padding: var(--space-md);
  border-radius: var(--radius-md);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  text-align: center;
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  @media (max-width: 480px) {
    padding: var(--space-sm);
    font-size: var(--font-size-sm);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    z-index: 1;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &.active {
    border: 2px solid var(--color-primary);
    background-color: var(--color-primary-alpha);
    box-shadow: 0 0 20px var(--color-primary-glow);
    transform: translateY(-4px);
  }
  
  &.red {
    color: var(--color-accent-light);
  }
  
  &.red.active {
    border-color: var(--color-accent);
    background-color: var(--color-accent-alpha);
    box-shadow: 0 0 20px var(--color-accent-glow);
  }
  
  &.black {
    color: var(--color-text-primary);
  }
  
  &.pulse-animation {
    animation: highlight-pulse 1.5s infinite;
  }
  
  @keyframes highlight-pulse {
    0% { box-shadow: 0 0 0 0 var(--color-primary-glow); }
    70% { box-shadow: 0 0 0 15px rgba(1, 228, 153, 0); }
    100% { box-shadow: 0 0 0 0 rgba(1, 228, 153, 0); }
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
  
  .theme-light &.active {
    border-color: var(--color-primary-dark);
    background-color: var(--color-primary-alpha);
  }
`;

const InputGroup = styled.div`
  margin-bottom: var(--space-md);
`;

const InputLabel = styled.label`
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
  font-weight: 500;
`;

const InputContainer = styled.div`
  position: relative;
`;

const BetInput = styled.input`
  width: 100%;
  padding: var(--space-md);
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  box-shadow: var(--shadow-inner);
  transition: all 0.3s var(--easing-magnetic);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-glow), var(--shadow-inner);
    transform: translateY(-2px);
  }
  
  &.pulse-animation {
    animation: highlight-pulse 1.5s infinite;
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
`;

const InputActions = styled.div`
  position: absolute;
  right: var(--space-xs);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 4px;
  
  @media (max-width: 480px) {
    gap: 2px;
  }
`;

const InputAction = styled.button`
  padding: 4px 10px;
  background: linear-gradient(135deg, var(--color-surface), var(--color-surface-hover));
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-weight: 600;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 480px) {
    padding: 4px 6px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, var(--color-primary-alpha), transparent);
    transform: translateX(-100%);
    z-index: 0;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-surface-hover));
    color: var(--color-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
`;

const PotentialWin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-inner);
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--easing-magnetic);
  
  @media (max-width: 480px) {
    padding: var(--space-xs) var(--space-sm);
    margin-bottom: var(--space-sm);
  }
  
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
    z-index: 0;
  }
  
  &:hover::before {
    opacity: 0.5;
  }
  
  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
  }
  
  .theme-light & {
    border-color: var(--color-primary);
  }
`;

const WinLabel = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
  position: relative;
  z-index: 1;
`;

const WinAmount = styled.div`
  font-weight: 600;
  color: var(--color-primary);
  text-shadow: 0 0 10px var(--color-primary-glow);
  position: relative;
  z-index: 1;
  animation: winAmountPulse 2s infinite alternate ease-in-out;
  
  @keyframes winAmountPulse {
    0% { text-shadow: 0 0 5px var(--color-primary-glow); }
    100% { text-shadow: 0 0 15px var(--color-primary-glow); }
  }
`;

const SpinButton = styled.button`
  width: 100%;
  padding: var(--space-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #000;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--font-size-md);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  transition: all 0.3s var(--easing-explosive);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    z-index: 1;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-primary), 0 8px 0 var(--color-primary-dark), 0 15px 20px rgba(1, 228, 153, 0.3);
  }
  
  &:active {
    transform: translateY(2px);
    box-shadow: var(--shadow-primary), 0 2px 0 var(--color-primary-dark);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark);
  }
`;

const SpinIcon = styled.span`
  display: inline-flex;
  transition: transform 0.3s var(--easing-explosive);
  
  ${SpinButton}:hover &:not(.rotating) {
    transform: rotate(-30deg) scale(1.2);
  }
  
  &.rotating {
    animation: rotate-center 1s linear infinite;
  }
  
  @keyframes rotate-center {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`;

const BetsHistory = styled.div`
  margin-top: var(--space-lg);
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
`;

const HistoryTitle = styled.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-primary);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &::before {
    content: '';
    width: 4px;
    height: 16px;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`;

const HistoryTotal = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  background-color: var(--color-background-elevated);
  display: flex;
  align-items: center;
  padding: 6px 12px;
  height: 32px;
  line-height: 1;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    color: var(--color-primary);
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const BetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-sm);
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

const BetCard = styled.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  border: var(--border-thin);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
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
    transform: translateY(-5px) scale(1.03);
    background-color: var(--color-surface-hover);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md), 0 8px 20px var(--color-primary-glow);
    z-index: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const BetUser = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  position: relative;
  z-index: 1;
`;

const UserAvatar = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--color-surface-hover), var(--color-background-pressed));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border-light);
  transition: transform 0.3s var(--easing-explosive);
  
  ${BetCard}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 0 10px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
`;

const BetInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const BetValue = styled.div`
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${BetCard}:hover & {
    color: var(--color-primary);
    text-shadow: 0 0 5px var(--color-primary-glow);
  }
`;

const BetChoice = styled.div`
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  transition: all 0.3s var(--easing-magnetic);
  
  ${BetCard}:hover & {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &.red {
    background: linear-gradient(135deg, var(--color-accent-alpha), rgba(255, 92, 92, 0.05));
    color: var(--color-accent-light);
    border: 1px solid var(--color-accent);
  }
  
  &.black {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    color: var(--color-text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const BetControls = ({
  selectedBet,
  betAmount,
  potentialWin,
  isSpinning,
  onBetSelect,
  onBetAmountChange,
  onSpin,
  betsHistory
}) => {
  const { playClickSound } = useAudio();
  const [inputValue, setInputValue] = useState(betAmount.toString());

  // 处理下注选项点击
  const handleBetOptionClick = (bet) => {
    onBetSelect(bet);
  };

  // 处理输入变化
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseFloat(value) || 0;
    onBetAmountChange(numValue);
  };

  // 处理快捷金额操作
  const handleActionClick = (action) => {
    let newValue = parseFloat(inputValue) || 0;
    
    if (action === 'half') {
      newValue = Math.max(10, Math.floor(newValue / 2));
    } else if (action === 'double') {
      newValue = newValue * 2;
    } else if (action === 'max') {
      newValue = 1000; // 示例最大值
    }
    
    setInputValue(newValue.toString());
    onBetAmountChange(newValue);
    
    playClickSound();
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
  };

  // 处理旋转按钮点击
  const handleSpinClick = () => {
    onSpin();
  };

  return (
    <GameControlsContainer>
      <BettingCard className="betting-card gpu-layer">
        <CardHeader className="card-header">
          <CardTitle>选择下注</CardTitle>
          <OddsBadge>赔率 2.0x</OddsBadge>
        </CardHeader>
        <CardBody>
          <BetOptions>
            <BetOption 
              className={`bet-option red interactive-element ${selectedBet === 'red' ? 'active' : ''}`}
              onClick={() => handleBetOptionClick('red')}
            >
              红色
            </BetOption>
            <BetOption 
              className={`bet-option black interactive-element ${selectedBet === 'black' ? 'active' : ''}`}
              onClick={() => handleBetOptionClick('black')}
            >
              黑色
            </BetOption>
          </BetOptions>
          
          <InputGroup>
            <InputLabel>下注金额</InputLabel>
            <InputContainer>
              <BetInput 
                type="number" 
                className="bet-input" 
                value={inputValue}
                onChange={handleInputChange}
                min="10" 
                step="10"
              />
              <InputActions>
                <InputAction 
                  className="interactive-element" 
                  onClick={() => handleActionClick('half')}
                >
                  1/2
                </InputAction>
                <InputAction 
                  className="interactive-element" 
                  onClick={() => handleActionClick('double')}
                >
                  2x
                </InputAction>
                <InputAction 
                  className="interactive-element" 
                  onClick={() => handleActionClick('max')}
                >
                  MAX
                </InputAction>
              </InputActions>
            </InputContainer>
          </InputGroup>
          
          <PotentialWin className="interactive-element">
            <WinLabel>预计收益:</WinLabel>
            <WinAmount>¥{potentialWin.toFixed(2)}</WinAmount>
          </PotentialWin>
          
          <SpinButton 
            className="interactive-element" 
            onClick={handleSpinClick}
            disabled={isSpinning}
          >
            <span>{isSpinning ? '旋转中...' : '旋转轮盘'}</span>
            <SpinIcon className={isSpinning ? 'rotating' : ''}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SpinIcon>
          </SpinButton>
        </CardBody>
      </BettingCard>
      
      <BetsHistory>
        <HistoryHeader>
          <HistoryTitle>近期投注</HistoryTitle>
          <HistoryTotal className="interactive-element">总投注: ¥25,478</HistoryTotal>
        </HistoryHeader>
        <BetsGrid>
          {betsHistory.map(bet => (
            <BetCard key={bet.id} className="interactive-element">
              <BetUser>
                <UserAvatar>{bet.user.charAt(0)}</UserAvatar>
                <span>{bet.user}</span>
              </BetUser>
              <BetInfo>
                <BetValue>¥{bet.amount.toFixed(2)}</BetValue>
                <BetChoice className={bet.choice}>{bet.choice === 'red' ? '红色' : '黑色'}</BetChoice>
              </BetInfo>
            </BetCard>
          ))}
        </BetsGrid>
      </BetsHistory>
    </GameControlsContainer>
  );
};

export default BetControls;