class Circulo extends Figura{
    constructor(tam, value, posX, posY,vel){
        super(tam, value, posX, posY,vel);
    }


    pintar(){
        //this.value*35
        fill(82, 204, 206);
        ellipseMode(CORNER)
        ellipse(this.posX,this.posY,this.tam, this.tam);
        fill(255);
        textSize(30);
        text(this.value, this.posX+10, this.posY+30);
    }

    mover(){
        super.mover();
    }

    duplicarTam(){
        super.duplicarTam();
    }
}