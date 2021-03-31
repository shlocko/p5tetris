
let board, activePiece, timer, speed;
activePiece = new Piece();
timer = 0;
speed = 500;

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
    if(millis() >= speed+timer){
        if(checkColDown()){
            for(let i = 0; i < 4; i++){
                board[activePiece.P[i][1]][activePiece.P[i][0]] = 1;
            }
            activePiece = new Piece();
        } else {
            moveActivePiece("down");
        }
        checkRows();
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
        rect(activePiece.P[i][0]*40, activePiece.P[i][1]*40, 40);
    }
    update();
}

const checkRows = () => {
    for (let i = 0; i < board.length; i++){
        let check = true;
        for(let u = 0; u < board[i].length; u++){
            if(board[i][u] === 0) check = false;
        }
        if(check){
            board.splice(i, 1);
            board.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        }
    }

}

const checkColDown = () => {
    let check = false;
    for (let i = 0; i < 4; i++){
        if(activePiece.P[i][1] === 15 || board[activePiece.P[i][1]+1][activePiece.P[i][0]] === 1){
            check = true;
        }
    }
    return check;
}
const checkColLeft = () => {
    let check = false;
    for (let i = 0; i < 4; i++){
        if(board[activePiece.P[i][1]][activePiece.P[i][0]-1] === 1 || activePiece.P[i][0] === 0){
            check = true;
        }
    }
    return check;
}
const checkColRight = () => {
    let check = false;
    for (let i = 0; i < 4; i++){
        if(board[activePiece.P[i][1]][activePiece.P[i][0]+1] === 1 || activePiece.P[i][0] === 9){
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
                    activePiece.P[i][1]+=1;
                }
            }
            break;
        case "right":
            if (!checkColRight()){
                for (let i = 0; i < 4; i++){
                    activePiece.P[i][0]+=1;
                }
            }
            break;
        case "left":
            let check = false;
            for (let i = 0; i < 4; i++){
                if(board[activePiece.P[i][0]][activePiece.P[i][1]-1] === 1 || activePiece.P[i][0] === 0){
                    check = true;
                }
            }
            if (!checkColLeft()){
                for (let i = 0; i < 4; i++){
                    activePiece.P[i][0]-=1;
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
        case 68:
            moveActivePiece("right");
            break;
    }
}