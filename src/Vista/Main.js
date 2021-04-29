let pantalla;
let sc;
let crear;
let pintarcir;

function setup() {
    createCanvas(800, 700);
    sc = new Pantalla(0);
    crear = new CrearFigura();
    pantalla = 0;
    pintarcir = false;

}

function draw() {
    background(0);
    fill(255);
    textSize(32);

    switch (pantalla) {
        case 0:
            sc.pintarBotonesPantalla1();
            sc.pintarNum();
            break;

        case 1:
            sc.pintarBotonesPantalla2();
            crear.pintarArray();
            crear.pintarCirculos();
            break;
    }

}


function mouseClicked() {
    switch (pantalla) {
        case 0:
            sc.addInUno();
            if (sc.getNum() <= 10 && sc.getNum() > 0 && mouseX > 249 && mouseX < 550 && mouseY > 466 && mouseY < 535) {
                pantalla = 1;
                crear.crearArray();
            }
            break;

        case 1:
            crear.crearCirculos()
            crear.duplicar();
            crear.eliminar();
            crear.agregar();
            break;
    }

}

function keyPressed() {

    switch (pantalla) {
        case 1:
            if (key === 'n' || key === 'N') {
                crear.sortByValue();
            }
            break;
    }
}
