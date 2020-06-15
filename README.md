# Test Pinojs logger
Test log project with custom pino-socket

My pino-socket repos:

https://github.com/ruslan-gennadievich/pino-socket

# Usage:

1) git clone https://github.com/ruslan-gennadievich/testpino.git

2) cd testpino

3) npm i

4) node index.js | node ./node_modules/pino-syslog -c conf_pinosyslog.json | node ./node_modules/pino-socket -m tcp --unixsocket /tmp/unix.sock

# Other Examples:

echo '{"pid":94473,"hostname":"MacBook-Pro-3","level":30,"msg":"hello world","time":1459529098958,"v":1}' | node ./node_modules/pino-syslog -c conf_pinosyslog.json | node ./node_modules/pino-socket -m tcp -u /tmp/unix.sock

# Notice
In conf_pinosyslog.json I set "newline": true to push message after each line
