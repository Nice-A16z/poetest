import React, { createContext, useState, useCallback } from 'react';

export const WalletContext = createContext({
  walletBtc: 0,
  walletEth: 0,
  addFunds: () => {},
  deductFunds: () => {},
  isWalletOpen: false,
  toggleWallet: () => {},
});

export const WalletProvider = ({ children }) => {
  const [walletBtc, setWalletBtc] = useState(0.0184);
  const [walletEth, setWalletEth] = useState(0.124);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  // 添加资金（以BTC为例）
  const addFunds = useCallback((amount) => {
    setWalletBtc(prev => prev + amount);
  }, []);

  // 扣除资金（以BTC为例）
  const deductFunds = useCallback((amount) => {
    if (walletBtc >= amount) {
      setWalletBtc(prev => prev - amount);
      return true;
    }
    return false;
  }, [walletBtc]);

  // 切换钱包显示状态
  const toggleWallet = useCallback(() => {
    setIsWalletOpen(prev => !prev);
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
  }, []);

  // 关闭钱包
  const closeWallet = useCallback(() => {
    setIsWalletOpen(false);
  }, []);

  return (
    <WalletContext.Provider 
      value={{ 
        walletBtc, 
        walletEth, 
        addFunds, 
        deductFunds, 
        isWalletOpen, 
        toggleWallet,
        closeWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};