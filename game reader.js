const gameBestanden = [
    'games/fnaf.html'
    // Hier zet je later nieuwe games bij, bijvoorbeeld:
    // 'games/game2.html'
];

const container = document.getElementById('games-container');

gameBestanden.forEach(bestand => {
    fetch(bestand)
        .then(response => response.text())
        .then(htmlCode => {
            const wrapper = document.createElement('div');
            wrapper.className = 'game-wrapper';
            wrapper.innerHTML = htmlCode;
            container.appendChild(wrapper);
        })
        .catch(err => console.error('Fout bij laden van ' + bestand, err));
});
