const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', function() {
        const btn = this;
        const loader = document.getElementById('loader');
        const loadingText = document.getElementById('loadingText');
        
        btn.style.display = 'none';
        if (loader) loader.style.display = 'block';
        if (loadingText) loadingText.style.display = 'block';
        
        setTimeout(function() {
            window.location.href = 'homepage.html';
        }, 2000);
    });
}

const quitBtn = document.getElementById('quitBtn');
if (quitBtn) {
    quitBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    }
}

function filterBooks(category) {
    const cards = document.querySelectorAll('.book-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const readButtons = document.querySelectorAll('.read-btn');
    readButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const image = this.getAttribute('data-image');
            const story = this.getAttribute('data-story');
            
            const encodedTitle = encodeURIComponent(title);
            const encodedImage = encodeURIComponent(image);
            const encodedStory = encodeURIComponent(story);
            
            window.location.href = `read.html?title=${encodedTitle}&image=${encodedImage}&story=${encodedStory}`;
        });
    });
});
