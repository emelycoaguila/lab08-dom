
 // Version 3: con clases y objetos

class Tarea {
    constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;
}
completar() {
    this.completada = !this.completada;
}
descripcion() {
    return this.nombre;
}
}

const listaTareas = document.querySelector("#listaTareas");
const formTarea = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const buscarTarea = document.querySelector("#buscarTarea");
const mensaje = document.querySelector("#mensaje");

const tareas = [
    new Tarea("Estudiar JavaScript"),
    new Tarea("Completar el laboratorio"),
    new Tarea("Repasar los apuntes")
];

function mostrarTareas() {
    listaTareas.innerHTML = "";
    const texto = buscarTarea.value.toLowerCase();
    tareas.forEach((tarea, indice) => {
    if (!tarea.nombre.toLowerCase().includes(texto)) {
        return;
    }

    const elemento = document.createElement("li");
    elemento.textContent = tarea.descripcion() + " ";

    if (tarea.completada) {
        elemento.style.textDecoration = "line-through";
    }

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = tarea.completada
    ? "Pendiente"
    : "Completar";

    botonCompletar.addEventListener("click", () => {
        tarea.completar();
        mostrarTareas();
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        tareas.splice(indice, 1);
        mostrarTareas();
        mensaje.textContent = "Tarea eliminada.";
    });

    elemento.appendChild(botonCompletar);
    elemento.appendChild(botonEliminar);
    listaTareas.appendChild(elemento);
});
}

formTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = nombreTarea.value.trim();
    if (nombre === "") {
    mensaje.textContent = "Escribe una tarea antes de agregarla.";
    return;
}
tareas.push(new Tarea(nombre));
mostrarTareas();
nombreTarea.value = "";
mensaje.textContent = "Tarea agregada correctamente.";
});

buscarTarea.addEventListener("input", () => {
    mostrarTareas();
});
mostrarTareas();