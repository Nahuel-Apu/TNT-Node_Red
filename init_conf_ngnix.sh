docker run -d --name cont_tmp --rm nginx
docker cp cont_tmp:/etc/nginx ./nginx
docker stop cont_tmp