function createFlyingEmoji(emoji) {
  const el = document.createElement('div');
  el.textContent = emoji;
  el.style.position = 'fixed';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = '100vh';
  el.style.fontSize = '24px';
  el.style.opacity = 0.7;
  el.style.zIndex = 9999;
  el.style.pointerEvents = 'none';
  document.body.appendChild(el);

  let pos = 100;
  const speed = Math.random() * 1 + 0.5;
  const move = setInterval(() => {
    pos -= speed;
    el.style.top = pos + 'vh';
    if (pos < -5) {
      clearInterval(move);
      el.remove();
    }
  }, 30);
}

setInterval(() => {
  const emojis = ['💖', '🌸', '💜', '💕', '✨'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  createFlyingEmoji(emoji);
}, 800);