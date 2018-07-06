var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')
const exec = require('child_process').exec;
console.log('me conecte1')
 
client.on('connect', function () {
  console.log('me conecte')
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
  const exec = require('child_process').exec;
  const container = {port:1234,prefix:"ipa"}
  exec(`docker-compose run --name=${message.toString()} -p ${container.port}:8088 -e prefix=${container.prefix} nodered`, (error, stdout, stderr) => {
  
  });
})
