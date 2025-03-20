// src/components/game/Roulette/RouletteWheel.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useAudio from '../../../hooks/useAudio';

const GameVisual = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background-elevated) 100%);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: var(--border-thin);
  box-shadow: var(--shadow-inner), 0 0 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s var(--easing-magnetic);
  z-index: 1;
  transform: translateZ(0);
  will-change: transform, box-shadow;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md), 0 10px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%);
    bottom: -120px;
    right: -120px;
    border-radius: 50%;
    opacity: 0.4;
    filter: blur(40px);
    z-index: 0;
    transition: all 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%);
    top: -100px;
    left: -100px;
    border-radius: 50%;
    opacity: 0.3;
    filter: blur(40px);
    z-index: 0;
    transition: all 0.5s ease;
  }
  
  &:hover::before {
    opacity: 0.6;
    transform: scale(1.3);
  }
  
  &:hover::after {
    opacity: 0.5;
    transform: scale(1.3);
  }
  
  &.shake-animation {
    animation: shake 0.5s ease-in-out;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  
  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const RouletteContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-bottom: var(--space-lg);
  z-index: 1;
  perspective: 1200px;
  
  @media (max-width: 420px) {
    width: 260px;
    height: 260px;
  }
`;

const RoulettePerspective = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s var(--easing-magnetic);
  will-change: transform;
`;

const RouletteWheelContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    var(--color-accent) 0deg 18deg, 
    #000000 18deg 36deg, 
    var(--color-accent) 36deg 54deg, 
    #000000 54deg 72deg, 
    var(--color-accent) 72deg 90deg, 
    #000000 90deg 108deg, 
    var(--color-accent) 108deg 126deg, 
    #000000 126deg 144deg, 
    var(--color-accent) 144deg 162deg, 
    #000000 162deg 180deg, 
    var(--color-accent) 180deg 198deg, 
    #000000 198deg 216deg, 
    var(--color-accent) 216deg 234deg, 
    #000000 234deg 252deg, 
    var(--color-accent) 252deg 270deg, 
    #000000 270deg 288deg, 
    var(--color-accent) 288deg 306deg, 
    #000000 306deg 324deg, 
    var(--color-accent) 324deg 342deg, 
    #000000 342deg 360deg
  );
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 
    0 0 30px rgba(0, 0, 0, 0.6), 
    0 0 20px var(--color-accent-glow),
    inset 0 0 30px rgba(0, 0, 0, 0.7);
  border: 12px solid var(--color-background);
  transition: transform 7s cubic-bezier(0.12, 0.95, 0.3, 1);
  transform-origin: center;
  will-change: transform;
  backface-visibility: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 50%;
    background: 
      linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    z-index: 2;
    pointer-events: none;
  }
  
  &.spin-animation {
    animation: spinFlash 7s linear forwards;
  }
  
  @keyframes spinFlash {
    0% { filter: brightness(1); }
    10% { filter: brightness(1.3); }
    20% { filter: brightness(1); }
    35% { filter: brightness(1.2); }
    50% { filter: brightness(1); }
    75% { filter: brightness(1.1); }
    90% { filter: brightness(1.3); }
    100% { filter: brightness(1); }
  }
  
  .theme-light & {
    box-shadow: 0 0 30px rgba(1, 209, 145, 0.1), 0 0 15px var(--color-accent-glow);
    border: 8px solid var(--color-background);
  }
`;

const RouletteCenter = styled.div`
  width: 80px;
  height: 80px;
  background: 
    radial-gradient(circle, var(--color-background-elevated) 0%, var(--color-background) 100%);
  border-radius: 50%;
  position: absolute;
  border: 4px solid var(--color-border-light);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    inset 0 0 15px rgba(0,0,0,0.5),
    0 0 15px rgba(0,0,0,0.5);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: 
      conic-gradient(transparent 0deg, rgba(255,255,255,0.1) 60deg, transparent 120deg);
    animation: rotateCenter 10s linear infinite;
  }
  
  &::after {
    content: '';
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    border-radius: 50%;
    box-shadow: 
      0 0 20px var(--color-primary-glow),
      inset 0 0 10px rgba(255,255,255,0.5);
    position: relative;
    z-index: 5;
    animation: centerPulse 2s infinite alternate ease-in-out;
  }
  
  @keyframes centerPulse {
    0% { transform: scale(0.95); }
    100% { transform: scale(1.05); }
  }
  
  @keyframes rotateCenter {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .theme-light & {
    background: radial-gradient(circle, white, #F4FBF8);
    border: 3px solid var(--theme-light-border);
  }
`;

const WheelGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 1s ease;
  
  &.red {
    box-shadow: 0 0 30px var(--color-accent-glow), inset 0 0 20px var(--color-accent-glow);
  }
  
  &.black {
    box-shadow: 0 0 30px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.1);
  }
  
  &.active {
    opacity: 1;
    animation: glowPulse 2s ease-in-out infinite;
  }
  
  @keyframes glowPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
`;

const RouletteBall = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  background: radial-gradient(circle at 30% 30%, white, #BBB);
  border-radius: 50%;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  transition: opacity 0.3s ease;
  will-change: transform;
  
  &.active {
    opacity: 1;
    animation: ballRotate 7s cubic-bezier(0.12, 0.95, 0.3, 1) forwards;
  }
  
  @keyframes ballRotate {
    0% { transform: translate(calc(-50% + 130px), -50%) rotate(0deg); }
    80% { transform: translate(calc(-50% + 80px), -50%) rotate(1800deg); }
    95% { transform: translate(calc(-50% + 30px), -50%) rotate(1980deg); }
    100% { transform: translate(-50%, -50%) rotate(2160deg); }
  }
`;

const RoulettePinContainer = styled.div`
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`;

const RoulettePin = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 22px solid var(--color-primary);
  filter: drop-shadow(0 0 8px var(--color-primary-glow));
  transform-origin: center bottom;
  animation: pinPulse 1.5s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -22px;
    left: -12px;
    width: 24px;
    height: 6px;
    background: var(--color-primary-dark);
    border-radius: 3px 3px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -16px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: var(--color-primary-light);
    border-radius: 50%;
    box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes pinPulse {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px var(--color-primary-glow)); }
    50% { transform: scale(1.1); filter: drop-shadow(0 0 12px var(--color-primary-glow)); }
  }
`;

const WheelBackdrop = styled.div`
  position: absolute;
  top: -15px;
  bottom: -15px;
  left: -15px;
  right: -15px;
  border-radius: 50%;
  background: 
    linear-gradient(135deg, var(--color-background-elevated) 0%, var(--color-background) 100%);
  box-shadow: 
    inset 0 0 30px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;
  overflow: hidden;
`;

const WheelColors = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
  position: relative;
  z-index: 1;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  transition: all 0.3s var(--easing-magnetic);
  opacity: 0.7;
  cursor: pointer;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -15px;
    border-radius: var(--radius-lg);
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 0.3;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    opacity: 1;
  }
  
  &.active {
    opacity: 1;
    transform: translateY(-3px);
  }
  
  &.active .color-indicator {
    border: 3px solid white;
    box-shadow: 0 0 20px var(--color-primary-glow);
  }
  
  &.pulse-animation .color-indicator {
    animation: highlight-pulse 1.5s infinite;
  }
  
  @keyframes highlight-pulse {
    0% { box-shadow: 0 0 0 0 var(--color-primary-glow); }
    70% { box-shadow: 0 0 0 15px rgba(1, 228, 153, 0); }
    100% { box-shadow: 0 0 0 0 rgba(1, 228, 153, 0); }
  }
`;

const ColorIndicator = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--color-border-light);
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s var(--easing-explosive);
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
  }
`;

const ColorRed = styled(ColorIndicator)`
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark));
`;

const ColorBlack = styled(ColorIndicator)`
  background: linear-gradient(135deg, #333, #000);
`;

const ColorLabel = styled.div`
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
  
  ${ColorContainer}:hover &,
  ${ColorContainer}.active & {
    color: var(--color-primary);
    font-weight: 600;
    text-shadow: 0 0 5px var(--color-primary-glow);
  }
`;

const RouletteWheel = ({ isSpinning, selectedBet, onSelectBet, spinResult, resultIndicatorRef }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [ballActive, setBallActive] = useState(false);
  const [glowActive, setGlowActive] = useState(false);
  const [glowColor, setGlowColor] = useState(null);
  const { playClickSound } = useAudio();

  // 处理3D效果
  const handleMouseMove = (e) => {
    if (isSpinning) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;
    
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  // 颜色选择
  const handleSelectColor = (color) => {
    onSelectBet(color);
    playClickSound();
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
    
    // 创建选择粒子效果
    createSelectionParticles(color);
  };

  // 创建选择颜色时的粒子效果
  const createSelectionParticles = (color) => {
    const container = document.getElementById('particlesContainer');
    if (!container || document.documentElement.classList.contains('performance-mode')) return;
    
    // 清除现有粒子
    container.innerHTML = '';
    
    // 创建新粒子
    const particleCount = 20;
    const particleColor = color === 'red' ? 'var(--color-accent)' : '#FFFFFF';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.background = particleColor;
      
      // 随机位置
      const x = Math.random() * 280;
      const y = Math.random() * 280;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // 动画
      const duration = Math.random() * 1 + 0.5;
      const delay = Math.random() * 0.3;
      const size = Math.random() * 6 + 3;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // 使用Web Animation API提高性能
      particle.animate([
        { transform: 'scale(0)', opacity: 0 },
        { transform: 'scale(1)', opacity: 0.8 },
        { transform: 'scale(0)', opacity: 0 }
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        fill: 'forwards',
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      });
      
      container.appendChild(particle);
    }
  };

  // 处理旋转效果
  useEffect(() => {
    if (!isSpinning || !spinResult) return;
    
    // 定义红黑位置
    const redPositions = [9, 27, 45, 63, 81, 99, 117, 135, 153, 171];
    const blackPositions = [18, 36, 54, 72, 90, 108, 126, 144, 162, 180];
    
    // 选择对应颜色的随机位置
    let resultPosition;
    if (spinResult === 'red') {
      resultPosition = redPositions[Math.floor(Math.random() * redPositions.length)];
    } else {
      resultPosition = blackPositions[Math.floor(Math.random() * blackPositions.length)];
    }
    
    // 计算总旋转角度
    const totalRotation = 1440 + resultPosition;
    
    // 重置轮盘位置
    setRotation(0);
    
    // 强制重绘
    setTimeout(() => {
      setRotation(totalRotation);
      setBallActive(true);
      
      // 等待旋转动画完成后显示结果光效
      setTimeout(() => {
        setBallActive(false);
        setGlowColor(spinResult);
        setGlowActive(true);
        
        // 清除光效
        setTimeout(() => {
          setGlowActive(false);
          setGlowColor(null);
        }, 3000);
      }, 7000);
    }, 50);
  }, [isSpinning, spinResult]);

  return (
    <GameVisual className="game-visual gpu-layer" data-parallax="0.05">
      <RouletteContainer 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="result-indicator" ref={resultIndicatorRef}></div>
        <RoulettePinContainer>
          <RoulettePin></RoulettePin>
        </RoulettePinContainer>
        <WheelBackdrop></WheelBackdrop>
        <RoulettePerspective 
          style={{ 
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
          }}
        >
          <RouletteWheelContainer 
            className={isSpinning ? 'spin-animation' : ''}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <WheelGlow 
              className={`${glowColor || ''} ${glowActive ? 'active' : ''}`}
            />
            <RouletteBall className={ballActive ? 'active' : ''} />
            <RouletteCenter></RouletteCenter>
          </RouletteWheelContainer>
        </RoulettePerspective>
        <ParticlesContainer id="particlesContainer"></ParticlesContainer>
      </RouletteContainer>
      <WheelColors>
        <ColorContainer 
          className={`${selectedBet === 'red' ? 'active' : ''}`} 
          data-color="red"
          onClick={() => handleSelectColor('red')}
        >
          <ColorRed className="color-indicator color-red"></ColorRed>
          <ColorLabel>红色</ColorLabel>
        </ColorContainer>
        <ColorContainer 
          className={`${selectedBet === 'black' ? 'active' : ''}`} 
          data-color="black"
          onClick={() => handleSelectColor('black')}
        >
          <ColorBlack className="color-indicator color-black"></ColorBlack>
          <ColorLabel>黑色</ColorLabel>
        </ColorContainer>
      </WheelColors>
    </GameVisual>
  );
};

export default RouletteWheel;