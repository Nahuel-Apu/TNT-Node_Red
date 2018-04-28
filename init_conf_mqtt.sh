docker run -d --name cont_tmp --rm eclipse-mosquitto
docker cp cont_tmp:/etc/mosquitto ./mosquitto
docker stop cont_tmp