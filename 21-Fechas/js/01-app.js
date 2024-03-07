const diaHoy = new Date(); // -> Wed Mar 06 2024 20:33:04 GMT-0600 (hora estándar central)
const dia = new Date('5-1-2013'); // -> Wed May 01 2013 00:00:00 GMT-0500 (hora de verano central)
const dia2 = new Date('September 17 2013'); // -> Tue Sep 17 2013 00:00:00 GMT-0500 (hora de verano central)

let valor = diaHoy
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(2000);

const hoy = new Date().toLocaleString(); // -> 6/3/2024, 20:46:18
const fechaHoy = new Date().toLocaleDateString(); // -> 6/3/2024
const horaHoy = new Date().toLocaleTimeString(); // -> 20:48:00

console.log(horaHoy);