document.getElementById('startBtn').addEventListener('click', function() {
    const btn = this;
    btn.textContent = 'Loading...';
    btn.disabled = true;
    
    setTimeout(function() {
        window.location.href = 'homepage.html';
    }, 1500);
});

document.getElementById('quitBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
