$(document).ready(function(){
    //primero seleccionamos algun elemetno de html
    $("button").click(function(){
        //cuando el mouse este sobre el parrafo definir un color
        //css: para modificar la apariencia del texto
        $("p").on({
            //establecer el color de fondo, cuando el punteero pase por el elemento
            mouseenter: function(){
                $(this).css("background-color","black");
            },
            //cuando el mouse deja el elemento aplicar otro color
            //este evento es cuando el mouse sale del elemento
            mouseleave: function(){
                $(this).css("background-color","red");
            }
        });
    });
});