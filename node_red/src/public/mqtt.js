const clientId = parseInt(Math.random() * 100, 10);
console.log('Creando ID de cliente:', clientId);

var client = new Paho.MQTT.Client(window.location.hostname, Number(9001), "/mqtt", clientId.toString());
//var client = new Paho.MQTT.Client(window.location.hostname, Number(8088),clientId.toString());

// set callback handlers
client.onConnectionLost = onConnectionLost;
//client.onMessageArrived = onMessageArrived;

client.connect({
    onSuccess: () => {
        console.log('[MQTT] - Me conecte');
        //client.publish('/a', 'Hola soy el cliente TNT', 0, false);
        client.subscribe('/PM/Brewery/#', {
            onSuccess: () => {
                console.log('[MQTT] - Me subscribi correctamente');
            },
            onFailure: () => {
                console.log('[MQTT] - Fallo la subscripcion');
            }
        })
    },
    onFailure: () => {
        console.log('[MQTT] - Fallo la conexion a mqtt');
    }
});


// se ejecuta cuando llega un mensaje.
 client.onMessageArrived = (message) => {
    console.log('[MQTT] - Nuevo mensaje:', message);
    

    d3.select("svg").selectAll('[topico="/PM/Brewery/a"]').style("fill", "yellow");
    //d3.select("circle").style("fill", "red");
    //d3.select("circle").style("stroke", "blue");
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

var sampleSVG = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

sampleSVG.append("circle")
    .style("stroke", "green")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .transition()
    .delay(100)
    .duration(1000)
    .attr("r", 10)
    .attr("cx", 30)
    .style("fill", "black");

sampleSVG.append("rect")
    .attr("x", 150)
    .attr("y", 2)
    .attr("width", 150)
    .attr("height", 100)
    .attr("fill", "green");

sampleSVG.append("rect")
.attr("x", 400)
.attr("y", 2)
.attr("width", 150)
.attr("height", 100)
.attr("fill", "blue")
.attr("topico", "/PM/Brewery/a");

sampleSVG.append("rect")
.attr("x", 200)
.attr("y", 150)
.attr("width", 150)
.attr("height", 100)
.attr("fill", "orange");