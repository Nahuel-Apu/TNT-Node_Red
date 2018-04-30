<p>
	<h1>Taller de Nuevas Tecnologías TP2</h1>
</p>

## Synopsis

La resolución del TP2 consta de crear un proyecto Docker el cual utilice Ngnix como Proxi Reverso. Node-Red como herramienta para definir flujos, los cuales son guardados en una BD Mongo generada previamente en el TP1. Para este tp el flujo que se generará es de MQTT para translado de mensajes websockects. 

## Despliegue del Proyecto

Se ejecuta la sentencia para ejecutar las Imagenes requeridas.
```shell
docker-compose -f docker-compose.yml up -d --build
```

## Node-Red

En un navegador, ingresar al siguiente vinculo para contruir el flujo de MQTT.
http://localhost:1880/nodered/

## Prueba de Proxi Reverso

* Extensión de Chrome MQTTLens (a mi no me funciono).

<p>
	<h2>mqtt-spy</h2>
</p>

1. Si se inicia por primera vez, generar el config file.
2. Conectivity: Server URI : 127.0.0.1
3. Publications: /test
4. Subscriptions: /test
