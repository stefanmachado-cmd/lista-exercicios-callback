function verificarNota(nota, callback) {
    callback(nota); 
}
verificarNota(7.5, function(valor) {
    if (valor >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
});
verificarNota(4.0, function(valor) {
    if (valor >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
});
