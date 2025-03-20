// src/components/game/Roulette/BetHistory.js
import React from 'react';
import styled from 'styled-components';
import useAudio from '../../../hooks/useAudio';

const HistoryContainer = styled.div`
  margin-top: var(--space-lg);
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-border-light);
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
  padding-left: var(--space-xs);
  
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
  padding: 6px 12px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
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
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-md);
`;

const BetCard = styled.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-md);
  border: var(--border-thin);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90px;
  
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
  
  &.win {
    background: linear-gradient(135deg, var(--color-primary-alpha), rgba(1, 228, 153, 0.05));
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
  
  &.lose {
    background: linear-gradient(135deg, var(--color-accent-alpha), rgba(255, 92, 92, 0.05));
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
  }
`;

const BetHistory = ({ bets, totalBet = "¥25,478" }) => {
  const { playClickSound } = useAudio();
  
  const handleCardHover = () => {
    playClickSound();
  };
  
  return (
    <HistoryContainer>
      <HistoryHeader>
        <HistoryTitle>近期投注</HistoryTitle>
        <HistoryTotal className="interactive-element">总投注: {totalBet}</HistoryTotal>
      </HistoryHeader>
      
      <BetsGrid>
        {bets.map(bet => (
          <BetCard 
            key={bet.id} 
            className="interactive-element" 
            onMouseEnter={handleCardHover}
            onClick={handleCardHover}
          >
            <BetUser>
              <UserAvatar>{bet.user.charAt(0).toUpperCase()}</UserAvatar>
              <span>{bet.user}</span>
            </BetUser>
            <BetInfo>
              <BetValue>¥{bet.amount.toFixed(2)}</BetValue>
              {bet.result ? (
                <BetChoice className={bet.result}>
                  {bet.result === 'win' ? '赢' : '输'}
                </BetChoice>
              ) : (
                <BetChoice className={bet.choice}>
                  {bet.choice === 'red' ? '红色' : '黑色'}
                </BetChoice>
              )}
            </BetInfo>
          </BetCard>
        ))}
      </BetsGrid>
    </HistoryContainer>
  );
};

export default BetHistory;