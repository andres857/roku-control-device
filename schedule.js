const schedule = require('node-schedule');
const { restartBroadcast } = require('./control/controls')

// Define la regla para ejecutar la tarea
const ruleStreaming8 = new schedule.RecurrenceRule();
ruleStreaming8.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming8.hour = 7; 
ruleStreaming8.minute = 59;


const ruleStreaming12 = new schedule.RecurrenceRule();
ruleStreaming12.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming12.hour = 11; 
ruleStreaming12.minute = 59; 


const ruleStreaming14 = new schedule.RecurrenceRule();
ruleStreaming14.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming14.hour = 13; 
ruleStreaming14.minute = 59; 


const ruleStreaming16 = new schedule.RecurrenceRule();
ruleStreaming16.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming16.hour = 15; 
ruleStreaming16.minute = 59; 


const startStreaming = schedule.scheduleJob(ruleStreaming8, async function(){
    console.log('Tarea programada ejecutada a las 8:00 AM');
    await restartBroadcast()
});

const startStreaming12 = schedule.scheduleJob(ruleStreaming12, async function(){
    console.log('Tarea programada ejecutada a las 12:00 PM');
    await restartBroadcast()
});

const startStreaming14 = schedule.scheduleJob(ruleStreaming12, async function(){
    console.log('Tarea programada ejecutada a las 2:00 PM');
    await restartBroadcast()
});

const startStreaming16 = schedule.scheduleJob(ruleStreaming12, async function(){
    console.log('Tarea programada ejecutada a las 4:00 PM');
    await restartBroadcast()
});

module.exports = {
    startStreaming,
    startStreaming12,
    startStreaming14,
    startStreaming16
}