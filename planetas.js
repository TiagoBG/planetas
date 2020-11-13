class Planeta {
    constructor(nombre, distanciaMMkm, radioKM) {
        this.nombre = nombre;
        this.distancia = distanciaMMkm;
        this.radio = radioKM;
    }
}

const planetas = [];
planetas[0] = new Planeta("Mercurio", 57.91, 2439.7);
planetas[1] = new Planeta("Venus", 108.2, 6051.8);
planetas[2] = new Planeta("Júpiter", 778.5, 69911);
planetas[3] = new Planeta("Neptuno", 4495, 24622);
planetas[4] = new Planeta("Marte", 227.9, 3389.5);
planetas[5] = new Planeta("Tierra", 149.5, 6371);
planetas[6] = new Planeta("Plutón", 5906.4, 1188.3);
planetas[7] = new Planeta("Urano", 2871, 25362);
planetas[8] = new Planeta("Saturno", 1434, 58232);
planetas[9] = new Planeta("Eris", 14316, 1163);
planetas[10] = new Planeta("Makemake", 5610, 715);
planetas[11] = new Planeta("Ceres", 446, 473);
planetas[12] = new Planeta("Haumea", 6500, 1163);

//const planetasEnanos = [];


//ORDENAR - A +
//planetas.sort((a, b) => (a.radio > b.radio) ? 1 : -1)
planetas.sort((a, b) => (a.distancia > b.distancia) ? 1 : -1)
    //planetas.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)

//ORDENAR + A -
//planetas.sort((a, b) => (a.radio < b.radio) ? 1 : -1)
//planetas.sort((a, b) => (a.distancia < b.distancia) ? 1 : -1)
//planetas.sort((a, b) => (a.nombre < b.nombre) ? 1 : -1)

//FILTRAR

console.log(planetas)