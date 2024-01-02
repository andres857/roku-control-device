

const apps = [
    {
        name: 'PlutoTV',
        id: '252585',
        streaming: false,
        status: 'closed'
    },
    {
        name: 'YouTube',
        id: '837',
        streaming: false,
        status: 'closed'
    }
];

const ipRokuDevice = 'http://192.168.5.115';

const streaming = {
    name: '',
    id: '',
    state: '',
    position: '',
    duration: '',
    error: '',
}

function getTimeLog(){
    const date_ob = new Date();
    // current year
    let year = date_ob.getFullYear();

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let day = date_ob.getDay();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    let dateLog = `${year}-${month}-${day} / ${hours}:${minutes}:${seconds}`
    
    return dateLog;
}

module.exports = {
    getTimeLog,
    apps,
    streaming,
    ipRokuDevice
};
