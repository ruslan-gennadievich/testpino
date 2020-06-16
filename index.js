const logger = require('pino')()
console = logger
console.log = (data) => logger.info(data)


let i = 0;
setInterval ( () => {
  console.log('hello world #' + i)
  i++;
}, 1000)