class Persona {
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

class Perro {
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

const a = new Persona();
const b = new Persona();
const c = new Perro();
const d = new Perro();

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

const PersonaArray = [
    a,b
];

const PerroArray = [
    c,d
];

console.log();

console.log("Persona");
console.table(PersonaArray);

console.log();

console.log("Perro")
console.table(PerroArray);