// Start button - only on index.html
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

// Quit button - if present
const quitBtn = document.getElementById('quitBtn');
if (quitBtn) {
    quitBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}
