let score_box = new Image();
score_box.src = "../assets/scoreBox.svg";

export function draw_scoreBox(ctx) {
    ctx.drawImage(score_box, 250, 10, 170, 45);

}