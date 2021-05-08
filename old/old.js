const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;


const draw_background_image = () => {
    const image = new Image(0, 0);
    image.src = './assets/background.jpg';
    image.onload = (() => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
}

const draw_hero = () => {
    const image = new Image(0, 0);
    image.src = './assets/elektra1.png';
    image.onload = (() => {
        
        //ctx.drawImage(image, 50, 50, 100, 100);
    });
}





draw_background_image();
//draw_hero();

ctx.fillRect(50, 50, 50, 50);

const set_enemies_eventlisteners = () => {

    document.getElementById("enemy-1").addEventListener("click", function handler(e) {
        console.log("Triggered");
        attack(enemy_players[0], chosen_skill);
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

}

const set_skills_click = () => {

    document.getElementById("skill-1").style.pointerEvents = "";
    document.getElementById("skill-2").style.pointerEvents = "";
    document.getElementById("skill-3").style.pointerEvents = "";
    document.getElementById("skill-4").style.pointerEvents = "";

}