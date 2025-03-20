import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { WalletProvider } from './contexts/WalletContext';
import GlobalStyles from './assets/styles/variables';
import ThemeToggle from './components/common/ToggleTheme/index';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import CategoryTabs from './components/layout/CategoryTabs';
import RouletteGame from './components/game/Roulette';
import GameGrid from './components/layout/GameGrid';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <GlobalStyles />
        <ThemeToggle />
        <Header />
        <main>
          <Hero />
          <div className="container">
            <CategoryTabs />
            <RouletteGame />
            <GameGrid />
          </div>
        </main>
        <Footer />
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;