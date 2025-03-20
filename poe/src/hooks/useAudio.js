import { useRef, useCallback } from 'react';

const useAudio = () => {
  const audioContextRef = useRef(null);

  // 懒加载音频上下文
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          audioContextRef.current = new AudioContext();
        }
      } catch (e) {
        console.error("Audio context not supported:", e);
      }
    }
    return audioContextRef.current;
  }, []);

  // 点击音效
  const playClickSound = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;
    
    try {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, context.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);
      
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator.start();
      oscillator.stop(context.currentTime + 0.1);
    } catch (e) {
      console.error("Sound error:", e);
    }
  }, [getAudioContext]);

  // 错误音效
  const playErrorSound = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;
    
    try {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(400, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, context.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);
      
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator.start();
      oscillator.stop(context.currentTime + 0.2);
    } catch (e) {
      console.error("Sound error:", e);
    }
  }, [getAudioContext]);

  // 轮盘旋转音效
  const playRouletteSpinSound = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;
    
    try {
      // 主音调振荡器
      const oscillator1 = context.createOscillator();
      const gain1 = context.createGain();
      
      oscillator1.type = 'triangle';
      oscillator1.frequency.setValueAtTime(330, context.currentTime);
      oscillator1.frequency.exponentialRampToValueAtTime(880, context.currentTime + 1);
      oscillator1.frequency.exponentialRampToValueAtTime(440, context.currentTime + 3);
      oscillator1.frequency.linearRampToValueAtTime(220, context.currentTime + 7);
      
      gain1.gain.setValueAtTime(0, context.currentTime);
      gain1.gain.linearRampToValueAtTime(0.15, context.currentTime + 0.5);
      gain1.gain.setValueAtTime(0.15, context.currentTime + 4);
      gain1.gain.linearRampToValueAtTime(0, context.currentTime + 7);
      
      // 添加细节音效
      const oscillator2 = context.createOscillator();
      const gain2 = context.createGain();
      
      oscillator2.type = 'sine';
      oscillator2.frequency.setValueAtTime(1200, context.currentTime);
      oscillator2.frequency.exponentialRampToValueAtTime(600, context.currentTime + 7);
      
      gain2.gain.setValueAtTime(0, context.currentTime);
      gain2.gain.linearRampToValueAtTime(0.05, context.currentTime + 0.1);
      gain2.gain.setValueAtTime(0.05, context.currentTime + 5);
      gain2.gain.linearRampToValueAtTime(0, context.currentTime + 7);
      
      // 连接和启动声音
      oscillator1.connect(gain1);
      gain1.connect(context.destination);
      
      oscillator2.connect(gain2);
      gain2.connect(context.destination);
      
      oscillator1.start();
      oscillator2.start();
      
      oscillator1.stop(context.currentTime + 7);
      oscillator2.stop(context.currentTime + 7);
    } catch (e) {
      console.error("Sound error:", e);
    }
  }, [getAudioContext]);

  // 胜利音效
  const playWinSound = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;
    
    try {
      // 主旋律
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.type = 'sine';
      
      // 更丰富的音阶
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      const durations = [0.1, 0.1, 0.1, 0.15, 0.2, 0.3];
      let time = context.currentTime;
      
      notes.forEach((freq, index) => {
        oscillator.frequency.setValueAtTime(freq, time);
        time += durations[index];
      });
      
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, context.currentTime + 0.05);
      gainNode.gain.setValueAtTime(0.2, context.currentTime + 0.9);
      gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 1.1);
      
      // 添加和声
      const oscillator2 = context.createOscillator();
      const gainNode2 = context.createGain();
      
      oscillator2.type = 'triangle';
      
      time = context.currentTime + 0.05;
      const harmonicNotes = [329.63, 415.30, 493.88, 659.25, 830.61, 987.77];
      
      harmonicNotes.forEach((freq, index) => {
        oscillator2.frequency.setValueAtTime(freq, time);
        time += durations[index];
      });
      
      gainNode2.gain.setValueAtTime(0, context.currentTime);
      gainNode2.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.1);
      gainNode2.gain.setValueAtTime(0.1, context.currentTime + 0.9);
      gainNode2.gain.linearRampToValueAtTime(0, context.currentTime + 1.1);
      
      // 连接所有节点
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator2.connect(gainNode2);
      gainNode2.connect(context.destination);
      
      // 启动和停止音频
      oscillator.start();
      oscillator2.start();
      
      oscillator.stop(context.currentTime + 1.2);
      oscillator2.stop(context.currentTime + 1.2);
    } catch (e) {
      console.error("Sound error:", e);
    }
  }, [getAudioContext]);

  // 失败音效
  const playLoseSound = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;
    
    try {
      // 主音频振荡器
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.type = 'sawtooth';
      
      // 下降音阶
      const notes = [415.30, 369.99, 329.63, 293.66, 277.18];
      const durations = [0.1, 0.1, 0.2, 0.2, 0.3];
      let time = context.currentTime;
      
      notes.forEach((freq, index) => {
        oscillator.frequency.setValueAtTime(freq, time);
        time += durations[index];
      });
      
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, context.currentTime + 0.05);
      gainNode.gain.setValueAtTime(0.15, context.currentTime + 0.8);
      gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 1);
      
      // 添加低音效果
      const oscillator2 = context.createOscillator();
      const gainNode2 = context.createGain();
      
      oscillator2.type = 'sine';
      oscillator2.frequency.setValueAtTime(110, context.currentTime);
      oscillator2.frequency.linearRampToValueAtTime(80, context.currentTime + 1);
      
      gainNode2.gain.setValueAtTime(0, context.currentTime);
      gainNode2.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.2);
      gainNode2.gain.linearRampToValueAtTime(0, context.currentTime + 1);
      
      // 连接所有节点
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator2.connect(gainNode2);
      gainNode2.connect(context.destination);
      
      // 启动和停止音频
      oscillator.start();
      oscillator2.start();
      
      oscillator.stop(context.currentTime + 1);
      oscillator2.stop(context.currentTime + 1);
    } catch (e) {
      console.error("Sound error:", e);
    }
  }, [getAudioContext]);

  // 筹码音效
  const playCoinSound = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;
    
    try {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(300, context.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, context.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);
      
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator.start();
      oscillator.stop(context.currentTime + 0.5);
    } catch (e) {
      console.error("Sound error:", e);
    }
  }, [getAudioContext]);

  return {
    playClickSound,
    playErrorSound,
    playRouletteSpinSound,
    playWinSound,
    playLoseSound,
    playCoinSound
  };
};

export default useAudio;