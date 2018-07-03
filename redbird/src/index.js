// for every URL path that starts with /api/, send request to upstream API service
var noderedResolver = function(host, url, req) {
  /*
  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular
  y una cadena especificada. Devuelve true o false.
  */
  if(/^\/nodered/.test(url)){
     return 'http://node-red:8088';
  }
};

// for every URL path that starts with /api/, send request to upstream API service
var usersResolver = function(host, url, req) {
  /*
  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular
  y una cadena especificada. Devuelve true o false.
  */
  if(/^\/public/.test(url)){
     return 'http://localhost:8090/public/users';
  }
};

var proxy = new require('redbird')({
  port: 80,
});

proxy.addResolver(noderedResolver);
proxy.addResolver(usersResolver);