/**
 * Created by mochileiro on 06/07/16.
 */
$("#singlebutton").click(function () {

    //$("#vel-inicial").val(600);
    //$("#angulo").val(1.1);
    //$("#coeficiente").val(0.2);

    var tempo = 0.0;
    //document.writeln(tempo);

    var graus = $("#angulo").val();
    var rads = (graus * Math.PI) / 180;


    var velinicialx = $("#vel-inicial").val() * Math.cos(rads);
    var velinicialy = $("#vel-inicial").val() * Math.sin(rads);

    //document.writeln("SPEED" + velinicialx);


    var gravidade = 9.807;

    var posicaox = 0.0;
    var posicaoy = 0.1;



    var ctx = $("#myCanvas").get(0).getContext('2d');


    ctx.fillStyle = "#000000";
    //ctx.fillStyle = "rgb(200,0,0)";


    //canvas.fillRect(0,0,1,1);

    if ($("#coeficiente").val() != 0) {
        while (posicaoy > 0) {
            tempo += 0.005;


            //document.writeln(tempo);

            var repeat = (1 - Math.pow(Math.E, -($("#coeficiente").val() * tempo )));

            posicaox = (velinicialx / $("#coeficiente").val()) * repeat;

            posicaoy = ( (-(gravidade * tempo)) / $("#coeficiente").val()) + (($("#coeficiente").val() * velinicialy + gravidade) / ($("#coeficiente").val() * $("#coeficiente").val())) * repeat;

            if ($("#vel-inicial").val() > 100) {
                posicaox = posicaox / 50;
                posicaoy = posicaoy / 50;
            }
            ctx.fillRect(Math.round(posicaox), (300 - Math.round(posicaoy)), 1, 1);


        }
    } else {
        while (posicaoy > 0) {
            tempo += 0.005;
            posicaox = velinicialx * tempo;
            posicaoy = (-(gravidade) * tempo * tempo) / 2 + velinicialy * tempo;

            if ($("#vel-inicial").val() > 100) {
                posicaox = posicaox / 50;
                posicaoy = posicaoy / 50;
            }
            ctx.fillRect(Math.round(posicaox), (300 - Math.round(posicaoy)), 1, 1);


        }


    }

    ctx.fillStyle = "#FF0000";
    posicaox = 0.0;
    posicaoy = 0.1;
    tempo = 0.0;

    while(posicaoy > 0) {
        tempo += 0.005;


        //document.writeln(tempo);

        var repeat = (1 - Math.pow(Math.E, -($("#coeficiente2").val() * tempo )));

        posicaox = (velinicialx / $("#coeficiente2").val()) * repeat;

        posicaoy = ( (-(gravidade * tempo)) / $("#coeficiente2").val()) + (($("#coeficiente2").val() * velinicialy + gravidade) / ($("#coeficiente2").val() * $("#coeficiente2").val())) * repeat;

        if ($("#vel-inicial").val() > 100 )
        {
            posicaox = posicaox/50;
            posicaoy = posicaoy/50;
        }
        ctx.fillRect( Math.round(posicaox),(300  - Math.round(posicaoy)),1,1);


    }

    ctx.fillStyle = "#FFFF00";
    posicaox = 0.0;
    posicaoy = 0.1;
    tempo = 0.0;

    while(posicaoy > 0) {
        tempo += 0.005;


        //document.writeln(tempo);

        var repeat = (1 - Math.pow(Math.E, -($("#coeficiente3").val() * tempo )));

        posicaox = (velinicialx / $("#coeficiente3").val()) * repeat;

        posicaoy = ( (-(gravidade * tempo)) / $("#coeficiente3").val()) + (($("#coeficiente3").val() * velinicialy + gravidade) / ($("#coeficiente3").val() * $("#coeficiente3").val())) * repeat;

        if ($("#vel-inicial").val() > 100 )
        {
            posicaox = posicaox/50;
            posicaoy = posicaoy/50;
        }
        ctx.fillRect( Math.round(posicaox),(300  - Math.round(posicaoy)),1,1);


    }

});
