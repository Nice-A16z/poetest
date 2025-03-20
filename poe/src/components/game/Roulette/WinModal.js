// src/components/game/Roulette/WinModal.js
import React, { useEffect } from "react";
import styled from "styled-components";
import useAudio from "../../../hooks/useAudio";

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
  box-shadow: var(--shadow-lg), 0 20px 40px var(--color-primary-glow);
  border: var(--border-thin);
  position: relative;
  margin: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      var(--color-primary-alpha) 30%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.5;
  }

  ${ModalOverlay}.active & {
    transform: scale(1);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const ModalHeader = styled.div`
  padding: var(--space-md) var(--space-lg);
  background: linear-gradient(
    135deg,
    var(--color-surface),
    var(--color-surface-hover)
  );
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
    box-shadow: var(--shadow-md), 0 0 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const ModalTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-xxs);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-primary)
  );
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
  animation: bounce 1.5s infinite alternate var(--easing-explosive);
  filter: drop-shadow(0 0 10px var(--color-primary-glow));

  @keyframes bounce {
    from {
      transform: translateY(0) scale(1);
    }
    to {
      transform: translateY(-15px) scale(1.1);
    }
  }
`;

const ResultMessage = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: textGlow 2s infinite alternate ease-in-out;

  @keyframes textGlow {
    0% {
      text-shadow: 0 0 5px rgba(1, 228, 153, 0.1);
    }
    100% {
      text-shadow: 0 0 15px rgba(1, 228, 153, 0.3);
    }
  }
`;

const WinDetails = styled.div`
  background-color: var(--color-surface);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
  border: var(--border-thin);
  box-shadow: var(--shadow-inner);
  position: relative;
  overflow: hidden;
  transition: all 0.3s var(--easing-magnetic);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      var(--color-primary-alpha) 30%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 8px 20px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const WinInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xs);
  position: relative;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
    padding-top: var(--space-xs);
    border-top: var(--border-thin);
  }
`;

const WinLabel = styled.div`
  color: var(--color-text-secondary);
`;

const WinValue = styled.div`
  font-weight: 600;
`;

const WinTotal = styled(WinValue)`
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  text-shadow: 0 0 10px var(--color-primary-glow);
  animation: winTotalPulse 2s infinite alternate ease-in-out;

  @keyframes winTotalPulse {
    0% {
      text-shadow: 0 0 5px var(--color-primary-glow);
    }
    100% {
      text-shadow: 0 0 15px var(--color-primary-glow);
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: var(--space-sm);
  padding: 0 var(--space-lg) var(--space-lg);
`;

const ModalButton = styled.button`
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-align: center;
  transition: all 0.3s var(--easing-magnetic);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    z-index: 0;
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
`;

const ContinueButton = styled(ModalButton)`
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: #000;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-primary), 0 4px 0 var(--color-primary-dark);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-primary), 0 6px 0 var(--color-primary-dark),
      0 10px 20px rgba(1, 228, 153, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: var(--shadow-primary), 0 2px 0 var(--color-primary-dark);
  }
`;

const CollectButton = styled(ModalButton)`
  background: linear-gradient(
    135deg,
    var(--color-surface),
    var(--color-surface-hover)
  );
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-sm), 0 4px 0 var(--color-border);

  &:hover {
    background: linear-gradient(
      135deg,
      var(--color-surface-hover),
      var(--color-background-pressed)
    );
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), 0 6px 0 var(--color-border),
      0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: var(--shadow-sm), 0 2px 0 var(--color-border);
  }

  .theme-light & {
    border-color: var(--color-primary);
  }
`;

// 创建五彩纸屑效果
const createConfetti = () => {
  if (document.documentElement.classList.contains("performance-mode")) return;

  // 清理现有纸屑
  const existingContainer = document.getElementById("confettiContainer");
  if (existingContainer) {
    existingContainer.innerHTML = "";
  } else {
    // 创建新容器
    const container = document.createElement("div");
    container.id = "confettiContainer";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);
  }

  const confettiContainer = document.getElementById("confettiContainer");
  const colors = ["#ff4e50", "#fc913a", "#f9d423", "#01e499", "#4d61fc"];
  const confettiCount = 150;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");

    const size = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.background = color;
    confetti.style.position = "absolute";
    confetti.style.top = "50%";
    confetti.style.left = "50%";
    confetti.style.borderRadius = "50%";
    confetti.style.transform = "translate(-50%, -50%)";

    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 0.5;
    const startX = 0;
    const startY = 0;
    const endX = (Math.random() - 0.5) * 400;
    const endY = (Math.random() - 0.5) * 400;
    const rotateStart = 0;
    const rotateEnd = Math.random() * 720 - 360;

    // 使用Web Animation API提高性能
    confetti.animate(
      [
        {
          transform: `translate3d(${startX}px, ${startY}px, 0) rotate(${rotateStart}deg)`,
          opacity: 1,
        },
        {
          transform: `translate3d(${endX}px, ${endY}px, 0) rotate(${rotateEnd}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: "cubic-bezier(0.1, 0.8, 0.2, 1)",
        fill: "forwards",
      }
    );

    confettiContainer.appendChild(confetti);
  }

  // 自动清理
  setTimeout(() => {
    if (confettiContainer && confettiContainer.parentNode) {
      confettiContainer.innerHTML = "";
    }
  }, 6000);
};

// 清理五彩纸屑
const clearConfetti = () => {
  const confettiContainer = document.getElementById("confettiContainer");
  if (confettiContainer) {
    confettiContainer.innerHTML = "";
  }
};

// 创建金币下落效果
const createCoins = () => {
  if (document.documentElement.classList.contains("performance-mode")) return;

  // 清理现有金币
  const existingContainer = document.getElementById("coinsContainer");
  if (existingContainer) {
    existingContainer.innerHTML = "";
  } else {
    // 创建新容器
    const container = document.createElement("div");
    container.id = "coinsContainer";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9998";
    document.body.appendChild(container);
  }

  const coinsContainer = document.getElementById("coinsContainer");
  const coinColors = ["#FFD700", "#FFC107", "#FFCA28", "#FFD54F", "#FDD835"];
  const coinCount = 100;

  for (let i = 0; i < coinCount; i++) {
    const coin = document.createElement("div");

    // 随机大小
    const size = Math.random() * 20 + 15;

    // 随机颜色
    const color = coinColors[Math.floor(Math.random() * coinColors.length)];

    // 设置样式
    coin.style.width = `${size}px`;
    coin.style.height = `${size}px`;
    coin.style.background = `radial-gradient(circle at 30% 30%, ${color}, #B8860B)`;
    coin.style.position = "absolute";
    coin.style.borderRadius = "50%";
    coin.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.5)";

    // 添加$ symbol
    coin.innerHTML = `<span style="
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        color: rgba(0,0,0,0.5); 
        font-weight: bold; 
        font-size: ${size * 0.8}px;
      ">$</span>`;

    // 随机初始位置 (只在顶部)
    const startX = Math.random() * window.innerWidth;
    coin.style.left = `${startX}px`;
    coin.style.top = `-${size}px`;

    // 随机终点位置 (底部)
    const endX = startX + (Math.random() - 0.5) * 200; // 左右偏移

    // 随机动画参数
    const duration = Math.random() * 2 + 1.5;
    const delay = Math.random() * 1.5;

    // 使用Web Animation API提高性能
    const animation = coin.animate(
      [
        {
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1,
        },
        {
          transform: `translate(${endX - startX}px, ${
            window.innerHeight + size
          }px) rotate(${Math.random() * 720}deg)`,
          opacity: 0.8,
        },
      ],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
        fill: "forwards",
      }
    );

    // 闪烁效果
    coin.animate(
      [
        { boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)" },
        { boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" },
        { boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)" },
      ],
      {
        duration: 1000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );

    coinsContainer.appendChild(coin);

    // 动画结束后移除元素
    animation.onfinish = () => {
      if (coin.parentNode === coinsContainer) {
        coinsContainer.removeChild(coin);
      }
    };
  }

  // 自动清理
  setTimeout(() => {
    if (coinsContainer && coinsContainer.parentNode) {
      coinsContainer.innerHTML = "";
    }
  }, 6000);
};

// 清理金币效果
const clearCoins = () => {
  const coinsContainer = document.getElementById("coinsContainer");
  if (coinsContainer) {
    coinsContainer.innerHTML = "";
  }
};

const WinModal = ({
  isOpen,
  betAmount,
  winAmount,
  onContinue,
  onCollect,
  onClose,
}) => {
  const { playClickSound } = useAudio();

  // 当模态框打开时创建纸屑效果
  useEffect(() => {
    if (isOpen) {
      createConfetti();
    } else {
      clearConfetti();
      clearCoins();
    }
  }, [isOpen]);

  const handleButtonClick = (callback) => {
    playClickSound();

    // 对于收集奖励按钮特殊处理
    if (callback === onCollect) {
      if ("vibrate" in navigator) {
        navigator.vibrate([10, 30, 10]); // 更强的振动感
      }

      // 播放金币音效
      const playCoinSound = () => {
        const coinAudio = new Audio("/sounds/coins.mp3");
        coinAudio.volume = 0.5;
        coinAudio.play().catch((err) => console.log("Audio play failed:", err));
      };

      try {
        playCoinSound();
      } catch (e) {
        console.log("Error playing coin sound:", e);
      }

      // 创建金币效果
      createCoins();

      // 延迟一下再关闭模态框，让用户看到金币效果
      setTimeout(() => {
        if (callback) callback();
      }, 4000);
    } else {
      // 其他按钮正常处理
      if ("vibrate" in navigator) {
        navigator.vibrate(3);
      }

      if (callback) callback();
    }
  };

  return (
    <ModalOverlay className={isOpen ? "active" : ""}>
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
          <ResultEmoji>🎉</ResultEmoji>
          <ResultMessage>恭喜你，你赢了！</ResultMessage>
          <WinDetails className="interactive-element">
            <WinInfo>
              <WinLabel>下注金额:</WinLabel>
              <WinValue>¥{betAmount.toFixed(2)}</WinValue>
            </WinInfo>
            <WinInfo>
              <WinLabel>赢得金额:</WinLabel>
              <WinTotal>¥{winAmount.toFixed(2)}</WinTotal>
            </WinInfo>
          </WinDetails>
        </ModalContent>
        <ModalActions>
          <ContinueButton
            className="interactive-element"
            onClick={() => handleButtonClick(onContinue)}
          >
            再玩一次
          </ContinueButton>
          <CollectButton
            className="interactive-element"
            onClick={() => handleButtonClick(onCollect)}
          >
            收取奖金
          </CollectButton>
        </ModalActions>
      </ResultModal>
    </ModalOverlay>
  );
};

export default WinModal;
