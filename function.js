document.getElementById('startBtn').addEventListener('click', function() {
    const btn = this;
    const loader = document.getElementById('loader');
    const loadingText = document.getElementById('loadingText');
    
    btn.style.display = 'none';
    loader.style.display = 'block';
    loadingText.style.display = 'block';
    
    setTimeout(function() {
        window.location.href = 'homepage.html';
    }, 2000);
});

document.getElementById('quitBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
