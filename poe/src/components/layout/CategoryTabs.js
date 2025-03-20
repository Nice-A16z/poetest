// src/components/layout/CategoryTabs/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import useAudio from '../../hooks/useAudio';

const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: var(--space-xs);
  border-bottom: var(--border-thin);
  position: relative;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  .theme-light & {
    border-bottom-color: var(--color-primary-alpha);
  }
`;

const Tab = styled.button`
  padding: var(--space-sm) var(--space-lg);
  color: var(--color-text-secondary);
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s var(--easing-magnetic);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, var(--color-primary-alpha), transparent);
    transform: translateX(-100%);
    z-index: 1;
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.7s ease;
  }
  
  &:hover {
    color: var(--color-text-primary);
    transform: translateY(-2px);
  }
  
  &.active {
    color: var(--color-primary);
    background-color: var(--color-primary-alpha);
    box-shadow: 0 5px 15px var(--color-primary-glow);
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
    border-radius: var(--radius-full);
    animation: borderPulse 2s infinite alternate ease-in-out;
  }
  
  @keyframes borderPulse {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  
  .theme-light & {
    color: var(--theme-light-text-secondary);
  }
  
  .theme-light &.active {
    color: var(--color-primary-dark);
  }
`;

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { playClickSound } = useAudio();
  
  const categories = [
    '全部游戏',
    '德州扑克',
    '奥马哈',
    '短牌',
    '锦标赛',
    '现金桌',
    '休闲游戏'
  ];
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    playClickSound();
    
    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(3);
    }
  };
  
  return (
    <TabsContainer className="category-tabs">
      {categories.map((category, index) => (
        <Tab
          key={index}
          className={`category-tab interactive-element ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {category}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default CategoryTabs;