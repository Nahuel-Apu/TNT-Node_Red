const clientId = parseInt(Math.random() * 100, 10);
console.log('Creando ID de cliente:', clientId);

var client = new Paho.MQTT.Client(window.location.hostname, Number(9001), "/mqtt", clientId.toString());
//var client = new Paho.MQTT.Client(window.location.hostname, Number(9883), "/mqtt", clientId.toString());
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
    let selection = d3.select("svg").selectAll('[topico="' + message.topic + '"]');
    console.log(selection);
       
    //Comprobación por si es Maceracion
    if(message.topic == "/PM/Brewery/Clarificacion"){
        console.log("Clarificacion");
        console.log(message.payloadString);
        var x = message.payloadString;
        setClarificacion(selection,x);        
    }

    //Comprobacion por Fermentacion o Maduracion
    if(message.topic == "/PM/Brewery/fermentacion1" ||  "/PM/Brewery/fermentacion2" || "/PM/Brewery/maduracion"){
        var x = message.payloadString;
        setGrupo(selection,x);
    }
    
    selection.style("fill", message.payloadString);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

var sampleSVG = d3.select("#canvas");

//Seleccion en base al grupo de Fermentacion y Maduracion
function setGrupo(selection,x){
    if (x == "true")
        selection.style("fill", "yellow");
    else
        selection.style("fill", "black");
}

//En base al valor que recibo del mensaje seteo un color u otro del tanque de Maceracion.
//Los mismos hacen referencia a la temperatura necesaria.
function setClarificacion(selection,x){
    console.log("Entro");
    switch (x) {
        case '10':
            console.log("Entro a 10");
            selection.style("fill", "yellow");
            break;
        case '30':
            console.log("Entro a 30");
            selection.style("fill", "orange");
            break;
        case '70':
            console.log("Entro a 70");
            selection.style("fill", "red");
            break;
        default:
            text = "No value found";
    }
}