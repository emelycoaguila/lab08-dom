
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


## Version 2: con eventos

### Código principal

```js
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
});

buscarTarea.addEventListener("input", () => {
  const texto = buscarTarea.value.toLowerCase();

  const filtradas = tareasIniciales.filter((nombre) =>
    nombre.toLowerCase().includes(texto)
  );

  mostrarTareas(filtradas);
});
```

### Qué agregué

Agregué un formulario, un buscador y botones para eliminar tareas.

### Por qué lo hice

Quería que el usuario pudiera interactuar con la lista y no solamente ver tareas de ejemplo.

### Qué cambió en la página

Ahora puedo agregar tareas, buscarlas y quitarlas de la pantalla. También aparece un mensaje cuando intento agregar una tarea vacía.

## Version 3: con clases y objetos

### Código principal

```js
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

const tareas = [
  new Tarea("Estudiar JavaScript"),
  new Tarea("Completar el laboratorio"),
  new Tarea("Repasar los apuntes")
];
```

### Qué agregué

Creé la clase Tarea con un constructor, dos atributos y dos métodos. También agregué botones para completar y eliminar tareas.

### Por qué lo hice

Quería que cada tarea tuviera sus propios datos y pudiera cambiar su estado sin afectar a las demás.

### Qué cambió en la página

Ahora puedo agregar, buscar, completar y eliminar tareas. Los cambios se reflejan en la lista y los datos se actualizan en el arreglo.

## Donde uso DOM, eventos y objetos

| Parte | Código utilizado | Para qué sirve |
|-------|------------------|----------------|
| DOM | querySelector, createElement, appendChild | Selecciona y crea elementos de la página. |
| Eventos | submit, input, click | Permite agregar, buscar, completar y eliminar tareas. |
| Objetos | new Tarea(nombre) | Crea tareas con nombre y estado propio. |

## Pruebas realizadas

| Acción | Resultado esperado | Resultado obtenido | Cumple |
|--------|--------------------|--------------------|--------|
| Agregar una tarea | Aparece en la lista. | Aparece en la lista. | Sí |
| Agregar una tarea vacía | Aparece un mensaje de validación. | Aparece un mensaje de validación. | Sí |
| Buscar una tarea | Se muestran las coincidencias. | Se muestran las coincidencias. | Sí |
| Completar una tarea | El texto aparece tachado. | El texto aparece tachado. | Sí |
| Eliminar una tarea | Desaparece de la lista y del arreglo. | Desaparece de la lista y del arreglo. | Sí |

## Por que diseñe asi mi clase

Diseñé la clase Tarea con los atributos nombre y completada porque necesito guardar la descripción de cada actividad y saber si ya está terminada. El método completar cambia su estado y descripcion devuelve el nombre para mostrarlo en la página. Así puedo manejar cada tarea como un objeto y mantener el código organizado.
