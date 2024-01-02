const schedule = require('node-schedule');
const { restartBroadcast } = require('./control/controls');
const { getTimeLog} = require( './utils');

// Define la regla para ejecutar la tarea
const ruleStreaming8 = new schedule.RecurrenceRule();
ruleStreaming8.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming8.hour = 7; 
ruleStreaming8.minute = 59;
ruleStreaming8.second = 15;

const ruleStreaming12 = new schedule.RecurrenceRule();
ruleStreaming12.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming12.hour = 11; 
ruleStreaming12.minute = 59; 
ruleStreaming12.second = 15;


const ruleStreaming14 = new schedule.RecurrenceRule();
ruleStreaming14.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming14.hour = 13; 
ruleStreaming14.minute = 59; 
ruleStreaming14.second = 15;

const ruleStreaming16 = new schedule.RecurrenceRule();
ruleStreaming16.dayOfWeek = [0, new schedule.Range(1, 5)]; // Ejecutar de lunes a viernes
ruleStreaming16.hour = 15;
ruleStreaming16.minute = 59;
ruleStreaming16.second = 15;

function startStreaming(){
    console.log(` Programando tarea: ${ruleStreaming8.hour}:${ruleStreaming8.minute}:${ruleStreaming8.second}`);
    schedule.scheduleJob(ruleStreaming8, function(){
        restartBroadcast().then(()=>{
            const logTime = getTimeLog();
            console.log(`Tarea ejecutada: ${logTime}`);
        }).catch( (error) => console.log(error));
    });
}

function startStreaming12(){
    console.log(` Programando tarea: ${ruleStreaming12.hour}:${ruleStreaming12.minute}:${ruleStreaming12.second}`);
    schedule.scheduleJob(ruleStreaming12, function(){
        restartBroadcast().then(()=>{
            const logTime = getTimeLog();
            console.log(`Tarea ejecutada: ${logTime}`);
        }).catch( (error) => console.log(error));
    });
}
    
function startStreaming14(){
    console.log(` Programando tarea: ${ruleStreaming14.hour}:${ruleStreaming14.minute}:${ruleStreaming14.second}`);
    schedule.scheduleJob(ruleStreaming12, function(){
        restartBroadcast().then(()=>{
            const logTime = getTimeLog();
            console.log(`Tarea ejecutada: ${logTime}`);
        }).catch( (error) => console.log(error));
    });
}

 function startStreaming16(){
    console.log(` Programando tarea: ${ruleStreaming16.hour}:${ruleStreaming16.minute}:${ruleStreaming16.second}`);
    schedule.scheduleJob(ruleStreaming16, function(){
        restartBroadcast().then(()=>{
            const logTime = getTimeLog();
            console.log(`Tarea ejecutada: ${logTime}`);
        }).catch( (error) => console.log(error));
    });
}

module.exports = {
    startStreaming,
    startStreaming12,
    startStreaming14,
    startStreaming16
}