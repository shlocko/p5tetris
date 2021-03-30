
let board, activePiece, timer;
activePiece = new Piece();
timer = 0;

board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function setup(){
    createCanvas(400, 640);

}

const update = () => {
    if(millis() >= 500+timer){
        moveActivePiece("down");
        timer = millis()
    }

}

function draw(){
    background(256);
    fill(265);
    strokeWeight(3);
    rect(0,0,400,640);
    fill(200);
    strokeWeight(1);
    stroke(0);
    for (let y = 0; y < board.length; y++){
        for(let x = 0; x< board[y].length; x++){
            if(board[y][x] === 1)rect(x*40, y*40, 40);
        }
    }
    for (let i = 0; i < 4; i++){
        rect(activePiece.L[i][0]*40, activePiece.L[i][1]*40, 40);
    }
    update();
}

const checkColDown = () => {
    let check = false;
    for (let i = 0; i < 4; i++){
        if(activePiece.L[i][1] === 15 || board[activePiece.L[i][1]+1][activePiece.L[i][0]] === 1){
            check = true;
        }
    }
    return check;
}
const checkColLeft = () => {
    let check = false;
    for (let i = 0; i < 4; i++){
        if(board[activePiece.L[i][0]][activePiece.L[i][1]+1] === 1 || activePiece.L[i][0] === 0){
            check = true;
        }
    }
    return check;
}
const checkColRight = () => {
    let check = false;
    for (let i = 0; i < 4; i++){
        if(board[activePiece.L[i][0]][activePiece.L[i][1] - 1] === 1 || activePiece.L[i][0] === 9){
            check = true;
        }
    }
    return check;
}

const moveActivePiece = (dir) => {
    switch(dir){
        case "down":
            if (!checkColDown()){
                for (let i = 0; i < 4; i++){
                    activePiece.L[i][1]+=1;
                }
            }
            break;
        case "right":
            if (!checkColRight()){
                for (let i = 0; i < 4; i++){
                    activePiece.L[i][0]+=1;
                }
            }
            break;
        case "left":
            if (!checkColLeft()){
                for (let i = 0; i < 4; i++){
                    activePiece.L[i][0]-=1;
                }
            }
            break;
    }

}

function keyPressed() {
    switch(keyCode){
        case 83:
            moveActivePiece("down");
            break;
        case 65:
            moveActivePiece("left");
            break;
            break;
        case 68:
            moveActivePiece("right");
            break;
    }
}