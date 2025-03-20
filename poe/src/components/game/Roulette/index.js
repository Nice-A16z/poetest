import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { WalletContext } from "../../../contexts/WalletContext";
import useAudio from "../../../hooks/useAudio";
import RouletteWheel from "./RouletteWheel";
import BetControls from "./BetControls";
import BetHistory from "./BetHistory";
import WinModal from "./WinModal";
import LoseModal from "./LoseModal";

const FeaturedGame = styled.div`
  background-color: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: var(--border-thin);
  margin-bottom: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: all 0.4s var(--easing-magnetic);
  position: relative;
  transform: translateZ(0);
  will-change: transform, box-shadow;

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
    z-index: 0;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg), 0 15px 30px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const GameHeader = styled.div`
  padding: var(--space-md) var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border-thin);
  background: linear-gradient(
    135deg,
    var(--color-background-elevated),
    var(--color-background-pressed)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;

  .theme-light & {
    background: linear-gradient(
      135deg,
      var(--theme-light-background-elevated),
      var(--theme-light-background-pressed)
    );
    border-bottom: 1px solid var(--color-primary-alpha);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
`;

const GameLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  max-width: 80%;

  @media (max-width: 560px) {
    max-width: 100%;
  }

  @media (max-width: 560px) {
    flex-wrap: wrap;
    gap: var(--space-sm);
  }
`;

const GameTitle = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-weight: 600;
  white-space: nowrap;
`;

const GameIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-background);
  font-size: var(--font-size-sm);
  font-weight: 700;
  box-shadow: var(--shadow-primary), 0 0 15px var(--color-primary-glow);
  position: relative;
  transition: transform 0.3s var(--easing-explosive);

  ${FeaturedGame}:hover & {
    transform: rotate(15deg) scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`;

const GameStats = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);

  @media (max-width: 560px) {
    gap: var(--space-xs);
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  background-color: var(--color-background-elevated);
  padding: var(--space-xxs) var(--space-md);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  transition: all 0.3s var(--easing-magnetic);

  ${FeaturedGame}:hover & {
    background-color: var(--color-background-pressed);
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px var(--color-primary-glow);
  }
`;

const StatIcon = styled.span`
  color: var(--color-primary);
`;

const FeaturedTag = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: #000;
  font-size: var(--font-size-xs);
  font-weight: 600;
  padding: var(--space-xs) var(--space-md);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  box-shadow: var(--shadow-primary), 0 0 15px var(--color-primary-glow);
  z-index: 10;
  white-space: nowrap;
  animation: tagPulse 2s infinite alternate ease-in-out;

  @keyframes tagPulse {
    0% {
      box-shadow: var(--shadow-primary), 0 0 15px rgba(1, 228, 153, 0.1);
    }
    100% {
      box-shadow: var(--shadow-primary), 0 0 20px rgba(1, 228, 153, 0.3);
    }
  }

  @media (max-width: 560px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`;

const GameContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  padding: var(--space-lg);
  position: relative;
  z-index: 1;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ResultIndicator = styled.div`
  position: absolute;
  top: -90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 8px 16px;
  font-weight: 600;
  font-size: var(--font-size-md);
  box-shadow: var(--shadow-md);
  z-index: 100;
  opacity: 0;
  transition: all 0.4s var(--easing-explosive);
  border: 1px solid var(--color-border-light);
  pointer-events: none;

  &.win {
    background-color: var(--color-primary-alpha);
    color: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow: 0 0 20px var(--color-primary-glow);
    animation: winZoom 1s ease-in-out infinite;
  }

  &.lose {
    background-color: var(--color-accent-alpha);
    color: var(--color-accent);
    border-color: var(--color-accent);
    box-shadow: 0 0 20px var(--color-accent-glow);
  }

  &.show {
    top: -70px;
    opacity: 1;
  }

  @keyframes winZoom {
    0% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.1);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }
`;

const RouletteGame = () => {
  const { walletBtc, addFunds, deductFunds } = useContext(WalletContext);
  const {
    playClickSound,
    playErrorSound,
    playRouletteSpinSound,
    playWinSound,
    playLoseSound,
  } = useAudio();

  const [selectedBet, setSelectedBet] = useState("red");
  const [betAmount, setBetAmount] = useState(100);
  const [potentialWin, setPotentialWin] = useState(200);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [betsHistory, setBetsHistory] = useState([
    { id: 1, user: "user123", amount: 500, choice: "red" },
    { id: 2, user: "幸运玩家", amount: 1200, choice: "black" },
    { id: 3, user: "赢家666", amount: 350, choice: "red" },
    { id: 4, user: "德州大师", amount: 850, choice: "black" },
  ]);

  const resultIndicatorRef = useRef(null);

  // 更新潜在获胜金额
  useEffect(() => {
    setPotentialWin(betAmount * 2);
  }, [betAmount]);

  // 处理下注选择
  const handleBetSelect = (bet) => {
    setSelectedBet(bet);
    playClickSound();

    // 添加触觉反馈
    if ("vibrate" in navigator) {
      navigator.vibrate(3);
    }
  };

  // 处理下注金额变更
  const handleBetAmountChange = (amount) => {
    setBetAmount(amount);
  };

  //增加一个清理函数，确保组件卸载时正确清理
  useEffect(() => {
    return () => {
      // 清理可能的超时和未完成的动画
      const wheel = document.querySelector(".roulette-wheel");
      if (wheel) {
        wheel.style.transition = "none";
        wheel.style.transform = "rotate(0deg)";
      }
    };
  }, []);

  // 处理轮盘旋转
  const handleSpin = () => {
    if (isSpinning) return;

    // 检查是否选择了下注
    if (!selectedBet) {
      showResultMessage("请选择颜色", "error");
      return;
    }

    // 检查下注金额是否有效
    if (betAmount <= 0) {
      showResultMessage("请输入有效金额", "error");
      return;
    }

    // 检查资金是否足够
    const btcAmount = betAmount / 300000;
    if (btcAmount > walletBtc) {
      showResultMessage("余额不足", "error");
      return;
    }

    // 执行下注
    const success = deductFunds(btcAmount);
    if (!success) {
      showResultMessage("余额不足", "error");
      return;
    }

    // 设置旋转状态
    setIsSpinning(true);

    // 播放音效
    playRouletteSpinSound();

    // 重要：先重置旋转状态，设置为0度
    const wheel = document.querySelector(".roulette-wheel");
    if (wheel) {
      // 移除任何之前的过渡效果
      wheel.style.transition = "none";

      // 强制重绘，确保样式变更被应用
      void wheel.offsetWidth;

      // 设置旋转为0度（或当前度数）
      wheel.style.transform = `rotate(0deg)`;

      // 再次强制重绘
      void wheel.offsetWidth;

      // 重新添加过渡效果
      wheel.style.transition =
        "transform 5s cubic-bezier(0.17, 0.67, 0.24, 0.99)";
    }

    // 添加触觉反馈
    if ("vibrate" in navigator) {
      navigator.vibrate([10, 50, 10]);
    }

    // 随机结果（红或黑）
    const result = Math.random() > 0.5 ? "red" : "black";
    setSpinResult(result);

    // 等待旋转动画完成
    setTimeout(() => {
      setIsSpinning(false);

      // 判断玩家是否获胜
      const hasWon = selectedBet === result;

      // 显示结果提示
      //   showResultMessage(hasWon ? '赢了!' : '输了!', hasWon ? 'win' : 'lose');

      // 显示适当的模态框
      if (hasWon) {
        playWinSound();

        // 添加成功触觉反馈
        if ("vibrate" in navigator) {
          navigator.vibrate([10, 30, 10, 30, 10]);
        }

        // 更新历史记录
        const newBet = {
          id: Date.now(),
          user: "您",
          amount: betAmount,
          choice: selectedBet,
          result: "win",
        };
        setBetsHistory((prev) => [newBet, ...prev.slice(0, 3)]);

        setTimeout(() => {
          setShowWinModal(true);
        }, 1000);
      } else {
        playLoseSound();

        // 添加失败触觉反馈
        if ("vibrate" in navigator) {
          navigator.vibrate(30);
        }

        // 更新历史记录
        const newBet = {
          id: Date.now(),
          user: "您",
          amount: betAmount,
          choice: selectedBet,
          result: "lose",
        };
        setBetsHistory((prev) => [newBet, ...prev.slice(0, 3)]);

        setTimeout(() => {
          setShowLoseModal(true);
        }, 1000);
      }
    }, 7000);
  };

  // 显示结果信息
  const showResultMessage = (message, type = "info") => {
    if (resultIndicatorRef.current) {
      resultIndicatorRef.current.textContent = message;
      resultIndicatorRef.current.className = `result-indicator show ${type}`;

      if (type === "error") {
        playErrorSound();

        // 显示错误触觉反馈
        if ("vibrate" in navigator) {
          navigator.vibrate(30);
        }
      }

      setTimeout(() => {
        if (resultIndicatorRef.current) {
          resultIndicatorRef.current.className = "result-indicator";
        }
      }, 2000);
    }
  };

  // 处理游戏继续
  const handleContinue = () => {
    if (showWinModal) {
      setShowWinModal(false);

      // 添加奖金到钱包
      const winAmount = (betAmount * 2) / 300000; // 转换为BTC
      addFunds(winAmount);

      // 添加触觉反馈
      if ("vibrate" in navigator) {
        navigator.vibrate([3, 50, 10]);
      }

      // 自动开始新一轮
      setTimeout(() => {
        if (!isSpinning) {
          handleSpin();
        }
      }, 800);
    } else if (showLoseModal) {
      setShowLoseModal(false);

      // 添加触觉反馈
      if ("vibrate" in navigator) {
        navigator.vibrate([3, 50, 10]);
      }

      setTimeout(() => {
        if (!isSpinning) {
          handleSpin();
        }
      }, 800);
    }
  };

  // 处理收集奖金
  const handleCollect = () => {
    setShowWinModal(false);

    // 添加奖金到钱包
    const winAmount = (betAmount * 2) / 300000; // 转换为BTC
    addFunds(winAmount);

    // 添加成功触觉反馈
    if ("vibrate" in navigator) {
      navigator.vibrate([10, 30, 10, 30, 10]);
    }

    // 播放金币声音
    // playCoinSound();

    // 显示通知
    setTimeout(() => {
      const toast = document.createElement("div");
      toast.style.position = "fixed";
      toast.style.bottom = "20px";
      toast.style.left = "50%";
      toast.style.transform = "translateX(-50%)";
      toast.style.backgroundColor = "var(--color-primary)";
      toast.style.color = "var(--color-background)";
      toast.style.padding = "12px 24px";
      toast.style.borderRadius = "var(--radius-md)";
      toast.style.boxShadow =
        "var(--shadow-lg), 0 5px 15px var(--color-primary-glow)";
      toast.style.zIndex = "9999";
      toast.style.fontWeight = "600";
      toast.style.opacity = "0";
      toast.style.transition =
        "opacity 0.3s var(--easing-explosive), transform 0.3s var(--easing-explosive)";
      toast.style.transform = "translate(-50%, 20px)";
      toast.innerHTML = "🎉 奖金已添加到您的钱包！";

      document.body.appendChild(toast);

      // 强制重绘
      void toast.offsetWidth;

      toast.style.opacity = "1";
      toast.style.transform = "translate(-50%, 0)";

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translate(-50%, -20px)";

        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
    }, 500);
  };

  return (
    <FeaturedGame className="featured-game gpu-layer">
      <GameHeader>
        <GameLeftSection>
          <GameTitle>
            <GameIcon>R</GameIcon>
            <span>幸运轮盘</span>
          </GameTitle>
          <GameStats>
            <Stat>
              <StatIcon>👥</StatIcon>
              <span>在线: 1,254</span>
            </Stat>
            <Stat>
              <StatIcon>💰</StatIcon>
              <span>奖池: ¥35,780</span>
            </Stat>
          </GameStats>
        </GameLeftSection>
        <FeaturedTag>热门游戏</FeaturedTag>
      </GameHeader>

      <GameContent>
        <RouletteWheel
          isSpinning={isSpinning}
          selectedBet={selectedBet}
          onSelectBet={handleBetSelect}
          spinResult={spinResult}
          resultIndicatorRef={resultIndicatorRef}
        />

        <BetControls
          selectedBet={selectedBet}
          betAmount={betAmount}
          potentialWin={potentialWin}
          isSpinning={isSpinning}
          onBetSelect={handleBetSelect}
          onBetAmountChange={handleBetAmountChange}
          onSpin={handleSpin}
          betsHistory={betsHistory}
        />
      </GameContent>

      <WinModal
        isOpen={showWinModal}
        betAmount={betAmount}
        winAmount={betAmount * 2}
        onContinue={handleContinue}
        onCollect={handleCollect}
        onClose={() => setShowWinModal(false)}
      />

      <LoseModal
        isOpen={showLoseModal}
        onTryAgain={handleContinue}
        onClose={() => setShowLoseModal(false)}
      />
    </FeaturedGame>
  );
};

export default RouletteGame;
