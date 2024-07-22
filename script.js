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

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Error processing your request. Please try again.";
    }
}

function appendToStory(text) {
    storyText.innerHTML += `<p>${text}</p>`;
    storyText.scrollTop = storyText.scrollHeight;
    gameContainer.scrollTop = gameContainer.scrollHeight;
}

function appendToStory(text) {
    storyText.innerHTML += `<p>${text}</p>`;
    storyText.scrollTop = storyText.scrollHeight;
    gameContainer.scrollTop = gameContainer.scrollHeight;
}

function playTypewriterSound() {
    const sound = new Audio('typewriter_clicks.mp3');
    sound.volume = 0.5;
    sound.playbackRate = 2; 
    sound.play().catch(e => console.error("Error playing sound:", e));
}

async function typeWriterEffect(text, element) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        playTypewriterSound();
        await new Promise(resolve => setTimeout(resolve, 50)); 
    }
}

async function appendToStory(text) {
    const paragraph = document.createElement('p');
    storyText.appendChild(paragraph);
    await typeWriterEffect(text, paragraph);
    storyText.scrollTop = storyText.scrollHeight;
}