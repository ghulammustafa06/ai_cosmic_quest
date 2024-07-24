document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('start-game');
    const loadGameButton = document.getElementById('load-game');

    startGameButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    loadGameButton.addEventListener('click', () => {
        const savedGame = localStorage.getItem('cosmicQuestSaveData');
        if (savedGame) {
            window.location.href = 'index.html?load=true';
        } else {
            alert('No saved game found. Starting a new game.');
            window.location.href = 'index.html';
        }
    });
});
