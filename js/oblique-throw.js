/**
 * Created by mochileiro on 06/07/16.
 */
$(document).ready(function () {


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

    var ctx = $("#myCanvas").getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);

    alert("TESTE3!!!!");
    var cord = 0;

    while(posicaoy > 0) {
        tempo += 0.25;

        cord++;
        //document.writeln(tempo);

        var repeat = (1 - Math.pow(Math.E, -($("#coeficiente").val() * tempo )));

        posicaox = (velinicialx / $("#coeficiente").val()) * repeat;

        posicaoy = ( (-(gravidade * tempo)) / $("#coeficiente").val()) + (($("#coeficiente").val() * velinicialy + gravidade) / ($("#coeficiente").val() * $("#coeficiente").val())) * repeat;
        //document.write(posicaox);
        //$("#resultado").innerHTML = posicaox
        ctx.fillRect(cord,cord,1,1);

    }




});