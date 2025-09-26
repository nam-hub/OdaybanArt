    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(200,200,200,0.3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = 50;
      for(let i=0; i<numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    function animate() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav');
  const overlay = document.getElementById('overlay');

  if (!menuToggle || !navMenu || !overlay) {
    console.error('Thiếu phần tử cần thiết:', { menuToggle, navMenu, overlay });
    return;
  }

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
});