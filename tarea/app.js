
 // Version 2: con eventos

const listaTareas = document.querySelector("#listaTareas");
const formTarea = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const buscarTarea = document.querySelector("#buscarTarea");
const mensaje = document.querySelector("#mensaje");

const tareasIniciales = [
    "Estudiar JavaScript",
    "Completar el laboratorio",
    "Repasar los apuntes"
];

function mostrarTareas(tareas) {
    listaTareas.innerHTML = "";
        tareas.forEach((nombre) => {
    const elemento = document.createElement("li");
    elemento.textContent = nombre + " ";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        elemento.remove();
    });

    elemento.appendChild(botonEliminar);
    listaTareas.appendChild(elemento);
});
}

mostrarTareas(tareasIniciales);

formTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = nombreTarea.value.trim();
    if (nombre === "") {
    mensaje.textContent = "Escribe una tarea antes de agregarla.";
    return;
}
tareasIniciales.push(nombre);
mostrarTareas(tareasIniciales);
nombreTarea.value = "";
mensaje.textContent = "Tarea agregada correctamente.";
});

buscarTarea.addEventListener("input", () => {
    const texto = buscarTarea.value.toLowerCase();
    const filtradas = tareasIniciales.filter((nombre) =>
    nombre.toLowerCase().includes(texto)
);
mostrarTareas(filtradas);
});
