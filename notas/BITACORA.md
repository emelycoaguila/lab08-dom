# Bitacora de JavaScript interactivo 
  
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: (escribe aqui cual usaste) 
  
## Ejercicio 2: Seleccionar y modificar el DOM 

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola | El titulo cambio a "Hola desde la consola". | No |
| textContent desde app.js | El titulo cambio a "Hola TECSUP". | Si |
| style.color | El titulo cambio a color azul. | Si |
| classList.add | El parrafo obtuvo un fondo amarillo. | Si |
| createElement + appendChild | Se agrego JavaScript a la lista. | Si |

## Ejercicio 3: Evento click 
  
  
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Hacer un clic en el boton. | 1 |
| dblclick | Hacer doble clic en el boton. | 1 |
| mouseover | Pasar el cursor sobre el boton. | 1 |

En la consola, evento.type mostro el tipo de evento que ocurrio, como click.
evento.target mostro el elemento HTML que recibio el evento, en este caso el boton Sumar 1.

## Ejercicio 4: Eventos input y submit 

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo cambio mientras escribia mi nombre. | No |
| Enviar sin preventDefault | El mensaje aparecio brevemente y desaparecio al recargarse la pagina. | Si |
| Enviar con preventDefault, correo sin @ | Aparecio el mensaje "Correo no valido: falta @" en rojo. | No |
| Enviar con preventDefault, correo con @ | Aparecio el mensaje "Enviado" junto con el correo ingresado. | No |

  
## Ejercicio 5: Clases y objetos 


| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510 |

Usar una clase permite crear varios productos con la misma estructura y sus propios datos. Así puedo agregar productos fácilmente sin escribir cada uno manualmente en el HTML.
  
## Ejercicio 6: DOM, eventos y objetos juntos 

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50 | Si |
| + Lapicero 3.20 | 15.70 | Si |
| + Mochila 89.90 | 105.60 | Si |
| Sin Number() | Error en la consola | Si |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM | document.querySelector y createElement | Permite seleccionar y crear elementos HTML. |
| Evento | addEventListener("submit", ...) | Detecta cuando se envia el formulario. |
| Objeto | new Producto(...) | Crea un producto con nombre y precio. |

