const clientId = parseInt(Math.random() * 100, 10);
console.log('Creando ID de cliente:', clientId);

//console.log(location.host);
//console.log(location.hostname);

var client = new Paho.MQTT.Client(window.location.hostname, 8088, "/mqtt", clientId.toString());

// se ejecuta cuando llega un mensaje.
client.onMessageArrived = (message) => {
    console.log('[MQTT] - Nuevo mensaje:', message);

    d3.select("circle").style("fill", "red");
    d3.select("circle").style("stroke", "blue");
    d3.select("circle").attr("cx", 150)
    d3.select("circle").attr("cy", 150)
    d3.select("circle").attr("r", 80);
}

client.connect({
    onSuccess: () => {
        console.log('[MQTT] - Me conecte');
        //client.publish('/a', 'Hola soy el cliente TNT', 0, false);
        client.subscribe('/test/#', {
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

sampleSVG.append("line")
   .attr("x1", 50)
   .attr("y1", 100)
   .attr("x2", 150) 
   .attr("y2", 200)
   .style("stroke", "rgb(255,0,0)")
   .style("stroke-width", 2);

sampleSVG.append("rect")
.attr("x", 150)
.attr("y", 2)
.attr("width", 150)
.attr("height", 100)
.attr("fill", "green");

sampleSVG.append("ellipse")
.attr("cx", 400)
.attr("cy", 150)
.attr("rx", 100)
.attr("ry", 50)
.attr("fill", "blue");