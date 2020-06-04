var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//Los emits son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});
//Escuchamos información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});