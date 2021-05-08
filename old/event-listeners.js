const skill_1 = () => {

    let skill = next_player["skills"]["1"];
    chosen_skill = skill;

    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }

    document.getElementById("enemy-1").addEventListener("click", function handler(e) {
        attack(enemy_players[0], skill);
        e.currentTarget.removeEventListener(e.type, handler);
    }, false);

    document.getElementById("enemy-2").addEventListener("click", function handler(e) {
        attack(enemy_players[1], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-3").addEventListener("click", function handler(e) {
        attack(enemy_players[2], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);



}


const skill_2 = () => {

    let skill = next_player["skills"]["2"];
    chosen_skill = skill;

    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }

    document.getElementById("enemy-1").addEventListener("click", function handler(e) {
        attack(enemy_players[0], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-2").addEventListener("click", function handler(e) {
        attack(enemy_players[1], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-3").addEventListener("click", function handler(e) {
        attack(enemy_players[2], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("skill-2").style.pointerEvents = "none";

}

const skill_3 = () => {

    let skill = next_player["skills"]["3"];

    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }

    document.getElementById("enemy-1").addEventListener("click", function handler(e) {
        attack(enemy_players[0], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-2").addEventListener("click", function handler(e) {
        attack(enemy_players[1], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-3").addEventListener("click", function handler(e) {
        attack(enemy_players[2], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("skill-3").style.pointerEvents = "none";

}

const skill_4 = () => {

    let skill = next_player["skills"]["4"];

    switch (skill["target"]) {
        case 1:
            document.getElementById("enemy-1").style.filter = "brightness(100%)";
            document.getElementById("enemy-2").style.filter = "brightness(100%)";
            document.getElementById("enemy-3").style.filter = "brightness(100%)";

    }

    document.getElementById("enemy-1").addEventListener("click", function handler(e) {
        attack(enemy_players[0], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-2").addEventListener("click", function handler(e) {
        attack(enemy_players[1], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("enemy-3").addEventListener("click", function handler(e) {
        attack(enemy_players[2], skill);
        e.currentTarget.removeEventListener(e.type, handler);

    }, false);

    document.getElementById("skill-4").style.pointerEvents = "none";

}

const set_event_listeners = () => {

    document.getElementById("click-start").addEventListener("click", start_game, false);
    document.getElementById("player-1").addEventListener("click", teste, false);


    document.getElementById("skill-1").addEventListener("click", function helper(e) {
        skill_1();
        
    }, false);

    document.getElementById("skill-2").addEventListener("click", skill_2, false);
    document.getElementById("skill-3").addEventListener("click", skill_3, false);
    document.getElementById("skill-4").addEventListener("click", skill_4, false);
    document.getElementById("recharge").addEventListener("click", teste, false);
    document.getElementById("items").addEventListener("click", teste, false);
    document.getElementById("help").addEventListener("click", teste, false);
    document.getElementById("store").addEventListener("click", teste, false);

}

const unset_event_listeners = () => {

    document.getElementById("click-start").removeEventListener("click", start_game, false);
    document.getElementById("player-1").removeEventListener("click", teste, false);


    document.getElementById("skill-1").removeEventListener("click", skill_1, false);
    document.getElementById("skill-2").removeEventListener("click", skill_2, false);
    document.getElementById("skill-3").removeEventListener("click", skill_3, false);
    document.getElementById("skill-4").removeEventListener("click", skill_4, false);
    document.getElementById("recharge").removeEventListener("click", teste, false);
    document.getElementById("items").removeEventListener("click", teste, false);
    document.getElementById("help").removeEventListener("click", teste, false);
    document.getElementById("store").removeEventListener("click", teste, false);
}