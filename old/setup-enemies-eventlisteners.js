document.getElementById("enemy-1").addEventListener("click", function handler(e) {
    attack(enemy_players[0], chosen_skill);
    console.log("Cliquei");
    e.currentTarget.removeEventListener(e.type, handler);
}, false);

document.getElementById("enemy-2").addEventListener("click", function handler(e) {
    attack(enemy_players[1], chosen_skill);
    e.currentTarget.removeEventListener(e.type, handler);

}, false);

document.getElementById("enemy-3").addEventListener("click", function handler(e) {
    attack(enemy_players[2], chosen_skill);
    e.currentTarget.removeEventListener(e.type, handler);

}, false);