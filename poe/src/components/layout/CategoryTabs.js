// src/components/layout/CategoryTabs/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import useAudio from '../../hooks/useAudio';

const TabsContainer = styled.div`
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-background-elevated);
  border-radius: var(--radius-lg);
  border: var(--border-thin);
  margin: 0 10px 10px;  // 与外层容器保持一致的边距,底部增加10px间距
  
  @media (max-width: 560px) {
    // 移动端样式
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding: var(--space-xs);
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    // 添加左右渐变遮罩，提示可滚动
    background: linear-gradient(
      to right,
      var(--color-background-elevated) 0%,
      var(--color-background-elevated) 90%,
      transparent 100%
    );
  }

  @media (min-width: 768px) {
    // PC端样式
    flex-wrap: wrap;
    justify-content: center;
    padding: var(--space-md);
    gap: var(--space-md);
  }
`;

const TabItem = styled.button`
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-full);
  background: ${props => props.isActive 
    ? 'var(--color-primary)' 
    : 'var(--color-background-pressed)'
  };
  color: ${props => props.isActive 
    ? 'var(--color-background)' 
    : 'var(--color-text)'
  };
  border: 1px solid ${props => props.isActive 
    ? 'var(--color-primary)' 
    : 'transparent'
  };
  font-weight: ${props => props.isActive ? '600' : '500'};
  white-space: nowrap;
  transition: all 0.3s var(--easing-magnetic);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.isActive 
      ? '0 8px 16px var(--color-primary-glow)' 
      : 'var(--shadow-sm)'
    };
  }
  
  @media (max-width: 560px) {
    // 移动端样式
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    flex: 0 0 auto;
    min-width: 80px;  // 确保每个tab有最小宽度
  }

  @media (min-width: 768px) {
    // PC端样式
    padding: var(--space-sm) var(--space-lg);
    min-width: 120px;
  }
`;

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { playClickSound } = useAudio();
  
  const categories = [
    { id: 0, name: "全部游戏", icon: "🎮" },
    { id: 1, name: "热门游戏", icon: "🔥" },
    { id: 2, name: "最新上线", icon: "✨" },
    { id: 3, name: "我的收藏", icon: "⭐" },
    { id: 4, name: "推荐游戏", icon: "👍" },
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
    <TabsContainer>
      {categories.map((category) => (
        <TabItem
          key={category.id}
          isActive={category.id === activeTab}
          onClick={() => handleTabClick(category.id)}
        >
          <span className="icon" style={{ marginRight: '4px' }}>
            {category.icon}
          </span>
          {category.name}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

export default CategoryTabs;