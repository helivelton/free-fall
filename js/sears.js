/**
 * Created by Administrador on 26/07/2016.
 */
/**
 * Created by mochileiro on 06/07/16.
 */
$("#enviar").click(function () {

    //$("#vel-inicial").val(600);
    //$("#angulo").val(1.1);
    //$("#coeficiente").val(0.2);

    var tempo = 0.0;
    //document.writeln(tempo);

    var graus = $("#angulo").val();
    var rads = (graus * Math.PI) / 180;

    var velinicialx = $("#vel-inicial").val() * Math.cos(rads);
    var velinicialy = $("#vel-inicial").val() * Math.sin(rads);

    var massaCorpo = $("#massa-corpo").val();
    var coeficiente = $("#coeficiente").val();
    var areaCorpo = $("#area-corpo").val();
    var densidade = $("#densidade").val();

    var constanteD = (densidade*coeficiente*areaCorpo) / 2;
    //document.writeln("SPEED" + velinicialx);


    var gravidade = 9.807;

    var posicaox = 0.0;
    var posicaoy = 0.1;



    var ctx = $("#myCanvas").get(0).getContext('2d');


    ctx.fillStyle = "#000000";
    ctx.font = "15px Georgia";



    var velocidadeX = velinicialx;
    var velocidadeY = velinicialy;
    var velocidade = $("#vel-inicial").val();
    var deltaT = 0.01;

    var printX = 0.0;
    var printY = 0.0;
    while(true)
    {


        var aceleracaoX = -(constanteD/massaCorpo)*velocidade*velocidadeX;
        var aceleracaoY = -gravidade -(constanteD/massaCorpo)*velocidade*velocidadeY;

        var deltavX = aceleracaoX*deltaT;
        var deltavY = aceleracaoY*deltaT;

        var deltaX = velocidadeX*deltaT + ((aceleracaoX*(deltaT*deltaT))/2);
        var deltaY = velocidadeY*deltaT + ((aceleracaoY*(deltaT*deltaT))/2);

        posicaox+=deltaX;
        posicaoy+=deltaY;

        printX = posicaox*2;
        printY = posicaoy*2;
        //ctx.fillRect(Math.round(posicaox), (300 - Math.round(posicaoy)), 1, 1);
        ctx.fillRect((printX), ((300 - printY)), 1, 1);

        velocidadeX+=deltavX;
        velocidadeY+=deltavY;

        velocidade = Math.sqrt((velocidadeX*velocidadeX) + (velocidadeY*velocidadeY));

        if(posicaoy<0) break;

    }

    ctx.fillText(Math.round(posicaox) + "m", printX, 300);


    ctx.fillStyle = "#0000FF";

    posicaoy = 1;
    while (posicaoy > 0) {

        tempo += 0.01;
        posicaox = velinicialx * tempo;
        posicaoy = (-(gravidade) * tempo * tempo) / 2 + velinicialy * tempo;

        var printX = posicaox*2;
        var printY = posicaoy*2;

        ctx.fillRect(printX, (300 - printY), 1, 1);

    }

    ctx.fillText(Math.round(posicaox) + "m", printX, 300);


});

$("#limpar-button").click(function () {

    var ctx = $("#myCanvas").get(0).getContext('2d');



    ctx.clearRect(0, 0, 600, 300);




});