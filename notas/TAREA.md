
# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas pendientes porque me permite organizar actividades y practicar el uso del DOM, los eventos y los objetos en JavaScript.

## Version 1: solo DOM

### Código principal

```js
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
```

### Qué agregué

Agregué una lista con tres tareas de ejemplo usando JavaScript.

### Por qué lo hice

Quería aprender a crear elementos HTML desde JavaScript sin escribir cada tarea directamente en el HTML.

### Qué cambió en la página

Las tres tareas aparecen automáticamente al abrir la página. Todavía no se pueden agregar, completar ni eliminar mediante botones.
