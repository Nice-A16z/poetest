import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* 主题变量 - 夜间模式 */
    --theme-background: #0C0E14;
    --theme-background-elevated: #141620;
    --theme-background-pressed: #1A1D28;
    --theme-surface: #1E2231;
    --theme-surface-hover: #252938;
    --theme-border: #2C2F3E;
    --theme-border-light: #3A3F53;
    --theme-text-primary: #FFFFFF;
    --theme-text-secondary: #A9B0C8;
    --theme-text-tertiary: #696E83;
    --theme-text-disabled: #484C59;
    
    /* 白天模式颜色变量 */
    --theme-light-background: #F8FAFC;
    --theme-light-background-elevated: #FFFFFF;
    --theme-light-background-pressed: #F0F8F4;
    --theme-light-surface: #FFFFFF;
    --theme-light-surface-hover: #F4FBF8;
    --theme-light-border: #E4F4EC;
    --theme-light-border-light: #EDF9F3;
    --theme-light-text-primary: #0E3A2B;
    --theme-light-text-secondary: #2A644F;
    --theme-light-text-tertiary: #5B8A7A;
    --theme-light-text-disabled: #A4C5BB;
    
    /* 主题品牌色 */
    --color-primary: #01E499;
    --color-primary-dark: #00C886;
    --color-primary-light: #33EDC6;
    --color-primary-alpha: rgba(1, 228, 153, 0.1);
    --color-primary-glow: rgba(1, 228, 153, 0.4);
    --color-secondary: #4D61FC;
    --color-secondary-dark: #3A4DE7;
    --color-secondary-light: #6478FF;
    --color-secondary-alpha: rgba(77, 97, 252, 0.1);
    --color-secondary-glow: rgba(77, 97, 252, 0.4);
    --color-accent: #FF5C5C;
    --color-accent-dark: #E04444;
    --color-accent-light: #FF8080;
    --color-accent-alpha: rgba(255, 92, 92, 0.1);
    --color-accent-glow: rgba(255, 92, 92, 0.4);
    --color-gold: #FFD700;
    --color-gold-dark: #E6C300;
    --color-gold-light: #FFDF33;
    --color-gold-alpha: rgba(255, 215, 0, 0.1);
    --color-gold-glow: rgba(255, 215, 0, 0.4);
    --color-success: #00C886;
    --color-warning: #FFB017;
    --color-purple: #9D6AFF;
    --color-cyan: #00DAFF;
    
    /* 引用主题变量 */
    --color-background: var(--theme-background);
    --color-background-elevated: var(--theme-background-elevated);
    --color-background-pressed: var(--theme-background-pressed);
    --color-surface: var(--theme-surface);
    --color-surface-hover: var(--theme-surface-hover);
    --color-border: var(--theme-border);
    --color-border-light: var(--theme-border-light);
    --color-text-primary: var(--theme-text-primary);
    --color-text-secondary: var(--theme-text-secondary);
    --color-text-tertiary: var(--theme-text-tertiary);
    --color-text-disabled: var(--theme-text-disabled);

    /* 间距系统 */
    --space-xxs: 4px;
    --space-xs: 8px;
    --space-sm: 12px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-xxl: 48px;
    
    /* 圆角半径 */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-full: 9999px;
    
    /* 阴影 */
    --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.25);
    --shadow-lg: 0 8px 20px rgba(0, 0, 0, 0.3);
    --shadow-primary: 0 8px 16px rgba(1, 228, 153, 0.25);
    --shadow-secondary: 0 8px 16px rgba(77, 97, 252, 0.25);
    --shadow-accent: 0 8px 16px rgba(255, 92, 92, 0.25);
    --shadow-gold: 0 8px 16px rgba(255, 215, 0, 0.25);
    --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    
    /* 高级动效时间曲线 */
    --easing-explosive: cubic-bezier(0.34, 1.56, 0.64, 1);
    --easing-magnetic: cubic-bezier(0.23, 1, 0.32, 1.1);
    --easing-quantum: cubic-bezier(0.77, 0, 0.175, 1);
    
    /* 过渡动画 */
    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: 0.5s var(--easing-explosive);
    
    /* 排版 */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-xxl: 24px;
    --font-size-display: 32px;
    --font-size-hero: 40px;
    
    /* 布局 */
    --container-width: 1200px;
    --header-height: 70px;
    --card-gap: 20px;
    
    /* 边框 */
    --border-thin: 1px solid var(--color-border);
    --border-medium: 2px solid var(--color-border);
    --border-highlight: 1px solid var(--color-border-light);
    --border-glow: 1px solid var(--color-primary);
    
    /* 动态光照效果 */
    --x: 50%;
    --y: 50%;
    --cursor-glow: radial-gradient(
      circle at var(--x) var(--y), 
      var(--color-primary-glow) 0%, 
      transparent 70%
    );
    --cursor-scale: 1;
  }

  /* 全局性能优化 */
  .gpu-layer {
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
    contain: layout style;
  }

  .performance-mode .complex-effect {
    display: none !important;
  }

  /* 重置样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text-primary);
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    line-height: 1.5;
    min-height: 100%;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  button {
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  /* 主题切换相关 */
  .theme-light {
    --border-thin: 1px solid var(--color-primary-alpha);
    --border-medium: 2px solid var(--color-primary-alpha);
    --border-highlight: 1px solid var(--color-primary-light);
    
    --color-background: var(--theme-light-background);
    --color-background-elevated: var(--theme-light-background-elevated);
    --color-background-pressed: var(--theme-light-background-pressed);
    --color-surface: var(--theme-light-surface);
    --color-surface-hover: var(--theme-light-surface-hover);
    --color-border: var(--theme-light-border);
    --color-border-light: var(--theme-light-border-light);
    --color-text-primary: var(--theme-light-text-primary);
    --color-text-secondary: var(--theme-light-text-secondary);
    --color-text-tertiary: var(--theme-light-text-tertiary);
    --color-text-disabled: var(--theme-light-text-disabled);
    
    /* 品牌色微调 */
    --color-primary: #01D191;
    --color-primary-dark: #00B67D;
    --color-primary-light: #33E1AD;
    --color-primary-alpha: rgba(1, 209, 145, 0.08);
    --color-primary-glow: rgba(1, 209, 145, 0.2);
    
    --color-secondary: #4361E7;
    --color-secondary-dark: #3451D1;
    --color-secondary-light: #6983FF;
    --color-secondary-alpha: rgba(67, 97, 231, 0.08);
    --color-secondary-glow: rgba(67, 97, 231, 0.2);
    
    --color-accent: #FF5147;
    --color-accent-dark: #E04444;
    --color-accent-light: #FF7A73;
    --color-accent-alpha: rgba(255, 81, 71, 0.08);
    --color-accent-glow: rgba(255, 81, 71, 0.2);
    
    --color-gold: #DFAE35;
    --color-gold-dark: #C69932;
    --color-gold-light: #F2CA65;
    --color-gold-alpha: rgba(223, 174, 53, 0.08);
    --color-gold-glow: rgba(223, 174, 53, 0.2);
  }
  
  /* 自定义滚动条 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  /* 白天模式下自定义滚动条颜色 */
  .theme-light ::-webkit-scrollbar-track {
    background: var(--theme-light-background);
  }

  .theme-light ::-webkit-scrollbar-thumb {
    background: var(--color-primary-alpha);
    border-radius: var(--radius-full);
  }

  .theme-light ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

export default GlobalStyles;