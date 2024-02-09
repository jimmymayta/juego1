const texto = document.querySelector("#texto");
const respuesta = document.querySelector("#respuesta");
const verrespuesta = document.querySelector("#verrespuesta");
const siguiente = document.querySelector("#siguiente");

const Libros = {
  antiguo: [
    { numero: 1, libro: "Génesis", breviatura: "Gn" },
    { numero: 2, libro: "Éxodo", breviatura: "Ex" },
    { numero: 3, libro: "Levítico", breviatura: "Lv" },
    { numero: 4, libro: "Números", breviatura: "Nm" },
    { numero: 5, libro: "Deuteronomio", breviatura: "Dt" },
    { numero: 6, libro: "Josué", breviatura: "Jos" },
    { numero: 7, libro: "Jueces", breviatura: "Jue" },
    { numero: 8, libro: "Rut", breviatura: "Rt" },
    { numero: 9, libro: "1 Samuel", breviatura: "1S" },
    { numero: 10, libro: "2 Samuel", breviatura: "2S" },
    { numero: 11, libro: "1 Reyes", breviatura: "1R" },
    { numero: 12, libro: "2 Reyes", breviatura: "2R" },
    { numero: 13, libro: "1 Cronicas", breviatura: "1Cr" },
    { numero: 14, libro: "2 Cronicas", breviatura: "2Cr" },
    { numero: 15, libro: "Esdras", breviatura: "Esd" },
    { numero: 16, libro: "Nehemias", breviatura: "Neh" },
    { numero: 17, libro: "Ester", breviatura: "Est" },
    { numero: 18, libro: "Job", breviatura: "Job" },
    { numero: 19, libro: "Salmos", breviatura: "Sal" },
    { numero: 20, libro: "Proverbios", breviatura: "Pr" },
    { numero: 21, libro: "Eclesiastes", breviatura: "Ec" },
    { numero: 22, libro: "Cantares", breviatura: "Cnt" },
    { numero: 23, libro: "Isaias", breviatura: "Is" },
    { numero: 24, libro: "Jeremias", breviatura: "Jer" },
    { numero: 25, libro: "Lamentaciones", breviatura: "Lm" },
    { numero: 26, libro: "Ezequiel", breviatura: "Ez" },
    { numero: 27, libro: "Daniel", breviatura: "Dn" },
    { numero: 28, libro: "Oseas", breviatura: "Os" },
    { numero: 29, libro: "Joel", breviatura: "Jl" },
    { numero: 30, libro: "Amos", breviatura: "Am" },
    { numero: 31, libro: "Abdias", breviatura: "Abd" },
    { numero: 32, libro: "Jonas", breviatura: "Jon" },
    { numero: 33, libro: "Miqueas", breviatura: "Mi" },
    { numero: 34, libro: "Nahum", breviatura: "Nah" },
    { numero: 35, libro: "Habacuc", breviatura: "Hab" },
    { numero: 36, libro: "Sofonias", breviatura: "Sof" },
    { numero: 37, libro: "Hageo", breviatura: "Hag" },
    { numero: 38, libro: "Zacarias", breviatura: "Zac" },
    { numero: 39, libro: "Malaquias", breviatura: "Mal" },
  ],
  nuevo: [
    { numero: 1, libro: "Mateo", abreviatura: "Mt" },
    { numero: 2, libro: "Marcos", abreviatura: "Mr" },
    { numero: 3, libro: "Lucas", abreviatura: "Lc" },
    { numero: 4, libro: "Juan", abreviatura: "Jn" },
    { numero: 5, libro: "Hechos", abreviatura: "Hch" },
    { numero: 6, libro: "Romanos", abreviatura: "Ro" },
    { numero: 7, libro: "1 Corintios", abreviatura: "1Co" },
    { numero: 8, libro: "2 Corintios", abreviatura: "2Co" },
    { numero: 9, libro: "Galatas", abreviatura: "Ga" },
    { numero: 10, libro: "Efesios", abreviatura: "Ef" },
    { numero: 11, libro: "Filipenses", abreviatura: "Fil" },
    { numero: 12, libro: "Colosenses", abreviatura: "Col" },
    { numero: 13, libro: "1 Tesalonicences", abreviatura: "1Ts" },
    { numero: 14, libro: "2 Tesalonicences", abreviatura: "2Ts" },
    { numero: 15, libro: "1 Timoteo", abreviatura: "1Ti" },
    { numero: 16, libro: "2 Timoteo", abreviatura: "2Ti" },
    { numero: 17, libro: "Tito", abreviatura: "Tit" },
    { numero: 18, libro: "Filemon", abreviatura: "Flm" },
    { numero: 19, libro: "Hebreos", abreviatura: "He" },
    { numero: 20, libro: "Santiago", abreviatura: "Stg" },
    { numero: 21, libro: "1 Pedro", abreviatura: "1P" },
    { numero: 22, libro: "2 Pedro", abreviatura: "2P" },
    { numero: 23, libro: "1 Juan", abreviatura: "1Jn" },
    { numero: 24, libro: "2 Juan", abreviatura: "2Jn" },
    { numero: 25, libro: "3 Juan", abreviatura: "3Jn" },
    { numero: 26, libro: "Judas", abreviatura: "Jud" },
    { numero: 27, libro: "Apocalipsis", abreviatura: "Ap" },
  ],
};

const chance = new Chance();
let verlibro = "";
let vertexto = "";

function desordenarArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function libroaleatorio() {
  return chance.bool()
    ? Libros.antiguo[chance.integer({ min: 0, max: 38 })]
    : Libros.nuevo[chance.integer({ min: 0, max: 26 })];
}

function textoaleatorio() {
  const { libro } = libroaleatorio();

  return {
    libro: desordenarArray(libro.replace(" ", "").split("")).join(""),
    texto: libro,
  };
}

function mostrartexto() {
  texto.textContent = verlibro;
}

function mostrarrespuesta() {
  respuesta.textContent = vertexto;
}

siguiente.addEventListener("click", () => {
  const { libro, texto } = textoaleatorio();
  verlibro = libro;
  vertexto = texto;

  respuesta.textContent = "\u00A0";

  mostrartexto();
});

verrespuesta.addEventListener("click", () => {
  mostrarrespuesta();
});


const { libro:book, texto:text } = textoaleatorio();
verlibro = book;
vertexto = text;

mostrartexto()