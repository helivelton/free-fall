/**
 * Created by mochileiro on 06/07/16.
 */
$(document).ready(function () {

    $("#vel-inicial").val(600);
    $("#angulo").val(1.1);
    $("#coeficiente").val(0.2);

    var tempo = 0.0;
    //document.writeln(tempo);

    var velinicialx = $("#vel-inicial").val() * Math.cos($("#angulo").val());
    var velinicialy = $("#vel-inicial").val() * Math.sin($("#angulo").val());

    //document.writeln("SPEED" + velinicialx);

    var graus = 0;
    var rads = (graus * Math.PI) / 180;
    var gravidade = 9.807;

    var posicaox = 0.0;
    var posicaoy = 0.1;

    alert("TESTE2!!!!");


    var ctx = $("#myCanvas").get(0).getContext('2d');


    ctx.fillStyle = "#000000"
    //ctx.fillStyle = "rgb(200,0,0)";


    //canvas.fillRect(0,0,1,1);


    alert("TESTE3!!!!");
    var cord = 10;

    while(posicaoy > 0) {
        tempo += 0.25;

        cord++;
        //document.writeln(tempo);

        var repeat = (1 - Math.pow(Math.E, -($("#coeficiente").val() * tempo )));

        posicaox = (velinicialx / $("#coeficiente").val()) * repeat;

        posicaoy = ( (-(gravidade * tempo)) / $("#coeficiente").val()) + (($("#coeficiente").val() * velinicialy + gravidade) / ($("#coeficiente").val() * $("#coeficiente").val())) * repeat;

        ctx.fillRect( Math.round(posicaox),Math.round(posicaox),10,10);
        alert("OK");

    }




});
