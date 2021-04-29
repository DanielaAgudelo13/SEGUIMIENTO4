class Cuadrado extends Figura {

    constructor(tam, value, posX, posY, vel) {
        super(tam, value, posX, posY, vel);

    }


    pintar() {
        fill(148, 0, 211);
        rect(this.posX, this.posY, this.tam, this.tam);
        fill(255);
        textSize(30);
        text(this.value, this.posX + 10, this.posY + 30);
    }

    mover() {
        super.mover();

    }

    duplicarTam() {
        super.duplicarTam();
    }
}