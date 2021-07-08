
// Declare Level button variables
const cave = document.getElementById("caveBtn");
const canyon = document.getElementById("canyonBtn");
const volcano = document.getElementById("volcanoBtn");
const forest = document.getElementById("forestBtn");
const city = document.getElementById("cityBtn");
const arena = document.getElementById("arenaBtn");

// Declare Pokemon button variables
const mewtwo = document.getElementById("mewtwoBtn");
const pikachu = document.getElementById("pikachuBtn");
const charizard = document.getElementById("charizardBtn");
const zamazenta = document.getElementById("zamazentaBtn");
const carnivine = document.getElementById("carnivineBtn");
const squirtle = document.getElementById("squirtleBtn");

// Declare Opponent button variables
const zamazentaOpp = document.getElementById("zamazentaOppBtn");
const charizardOpp = document.getElementById("charizardOppBtn");
const carnivineOpp = document.getElementById("carnivineOppBtn");
const pikachuOpp = document.getElementById("pikachuOppBtn");
const squirtleOpp = document.getElementById("squirtleOppBtn");
const mewtwoOpp = document.getElementById("mewtwoOppBtn");


// Event listeners for level background images
cave.addEventListener('click', function() {
    battleZone.style.backgroundImage = "url('css/images/Levels/cave.jpeg')";
});

canyon.addEventListener('click', function() {
    battleZone.style.backgroundImage = "url('css/images/Levels/canyon.jpeg')";
});

volcano.addEventListener('click', function() {
    battleZone.style.backgroundImage = "url('css/images/Levels/volcano.jpeg')";
});

forest.addEventListener('click', function() {
    battleZone.style.backgroundImage = "url('css/images/Levels/forest.jpeg')";
});

city.addEventListener('click', function() {
    battleZone.style.backgroundImage = "url('css/images/Levels/city.jpeg')";
});

arena.addEventListener('click', function() {
    battleZone.style.backgroundImage = "url('css/images/Levels/arena.jpeg')";
});


// Event listeners for Pokemon
pikachu.addEventListener('click', function() {
    pikachuBattle.classList.remove("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

charizard.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.remove("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

mewtwo.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.remove("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

squirtle.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.remove("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

zamazenta.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.remove("d-none");
    carnivineBattle.classList.add("d-none");
});

carnivine.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.remove("d-none");
});


// Event listeners for Pokemon Opponents
pikachuOpp.addEventListener('click', function() {
    pikachuOppBattle.classList.remove("d-none");
    mewtwoOppBattle.classList.add("d-none");
    squirtleOppBattle.classList.add("d-none");  
    charizardOppBattle.classList.add("d-none");
    zamazentaOppBattle.classList.add("d-none");
    carnivineOppBattle.classList.add("d-none");
});

charizard.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.remove("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

mewtwo.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.remove("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

squirtle.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.remove("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.add("d-none");
});

zamazenta.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.remove("d-none");
    carnivineBattle.classList.add("d-none");
});

carnivine.addEventListener('click', function() {
    pikachuBattle.classList.add("d-none");
    mewtwoBattle.classList.add("d-none");
    squirtleBattle.classList.add("d-none");  
    charizardBattle.classList.add("d-none");
    zamazentaBattle.classList.add("d-none");
    carnivineBattle.classList.remove("d-none");
});