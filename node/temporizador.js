const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 0 * * 6', function () {
    console.log(`executando tarefa 1 ${new Date().getSeconds()}`)
})


setTimeout(() => {
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 20000);

const rega = new schedule.RecurrenceRule()
rega.dayOfWeek = [new schedule.Range(1,6)]
rega.hour = 0
rega.second = 30

const tarefa2 = schedule.scheduleJob(rega, () =>{
    console.log(`executando tarefa 2 ${new Date().getSeconds()}`)
})