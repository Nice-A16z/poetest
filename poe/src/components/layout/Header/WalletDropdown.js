import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { WalletContext } from "../../../contexts/WalletContext";
import useAudio from "../../../hooks/useAudio";

const WalletAmount = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  z-index: 2;
`;

const WalletButton = styled.button`
  background-color: var(--color-background-elevated);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-xs) var(--space-sm);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all 0.3s var(--easing-magnetic);
  height: 40px;
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-primary-alpha),
      transparent
    );
    transform: translateX(-100%);
    z-index: 1;
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: var(--color-background-pressed);
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 0 10px var(--color-primary-glow);
  }

  .theme-light & {
    border-color: var(--color-primary);
    background-color: var(--theme-light-background-elevated);
  }

  .theme-light &:hover {
    border-color: var(--color-primary-dark);
  }

  @media (max-width: 767px) {
    padding: var(--space-xxs) var(--space-xs);
    height: 36px;
    width: 36px;
    min-width: unset;
    justify-content: center;

    ${WalletAmount} {
      display: none;
    }
  }

  @media (min-width: 768px) {
    min-width: 80px;
    padding: var(--space-xs) var(--space-sm);
    
    ${WalletAmount} {
      display: flex;
    }
  }
`;

const WalletIcon = styled.span`
  color: var(--color-text-secondary);
  position: relative;
  z-index: 2;
`;

const CurrencyIcon = styled.span`
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #f7931a, #e88b00);
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 4px rgba(247, 147, 26, 0.3);
  position: relative;
  transition: transform 0.3s var(--easing-explosive);

  ${WalletButton}:hover & {
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

const DropdownContainer = styled.div`
  position: relative;

  @media (max-width: 767px) {
    width: auto;
    margin-right: var(--space-xs);
  }
`;
// border: var(--border-thin);

const WalletMenu = styled.div`
  position: absolute;
  top: calc(100% + var(--space-sm));
  right: 0;
  background-color: var(--color-background-elevated);
  border: var(--border-thin);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 0 30px rgba(1, 228, 153, 0.1);
  width: 420px;
  padding: var(--space-lg);
  z-index: 100;
  transform: translateY(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s var(--easing-explosive);

  &.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }

  @media (max-width: 767px) {
    position: fixed;
    top: var(--header-height);
    bottom: auto;
    left: 0;
    right: 0;
    width: 96%;
    max-width: 96%;
    margin: 0 auto;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    transform: translateY(-100%);
    padding: var(--space-md);
    max-height: calc(100vh - var(--header-height));
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &.active {
      transform: translateY(0);
    }

    &.active.flip {
      top: var(--header-height);
      bottom: auto;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    &.active {
      transform: translateY(0);
      
      &.flip {
        top: auto;
        bottom: calc(100% + var(--space-sm));
        transform: translateY(0);
      }
    }
  }
`;

const WalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
`;

const WalletTitle = styled.div`
  font-weight: 600;
  font-size: var(--font-size-md);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CloseButton = styled.button`
  color: var(--color-text-tertiary);
  font-size: var(--font-size-lg);
  line-height: 1;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s var(--easing-magnetic);

  &:hover {
    color: var(--color-text-primary);
    background-color: var(--color-background-pressed);
    transform: rotate(90deg);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const WalletBalance = styled.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  border: var(--border-thin);
  box-shadow: var(--shadow-inner);
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-md);

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      var(--color-primary-glow) 0%,
      transparent 70%
    );
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

const WalletTotal = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-xs);
  background: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-text-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const WalletValue = styled.div`
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`;

const WalletActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`;

const WalletAction = styled.button`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  border: var(--border-thin);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      transparent,
      var(--color-primary-alpha),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background-color: var(--color-surface-hover);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  &:hover::after {
    opacity: 1;
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const ActionIcon = styled.span`
  color: var(--color-primary);
  font-size: var(--font-size-md);
  transition: transform 0.3s var(--easing-explosive);

  ${WalletAction}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0 0 5px var(--color-primary-glow));
  }
`;

const ActionLabel = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  transition: color 0.3s ease;
  font-weight: 500;

  ${WalletAction}:hover & {
    color: var(--color-primary);
  }
`;

const AssetsTitle = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`;

const AssetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`;

const AssetItem = styled.div`
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: var(--border-thin);
  transition: all 0.3s var(--easing-magnetic);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transform: translateX(-100%);
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: var(--color-surface-hover);
    transform: translateX(8px);
    box-shadow: var(--shadow-md), 0 0 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const AssetInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`;

const AssetIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s var(--easing-explosive);
  position: relative;

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

  ${AssetItem}:hover & {
    transform: rotate(15deg) scale(1.1);
  }

  &.bitcoin {
    background: linear-gradient(135deg, #f7931a, #e88b00);
    color: white;
  }

  &.ethereum {
    background: linear-gradient(135deg, #627eea, #4a65d5);
    color: white;
  }
`;

const AssetName = styled.div`
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: color 0.3s ease;

  ${AssetItem}:hover & {
    color: var(--color-primary);
  }
`;

const AssetBalance = styled.div`
  text-align: right;
`;

const AssetAmount = styled.div`
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: color 0.3s ease;

  ${AssetItem}:hover & {
    color: var(--color-primary);
  }
`;

const AssetValue = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
`;

const ManageWalletBtn = styled.button`
  width: 100%;
  padding: var(--space-sm);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all 0.3s var(--easing-magnetic);
  border: var(--border-thin);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-primary-alpha),
      transparent
    );
    transform: translateX(-100%);
  }

  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: var(--color-surface-hover);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), 0 5px 15px var(--color-primary-glow);
    border-color: var(--color-primary);
  }

  .theme-light & {
    border-color: var(--color-primary-alpha);
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal) var(--easing-magnetic);
  z-index: 99;

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

const WalletDropdown = () => {
  const { walletBtc, walletEth, isWalletOpen, toggleWallet, closeWallet } =
    useContext(WalletContext);
  const { playClickSound } = useAudio();
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isMobile = window.innerWidth <= 767;
      
      if (!isMobile && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          btnRef.current &&
          !btnRef.current.contains(event.target)
      ) {
        closeWallet();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeWallet]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 767;

    if (isWalletOpen && menuRef.current && !isMobile) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (menuRect.bottom > windowHeight) {
        menuRef.current.classList.add("flip");
      } else {
        menuRef.current.classList.remove("flip");
      }
    }
  }, [isWalletOpen]);

  const handleActionClick = () => {
    playClickSound();

    if ("vibrate" in navigator) {
      navigator.vibrate(3);
    }
  };

  return (
    <DropdownContainer>
      <WalletButton
        className="wallet-btn interactive-element"
        onClick={toggleWallet}
        ref={btnRef}
      >
        <WalletIcon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 20.25V6C16.5 5.60218 16.342 5.22064 16.0607 4.93934C15.7794 4.65804 15.3978 4.5 15 4.5H6.75C6.35218 4.5 5.97064 4.65804 5.68934 4.93934C5.40804 5.22064 5.25 5.60218 5.25 6V8.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.25 12.75H16.5C15.672 12.75 15 13.422 15 14.25C15 15.078 15.672 15.75 16.5 15.75H20.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </WalletIcon>
        <WalletAmount>
          <CurrencyIcon>₿</CurrencyIcon>
          <span>{walletBtc.toFixed(4)}</span>
        </WalletAmount>
      </WalletButton>

      {isWalletOpen && <Overlay className="active" onClick={closeWallet} />}

      <WalletMenu ref={menuRef} className={isWalletOpen ? "active" : ""}>
        <WalletHeader>
          <WalletTitle>我的钱包</WalletTitle>
          <CloseButton className="interactive-element" onClick={closeWallet}>
            ×
          </CloseButton>
        </WalletHeader>

        <WalletBalance className="interactive-element">
          <WalletTotal>{walletBtc.toFixed(4)} BTC</WalletTotal>
          <WalletValue>≈ ¥{(walletBtc * 305548).toFixed(2)}</WalletValue>
        </WalletBalance>

        <WalletActions>
          <WalletAction
            className="interactive-element"
            onClick={handleActionClick}
          >
            <ActionIcon>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M12 4L18 10M12 4L6 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ActionIcon>
            <ActionLabel>充值</ActionLabel>
          </WalletAction>

          <WalletAction
            className="interactive-element"
            onClick={handleActionClick}
          >
            <ActionIcon>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20V4M12 20L6 14M12 20L18 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ActionIcon>
            <ActionLabel>提现</ActionLabel>
          </WalletAction>

          <WalletAction
            className="interactive-element"
            onClick={handleActionClick}
          >
            <ActionIcon>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20M4 8H20M4 12H20M4 16H12M4 20H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ActionIcon>
            <ActionLabel>历史</ActionLabel>
          </WalletAction>
        </WalletActions>

        <AssetsTitle>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V18M12 6L7 11M12 6L17 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          我的资产
        </AssetsTitle>

        <AssetList>
          <AssetItem className="interactive-element">
            <AssetInfo>
              <AssetIcon className="bitcoin">₿</AssetIcon>
              <AssetName>比特币</AssetName>
            </AssetInfo>
            <AssetBalance>
              <AssetAmount>{walletBtc.toFixed(4)} BTC</AssetAmount>
              <AssetValue>≈ ¥{(walletBtc * 305548).toFixed(2)}</AssetValue>
            </AssetBalance>
          </AssetItem>

          <AssetItem className="interactive-element">
            <AssetInfo>
              <AssetIcon className="ethereum">Ξ</AssetIcon>
              <AssetName>以太坊</AssetName>
            </AssetInfo>
            <AssetBalance>
              <AssetAmount>{walletEth.toFixed(3)} ETH</AssetAmount>
              <AssetValue>≈ ¥{(walletEth * 5608).toFixed(2)}</AssetValue>
            </AssetBalance>
          </AssetItem>
        </AssetList>

        <ManageWalletBtn
          className="interactive-element"
          onClick={handleActionClick}
        >
          管理钱包
        </ManageWalletBtn>
      </WalletMenu>
    </DropdownContainer>
  );
};

export default WalletDropdown;
