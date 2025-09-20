// Global variables
let currentRating = 0;
let artData = [
  {
    name: "picture1",
    artist: "Nguyễn Văn A",
    rating: "★★★★★",
    ratingCount: "(24)",
    category: "SR",
    imageClass: "SR",
    modalDescription: "hello"
  },
  {
    name: "picture2",
    artist: "Trần Thị B",
    rating: "★★★★☆",
    ratingCount: "(18)",
    category: "Manga",
    imageClass: "Manga",
    modalDescription: "Bức tranh này dựa trên ảnh đại diện Roblox , phát họa lại với phong cách Anime / Manga thêm một chút Semi - Realistic mang lại cái nhìn sắc xảo - nét riêng, đáp ứng nhu cầu người thuê."
  },
  {
    name: "picture3",
    artist: "Lê Văn C",
    rating: "★★★★★",
    ratingCount: "(31)",
    category: "chibi",
    imageClass: "chibi",
    modalDescription: "Một bức ảnh nhưng mang phong cách Chibi.Nét vẽ đáng yêu kết hợp cùng hiệu ứng màu neon đã tạo nên một tác phẩm bắt mắt, thể hiện cá tính tinh nghịch và tràn đầy năng lượng."
  },
  {
    name: "picture4",
    artist: "Phạm Thị D",
    rating: "★★★★☆",
    ratingCount: "(15)",
    category: "SR",
    imageClass: "SRhost",
    modalDescription: "Từ một avatar Roblox đơn giản, bức vẽ đã được thành chân dung đầy khí chất phù hợp với phong cách Style đúng ý bạn.Vừa nghệ thuật - nâng tầm nhân vật trong game."
  },
  {
    name: "👷🏻ĐANG CẬP NHẬT🛠️",
    artist: "👷🏻ĐANG CẬP NHẬT🛠️",
    rating: "🛠️",
    ratingCount: "",
    category: "game",
    imageClass: "game-art",
    modalDescription: "hello"
  },
  {
    name: "👷🏻ĐANG CẬP NHẬT🛠️",
    artist: "👷🏻ĐANG CẬP NHẬT🛠️",
    rating: "🛠️",
    ratingCount: "",
    category: "game",
    imageClass: "fantasy",
    modalDescription: "hello"
  }
];

// Search functionality
function searchArt() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const artCards = document.querySelectorAll('.art-card');
  
  artCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const artist = card.dataset.artist.toLowerCase();
    
    if (name.includes(searchTerm) || artist.includes(searchTerm)) {
      card.style.display = 'block';
      card.style.animation = 'fadeInUp 0.5s ease-out';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Add search highlight effect
  const searchInput = document.getElementById('searchInput');
  searchInput.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
  setTimeout(() => {
    searchInput.style.boxShadow = '';
  }, 1000);
}

// Filter functionality
function filterArt(category) {
  const artCards = document.querySelectorAll('.art-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Update active button
  filterBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter cards
  artCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      card.style.animation = 'fadeInUp 0.5s ease-out';
    } else {
      card.style.display = 'none';
    }
  });
}

// Modal functionality
function openModal(index) {
  const modal = document.getElementById('artModal');
  const art = artData[index];
  
  document.getElementById('modalTitle').textContent = art.name;
  document.getElementById('modalArtist').textContent = `Nghệ sĩ: ${art.artist}`;
  document.getElementById('modalPrice').textContent = art.price;
  document.getElementById('modalRating').innerHTML = `
    <span class="stars">${art.rating}</span>
    <span class="rating-count">${art.ratingCount}</span>
  `;
  document.getElementById('modalDescription').textContent = art.modalDescription;
  
  const modalImage = document.getElementById('modalImage');
  modalImage.className = `placeholder-image ${art.imageClass}`;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('artModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Add to cart functionality
function addToCart(index) {
  const notification = document.getElementById('cartNotification');
  notification.classList.add('show');
  
  // Add shake effect to the button
  const button = event.target;
  button.style.animation = 'shake 0.5s ease-in-out';
  
  setTimeout(() => {
    notification.classList.remove('show');
    button.style.animation = '';
  }, 3000);
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchArt();
  }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('artModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(26, 26, 26, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(26, 26, 26, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Add shake animation for buttons
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);




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