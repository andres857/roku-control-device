#!/usr/local/lib/nodejs/node-v12.22.12-linux-x64/bin/node

const sched = require ('./schedule.js');

sched.startStreaming();
sched.startStreaming12();
sched.startStreaming14();
sched.startStreaming16();

