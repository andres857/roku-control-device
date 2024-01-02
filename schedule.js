const schedule = require('node-schedule');
const { restartBroadcast, getAppActive } = require('./control/controls')


// Define la regla para ejecutar la tarea
const ruleStreaming8 = new schedule.RecurrenceRule();
ruleStreaming8.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming8.hour = 7; // Hora en formato de 24 horas (en este caso, 12 PM)
ruleStreaming8.minute = 58; // Minuto


// Define la regla para ejecutar la tarea
const ruleStreaming12 = new schedule.RecurrenceRule();
ruleStreaming12.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming12.hour = 11; // Hora en formato de 24 horas (en este caso, 12 PM)
ruleStreaming12.minute = 52; // Minuto


// Define la regla para ejecutar la tarea
const ruleStreaming14 = new schedule.RecurrenceRule();
ruleStreaming14.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming14.hour = 13; // Hora en formato de 24 horas (en este caso, 12 PM)
ruleStreaming14.minute = 58; // Minuto


// Define la regla para ejecutar la tarea
const ruleStreaming16 = new schedule.RecurrenceRule();
ruleStreaming16.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming16.hour = 15; // Hora en formato de 24 horas (en este caso, 12 PM)
ruleStreaming16.minute = 58; // Minuto


// Define la tarea a ejecutar
const startStreaming = schedule.scheduleJob(ruleStreaming8, function(){
    console.log('Tarea programada ejecutada a las 8:00 AM');
    // Agrega aquí la lógica de tu tarea
  });

const startStreaming12 = schedule.scheduleJob(ruleStreaming12, async function(){
console.log('Tarea programada ejecutada a las 12:00 PM');
    await restartBroadcast()
});

