/* Fazer a movimentação do slide ficar automatica em 3000 ms ou seja, 3 segundos */
let contador = 1; /* Variável */

setInterval(function() {
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if (counter > 5) {
        contador = 1;
    }
}, 3000);