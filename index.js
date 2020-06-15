const logger = require('pino')()

let i = 0;
setInterval ( () => {  
  logger.info('hello world #' + i)
  i++;
}, 1000)