# Calculadora de Propinas y Consumo

Este proyecto es una aplicación web interactiva donde los usuarios pueden seleccionar productos de un menú, ver un resumen de los productos seleccionados y calcular la propina basada en un porcentaje elegido. Es ideal para simular el cálculo del costo total de una comida o consumo, incluyendo el valor de la propina.

Puedes ver el demo en vivo aquí: [Calculadora de Propinas y Consumo](https://bereverte.github.io/calculadora-propinas/)

## Descripción

La aplicación permite a los usuarios:

- **Agregar productos al pedido**: El usuario puede elegir productos de un menú y agregarlos a su orden. Si selecciona un mismo producto varias veces, la cantidad se actualiza automáticamente.
- **Visualizar el resumen del pedido**: Se muestra el contenido de la orden con la cantidad de cada producto y el costo total por ítem.
- **Elegir el porcentaje de propina**: El usuario puede seleccionar entre tres porcentajes de propina: 10%, 20%, o 50%.
- **Calcular el total**: La aplicación calcula el subtotal de la orden, el valor de la propina según el porcentaje seleccionado y el total a pagar (subtotal + propina).
- **Finalizar la orden**: El usuario puede finalizar la orden, lo que limpia la selección de productos y reinicia la propina.

## Características

- **Menú interactivo**: Permite a los usuarios seleccionar productos y ver el cálculo en tiempo real.
- **Cálculo de propina**: Elige entre diferentes porcentajes de propina y calcula el monto exacto.
- **Interfaz moderna**: Construida con React y TailwindCSS para una experiencia de usuario amigable y responsiva.

## Tecnologías utilizadas

- **React**: Para la construcción de la interfaz de usuario.
- **TypeScript**: Para tipado estático y mayor robustez en el desarrollo.
- **TailwindCSS**: Para el diseño y estilo.
- **Vite**: Como bundler para una rápida compilación y desarrollo.
