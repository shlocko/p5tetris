class Piece{
    constructor() {
        this.INT = this.randomInt(1,7);
        switch(this.INT){
            case 1:
                this.P = this.L;
                break;
            case 2:
                this.P = this.IL;
                break;
            case 3:
                this.P = this.T;
                break;
            case 4:
                this.P = this.Z;
                break;
            case 5:
                this.P = this.IZ;
                break;
            case 6:
                this.P = this.I;
                break;
            case 7:
                this.P = this.C;
                break;
        }
    }

    L = [[3, 0], [4, 0], [5, 0], [5, 1]];
    IL = [[3, 0], [4, 0], [5, 0], [3, 1]];
    T = [[3, 0], [4, 0], [5, 0], [4, 1]];
    Z = [[3, 0], [4, 0], [4, 1], [5, 1]];
    IZ = [[3, 1], [4, 1], [4, 0], [5, 0]];
    I = [[3, 0], [4, 0], [5, 0], [6, 0]];
    C = [[4, 0], [5, 0], [4, 1], [5, 1]];

    randomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    move(dir){

    }
}