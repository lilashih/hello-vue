import confetti from 'canvas-confetti';

export default function createConfetti() {
  const end = Date.now() + (5 * 1000);
  const colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: {
        x: 0,
      },
      colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: {
        x: 1,
      },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}