// Princess Paisley's Adventures
// Version 0.1.0

let currentDress = "dressPink";

const app = document.getElementById("app");

renderMenu();

function renderMenu() {

    app.innerHTML = `
        <div id="menuScreen" class="screen active">

            <h1>👑 Princess Paisley's Adventures</h1>

            <p class="subtitle">
                Help Princess Paisley get ready for the Royal Ball!
            </p>

            <button id="playButton">
                Start Adventure
            </button>

        </div>
    `;

    document
        .getElementById("playButton")
        .addEventListener("click", renderDressRoom);

}

function renderDressRoom() {

    app.innerHTML = `
        <div id="eventScreen" class="screen active">

            <div class="header">
                <button id="homeButton">Home</button>

                <h2>Royal Dressing Room</h2>

                <button id="ballButton">
                    Go To Ball
                </button>
            </div>

            <div class="stage">

                ${buildPrincess()}

            </div>

            <div class="toolbar">

                <button data-dress="dressPink">💗 Pink</button>

                <button data-dress="dressBlue">💙 Blue</button>

                <button data-dress="dressPurple">💜 Purple</button>

                <button data-dress="dressGreen">💚 Green</button>

            </div>

        </div>
    `;

    document
        .querySelectorAll("[data-dress]")
        .forEach(button => {

            button.addEventListener("click", () => {

                currentDress = button.dataset.dress;

                renderDressRoom();

            });

        });

    document
        .getElementById("homeButton")
        .addEventListener("click", renderMenu);

    document
        .getElementById("ballButton")
        .addEventListener("click", renderBall);

}

function renderBall() {

    app.innerHTML = `
        <div id="eventScreen" class="screen active">

            <div class="header">

                <button id="backButton">
                    Change Outfit
                </button>

                <h2>Royal Ball</h2>

                <button id="homeButton">
                    Home
                </button>

            </div>

            <div class="stage">

                <div class="sparkle">✨</div>
                <div class="sparkle">⭐</div>
                <div class="sparkle">✨</div>

                ${buildPrincess()}

            </div>

        </div>
    `;

    document
        .getElementById("backButton")
        .addEventListener("click", renderDressRoom);

    document
        .getElementById("homeButton")
        .addEventListener("click", renderMenu);

}

function buildPrincess() {

    return `

        <div class="princess">

            <div class="hair"></div>

            <div class="crown">
                👑
            </div>

            <div class="head"></div>

            <div class="body ${currentDress}"></div>

        </div>

    `;

}
