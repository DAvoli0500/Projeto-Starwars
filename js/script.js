//chamar a função criar estrela//
criarEstrelas();

// chamar função quando alterar o tamanho do browser
$(window).on('resize', function(){
    $('.star').remove();
    criarEstrelas();
}
);

/*Função criar estrelas */
function criarEstrelas(){
    const numstars = 100;
    for(let cont = 0; cont < numstars; cont++) {

        let star = document.createElement("div");
        star.className = "star";
        var xy = pegarPosicoesRamdom();
        star.style.left = xy[1] + "px";
        star.style.top = xy[0] + "px";
        document.body.append(star);

    }

}
/*função pegar posições aleatoria*/
function pegarPosicoesRamdom() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomY = Math.floor(Math.random() * y);
    var randomX = Math.floor(Math.random() * x);
    return [randomX, randomY];
}