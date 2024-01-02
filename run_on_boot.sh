#!/bin/bash
export DISPLAY=:0 
SCRIPT=~/roku-control-device/index.js 
# Absolute path to output log file
LOG=~/roku-control-device/logs.log
echo -e "\n####### STARTUP $(date) ######\n" >> $LOG
$SCRIPT >> $LOG 2>&1