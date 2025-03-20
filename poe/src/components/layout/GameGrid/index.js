// src/components/layout/GameGrid/index.js
import React from 'react';
import styled from 'styled-components';
import useAudio from '../../../hooks/useAudio';

const Section = styled.div`
  margin-bottom: var(--space-xxl);
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
  }
`;

const ViewMore = styled.a`
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    color: var(--color-primary-light);
    transform: translateX(4px);
  }
`;

const ViewMoreIcon = styled.span`
  transition: transform 0.3s var(--easing-explosive);
  
  ${ViewMore}:hover & {
    transform: translateX(6px);
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`;

const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
`;

const GameCard = styled.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.4s var(--easing-magnetic);
  border: var(--border-thin);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  height: 100%;
  position: relative;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: var(--shadow-lg), 0 15px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
    z-index: 2;
  }
  
  &:hover .game-img::before {
    opacity: 1;
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const GameImage = styled.div`
  height: 160px;
  background-color: var(--color-surface);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
    z-index: 1;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: 'PLAY NOW';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    color: var(--color-text-primary);
    background: linear-gradient(135deg, var(--color-primary-alpha), var(--color-primary-glow));
    padding: 10px 20px;
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: 600;
    opacity: 0;
    transition: all 0.4s var(--easing-explosive);
    z-index: 3;
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 20px var(--color-primary-glow);
  }
  
  ${GameCard}:hover &::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const GameImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.background || 'linear-gradient(135deg, #1e3c72, #2a5298)'};
  background-size: cover;
  background-position: center;
  transition: transform 0.7s var(--easing-magnetic);
  will-change: transform;
  
  ${GameCard}:hover & {
    transform: scale(1.2);
  }
`;

const GameImageIcon = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  z-index: 2;
  font-size: 28px;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s var(--easing-explosive);
  
  ${GameCard}:hover & {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 0 30px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
`;

const GameImageTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  font-weight: 600;
  z-index: 2;
  text-align: left;
  transition: all 0.3s ease;
  
  ${GameCard}:hover & {
    padding-bottom: 25px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const GameBadge = styled.div`
  position: absolute;
  top: var(--space-xs);
  padding: 5px 10px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  z-index: 2;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s var(--easing-magnetic);
  
  ${GameCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const LiveBadge = styled(GameBadge)`
  right: var(--space-xs);
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark));
  color: white;
  animation: livePulse 2s infinite alternate ease-in-out;
  
  @keyframes livePulse {
    0% { box-shadow: 0 0 5px var(--color-accent-glow); }
    100% { box-shadow: 0 0 15px var(--color-accent-glow); }
  }
`;

const PopularBadge = styled(GameBadge)`
  left: var(--space-xs);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: var(--color-background);
  animation: popularPulse 2s infinite alternate ease-in-out;
  
  @keyframes popularPulse {
    0% { box-shadow: 0 0 5px var(--color-primary-glow); }
    100% { box-shadow: 0 0 15px var(--color-primary-glow); }
  }
`;

const GameDetails = styled.div`
  padding: var(--space-md);
  position: relative;
  background: linear-gradient(to bottom, var(--color-background-elevated), var(--color-surface));
  border-top: var(--border-thin);
  transition: all 0.3s ease;
  
  ${GameCard}:hover & {
    background: linear-gradient(to bottom, var(--color-background-elevated), var(--color-primary-alpha));
  }
`;

const GameName = styled.h3`
  font-weight: 600;
  font-size: var(--font-size-md);
  margin-bottom: var(--space-xxs);
  transition: all 0.3s ease;
  
  ${GameCard}:hover & {
    color: var(--color-primary);
    transform: translateX(5px);
  }
`;

const GameProvider = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
  transition: all 0.3s ease;
  
  ${GameCard}:hover & {
    transform: translateX(5px);
  }
`;

const GameMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  transition: all 0.3s ease;
  
  ${GameCard}:hover & {
    transform: translateX(5px);
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  background-color: var(--color-background-elevated);
  padding: 5px 10px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  transition: all 0.3s var(--easing-magnetic);
  
  ${GameCard}:hover & {
    background-color: var(--color-primary-alpha);
    border-color: var(--color-primary);
    box-shadow: 0 5px 15px var(--color-primary-glow);
    color: var(--color-primary);
  }
`;

// 可能的游戏数据
const gameData = [
  {
    id: 1,
    name: '德州扑克锦标赛',
    provider: 'PokerNow原创',
    icon: '♠️',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    live: true,
    popular: true,
    players: 456,
    prize: '¥10,000'
  },
  {
    id: 2,
    name: '现金德州扑克',
    provider: 'PokerNow原创',
    icon: '♥️',
    background: 'linear-gradient(135deg, #4b6cb7, #182848)',
    players: 178,
    prize: '无限注'
  },
  {
    id: 3,
    name: '百家乐',
    provider: 'PokerNow Casino',
    icon: '♦️',
    background: 'linear-gradient(135deg, #904e95, #e96443)',
    players: 89,
    prize: '¥50-5,000'
  },
  {
    id: 4,
    name: 'VIP德州扑克',
    provider: 'PokerNow VIP',
    icon: '♣️',
    background: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
    live: true,
    players: 64,
    prize: '¥1,000 起'
  },
  {
    id: 5,
    name: '每周锦标赛',
    provider: 'PokerNow赛事',
    icon: '🎲',
    background: 'linear-gradient(135deg, #834d9b, #d04ed6)',
    players: 320,
    prize: '¥20,000'
  },
  {
    id: 6,
    name: '老虎机',
    provider: 'PokerNow Casino',
    icon: '🎮',
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    players: 145,
    prize: '¥1-1,000'
  },
  {
    id: 7,
    name: '奥马哈扑克',
    provider: 'PokerNow原创',
    icon: '🎯',
    background: 'linear-gradient(135deg, #40e0d0, #ff8c00, #ff0080)',
    players: 78,
    prize: '¥50-500'
  },
  {
    id: 8,
    name: '五张牌撲克',
    provider: 'PokerNow原创',
    icon: '🏆',
    background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
    popular: true,
    players: 42,
    prize: '¥20-200'
  }
];

const GameGrid = () => {
  const { playClickSound } = useAudio();

  const handleGameClick = () => {
    playClickSound();
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
  };

  return (
    <Section className="games-section">
      <SectionTitle>
        热门直播
        <ViewMore href="#" className="interactive-element">
          查看更多
          <ViewMoreIcon>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ViewMoreIcon>
        </ViewMore>
      </SectionTitle>
      
      <GamesGrid>
        {gameData.map(game => (
          <GameCard 
            key={game.id} 
            className="interactive-element gpu-layer"
            onClick={handleGameClick}
          >
            <GameImage className="game-img">
              {game.live && <LiveBadge className="badge-live">直播中</LiveBadge>}
              {game.popular && <PopularBadge className="badge-popular">热门</PopularBadge>}
              <GameImageContent 
                className="game-img-content" 
                background={game.background} 
              />
              <GameImageIcon className="game-img-icon">{game.icon}</GameImageIcon>
              <GameImageTitle className="game-img-title">{game.name}</GameImageTitle>
            </GameImage>
            <GameDetails>
              <GameName>{game.name}</GameName>
              <GameProvider>{game.provider}</GameProvider>
              <GameMeta>
                <MetaInfo>
                  <span>👤</span>
                  <span>{game.players} 人</span>
                </MetaInfo>
                <MetaInfo>
                  <span>💰</span>
                  <span>{game.prize}</span>
                </MetaInfo>
              </GameMeta>
            </GameDetails>
          </GameCard>
        ))}
      </GamesGrid>
    </Section>
  );
};

export default GameGrid;