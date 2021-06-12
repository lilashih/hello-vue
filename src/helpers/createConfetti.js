import confetti from 'canvas-confetti';

export default function createConfetti(colors = ['#bb0000', '#ffffff']) {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 2,
    angle: 60,
    origin: {
      x: 0,
    },
    colors,
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function interval() {
    setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }());
}