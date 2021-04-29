class CrearFigura {

    figuras = [];
    figuras2 = [];
    sc;
    constructor() {
        this.figuras = [];
        this.sc = new Pantalla(0);

    }


    crearArray() {
        for (let i = 0; i < sc.getNum(); i++) {
            this.figuras.push(new Cuadrado(40, Math.floor(random(1, 10)), (30 * i) + 30, 150, 5));
        }
    }

    pintarArray() {
        for (let i = 0; i < this.figuras.length; i++) {
            this.figuras[i].pintar();
            this.figuras[i].mover();
        }
    }


    sortByValue() {
        this.figuras = this.figuras.sort(function (a, b) {
            return a.getValue() - b.getValue();
        });
        console.log(this.figuras);
    }


    crearCirculos() {
        if (mouseX > width * 3 / 4 && mouseX < 800 && mouseY > 550 && mouseY < 620) {
            this.figuras2 = [];
            for (let i = 0; i < this.figuras.length; i++) {
                this.figuras2.push(new Circulo(this.figuras[i].getTam(), this.figuras[i].getValue(), this.figuras[i].getPosX(), this.figuras[i].getPosY() + 200, this.figuras[i].getVel()));
            }
            console.log(this.figuras2)
        };
    }

    agregar() {
        rect(0, 550, width / 4, 70);
        if (mouseX > 0 && mouseX < width / 4 && mouseY > 550 && mouseY < 550 + 70) {
            this.figuras.push(new Cuadrado(40, Math.floor(random(1, 10)), (30 * this.figuras.length) + 30, 150, 5));
        }
    }

    pintarCirculos() {
        for (let i = 0; i < this.figuras2.length; i++) {
            this.figuras2[i].pintar();
            this.figuras2[i].mover();

        }
    }

    duplicar() {

        if (mouseX > 400 && mouseX < 600 && mouseY > 550 && mouseY < 620) {
            this.figuras.forEach(element => {
                element.duplicarTam();
            })
        }
    }

    eliminar() {
        //rect(width / 4, 550, width / 4, 70);
        if (mouseX > width / 4 && mouseX < width / 4 + width / 4 && mouseY > 550 && mouseY < 550 + 70) {
            this.figuras.pop();
        }
    }
}