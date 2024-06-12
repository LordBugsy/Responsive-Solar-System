let planetIndex = 0;

const planetArray = [{Planet: "Sun", AverageTemperature: "5,600°C"},
    {Planet: "Mercury", AverageTemperature: "167°C"},
    {Planet: "Venus", AverageTemperature: "465°C"},
    {Planet: "Earth", AverageTemperature: "15°C"},
    {Planet: "Moon", AverageTemperature: "-183°C"},
    {Planet: "Mars", AverageTemperature: "-53°C"}
];

const earth = document.getElementById("earth");

function nextPlanet() {
    const prevPlanet = getPlanetId(planetIndex -1);
    prevPlanet.classList.add("removeFocus");
    prevPlanet.classList.remove("focus");

    planetIndex++;
    if (planetIndex >= 6) planetIndex = 0;

    const currentPlanet = getPlanetId(planetIndex);

    //because of the way I made the animation in CSS for the earth, I have to do this on order to apply the focus
    if (planetIndex == 3) earth.style.animation = "focus 0.5s ease-in-out both";
    else earth.style.animation = "removeFocus 0.5s ease-in-out both";

    
    const planetName = document.getElementById("planetName");
    if (planetIndex != 0) planetName.textContent = `Planet: ${planetArray[planetIndex].Planet}`;
    else planetName.textContent = `Star: ${planetArray[planetIndex].Planet}`;

    const avgTemp = document.getElementById("averageTemperature");
    avgTemp.textContent = `Average Temperature: ${planetArray[planetIndex].AverageTemperature}`;

    currentPlanet.classList.remove("removeFocus");
    currentPlanet.classList.add("focus");
}

function previousPlanet() {
    const prevPlanet = getPlanetId(planetIndex +1);
    prevPlanet.classList.add("removeFocus");
    prevPlanet.classList.remove("focus");

    planetIndex--;
    if (planetIndex <= -1) planetIndex = 5;

    const currentPlanet = getPlanetId(planetIndex);

    if (planetIndex == 3) earth.style.animation = "focus 0.5s ease-in-out both";
    else earth.style.animation = "removeFocus 0.5s ease-in-out both";

    const planetName = document.getElementById("planetName");
    if (planetIndex != 0) planetName.textContent = `Planet: ${planetArray[planetIndex].Planet}`;
    else planetName.textContent = `Star: ${planetArray[planetIndex].Planet}`;

    const avgTemp = document.getElementById("averageTemperature");
    avgTemp.textContent = `Average Temperature: ${planetArray[planetIndex].AverageTemperature}`;

    currentPlanet.classList.remove("removeFocus");
    currentPlanet.classList.add("focus");
}

function getPlanetId(index) {
    if (index < 0) index = 5;
    else if (index > 5) index = 0;
    let planetName = document.getElementById(`${planetArray[planetIndex].Planet.toLowerCase()}`);
    return planetName;
}