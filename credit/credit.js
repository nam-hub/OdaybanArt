// Nút trái tim
    const heartBtn=document.getElementById("heartBtn");
    const thanksText=document.getElementById("thanks-text");
    heartBtn.addEventListener("click",e=>{
      heartBtn.classList.toggle("active");
      if(heartBtn.classList.contains("active")){
        heartBtn.textContent="❤";
        thanksText.textContent="Cảm ơn bạn đã yêu thích chúng tôi💖💖💖!";
        // burst effect
        for(let i=0;i<8;i++){
          const b=document.createElement("span");
          b.className="burst";
          const angle=(i/8)*2*Math.PI;
          const r=40;
          b.style.setProperty("--x",`${Math.cos(angle)*r}px`);
          b.style.setProperty("--y",`${Math.sin(angle)*r}px`);
          b.style.left="50%";b.style.top="50%";
          heartBtn.appendChild(b);
          setTimeout(()=>b.remove(),600);
        }
      }else{
        heartBtn.textContent="♡";
        thanksText.textContent="© 2025 Art Gallery DMT – All rights reserved";
      }
    });

    

    // Particle generator
    const particles=document.getElementById("particles");
    for(let i=0;i<30;i++){
      const p=document.createElement("div");
      p.className="particle";
      const size=Math.random()*10+4;
      p.style.width=p.style.height=size+"px";
      p.style.left=Math.random()*100+"%";
      p.style.animationDuration=(8+Math.random()*8)+"s";
      p.style.animationDelay=(Math.random()*8)+"s";
      particles.appendChild(p);
    }

    // Background lines
    const background = document.querySelector('.background-lines');
    for (let i = 0; i < 20; i++) {
      const line = document.createElement('div');
      line.classList.add('line');
      line.style.left = Math.random() * 100 + 'vw';
      line.style.animationDuration = 3 + Math.random() * 5 + 's';
      line.style.height = 50 + Math.random() * 150 + 'px';
      background.appendChild(line);
    }

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

