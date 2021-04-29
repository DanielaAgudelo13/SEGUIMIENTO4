class Pantalla {
    num;
    isAdd;
    isSubtract;

    constructor(num) {
        this.num = num;
        this.isAdd = false;
        this.isSubtract = false;
    }

    pintarNum() {
        fill(255);
        rect((width / 4) + 50, (height - 70) / 2, (width / 4) + 100, 70);
        fill(0);
        text(this.num, 397, (height + 25) / 2);
    }
    pintarBotonesPantalla1() {
        fill(102, 0, 161);
        rect(20, (height - 70) / 2, width / 4, 70);
        fill(255);
        text("+", 100, (height + 25) / 2);
        fill(255, 0, 128);
        rect((width * 3 / 4) - 20, (height - 70) / 2, width / 4, 70);
        fill(255);
        text("-", 675, (height + 25) / 2);

        if (this.num > 0) {
            fill(83, 153, 176);
            rect((width / 4) + 50, 466, (width / 4) + 100, 70);
            fill(255);
            text('Continuar', 335, 514);
        }
    }


    pintarBotonesPantalla2() {
        fill(255, 89, 143);
        rect(0, 550, width / 4, 70);
        fill(255);
        text("A", 80, 600);
        fill(243, 135, 47);
        rect(width / 4, 550, width / 4, 70);
        fill(255);
        text("Q", 280, 600);
        fill(21, 178, 211);
        rect(width * 2 / 4, 550, width / 4, 70);
        fill(255);
        text("D", 485, 600);
        fill(255, 215, 0);
        rect(width * 3 / 4, 550, width / 4, 70);
        fill(255);
        text("C", 688, 600);
    }


    addInUno() {
        if (this.num < 10 && this.num >= 0 && mouseX > 20 && mouseX < 20 + width / 4 && mouseY > (height - 70) / 2 && mouseY < (height - 70) / 2 + 70) {
            this.num = this.num += 1;
        }
    }

    subtractInUno() {
        if (this.num <= 10 && this.num > 0 && mouseX > (width * 3 / 4) - 20 && mouseX < (width * 3 / 4) - 20 + width / 4 && mouseY > (height - 70) / 2 && mouseY < (height - 70) / 2 + 70) {
            this.num = this.num -= 1;
        }
    }

    getNum() {
        return this.num;
    }

    getIsAdd() {
        return this.isAdd;
    }

    getIsSubtract() {
        return this.isSubtract;
    }

}