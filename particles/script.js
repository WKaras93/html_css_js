document.addEventListener('mousemove', function(event){
  const body = document.querySelector('body');
  const particles = document.createElement('span');
  const x = event.offsetX;
  const y = event.offsetY;

  particles.style.left = `${x}px`;
  particles.style.top = `${y}px`;

  const transformValue = Math.random() * 360;
  particles.style.transform = 'rotate('+transformValue+'deg)';

  body.appendChild(particles);

  setTimeout(function() {
    particles.remove()
  }, 2500);
});