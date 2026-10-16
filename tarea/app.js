
 // Version 1: solo DOM

const listaTareas = document.querySelector("#listaTareas");

const tareasIniciales = [
    "Estudiar JavaScript",
    "Completar el laboratorio",
    "Repasar los apuntes"
];

tareasIniciales.forEach((nombre) => {
    const elemento = document.createElement("li");
    elemento.textContent = nombre;
    listaTareas.appendChild(elemento);
});
