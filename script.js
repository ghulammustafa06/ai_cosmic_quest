const API_KEY = 'API_KEY'; 
// I'm not going to provide the API key here, but you can get one from the Google Cloud Platform.

const gameTitle = document.getElementById('game-title');
const gameContainer = document.getElementById('game-container');

let player = {
    name: '',
    class: '',
    health: 100,
    oxygen: 100,
    inventory: []
};

const characterCreation = document.getElementById('character-creation');
const gameArea = document.getElementById('game-area');
const storyText = document.getElementById('story-text');
const playerStats = document.getElementById('player-stats');
const inventoryDisplay = document.getElementById('inventory');
const playerInput = document.getElementById('player-input');
const submitAction = document.getElementById('submit-action');

async function runChat(userInput) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
    const headers = {
        'Content-Type': 'application/json'
    };

    const data = {
        contents: [{ parts: [{ text: userInput }] }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });