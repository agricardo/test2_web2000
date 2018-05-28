export const Controls = document.addEventListener(keyDown, keyUp, function (playerKeyPress) {

    var keyPressed = playerKeyPress.which;
    if (keyPressed == 38)
        upPressed = 1;
    if (keyPressed == 40)
        downPressed = 1;
    if (keyPressed == 37)
        leftPressed = 1;
    if (keyPressed == 39)
        rightPressed = 1;



    var keyPressed = playerKeyPress.which;
    if (keyPressed == 38)
        upPressed = 0;
    if (keyPressed == 40)
        downPressed = 0;
    if (keyPressed == 37)
        leftPressed = 0;
    if (keyPressed == 39)
        rightPressed = 0;

});

