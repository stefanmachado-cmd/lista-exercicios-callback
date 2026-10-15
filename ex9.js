// Função que simula o tempo de preparo
function prepararPedido(callback) {
    console.log("Preparando pedido...");
    setTimeout(callback, 2000);
}
prepararPedido(function() {
    console.log("Pedido pronto!");
});
