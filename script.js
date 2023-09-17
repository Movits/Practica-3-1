class Personas {
    #nombre = "def nombre";
    #edad = "def edad";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setEdad(edad) {
        this.#edad = edad;
    }
    getNombre() {
        return this.#nombre;
    }
    getEdad() {
        return this.#edad;
    }
}

class Perros {
    #nombre = "def nombre";
    #color = "def color";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setColor(color) {
        this.#color = color;
    }
    getNombre() {
        return this.#nombre;
    }
    getColor() {
        return this.#color;
    }
}

const a = new Personas();
const b = new Personas();
const c = new Perros();
const d = new Perros();

a.setNombre("a");
a.setEdad("1");
b.setNombre("b");
b.setEdad("2");
c.setNombre("c");
c.setColor("negro");
d.setNombre("d");
d.setColor("blanco");

/* console.log(a.getNombre(), a.getEdad());
console.log(b.getNombre(), b.getEdad());
console.log(c.getNombre(), c.getColor());
console.log(d.getNombre(), d.getColor()); */

const PersonasArray = [
    { Nombre: a.getNombre(), Edad: a.getEdad() },
    { Nombre: b.getNombre(), Edad: b.getEdad() }
];

const PerrosArray = [
    { Nombre: c.getNombre(), Color: c.getColor() },
    { Nombre: d.getNombre(), Color: d.getColor() }
];

console.log();

console.log("Personas");
console.table(PersonasArray);

console.log();

console.log("Perros")
console.table(PerrosArray);