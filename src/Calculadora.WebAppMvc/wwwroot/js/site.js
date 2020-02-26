$(document).ready(function () {
    var agregado = 0;
    var operacao = "";

    $(".btn-numero").click(function () {
        let valorVisor = $("#visorCalculadora").val();
        valorVisor += $(this).html();

        $("#visorCalculadora").val(valorVisor);
    });

    
    $(".btn-operacao").click(function () {
        let mostrarResultado = false;
        let operacaoDigitada = $(this).html();
        if (operacaoDigitada == "=") 
          mostrarResultado = true        
        else 
          operacao = operacaoDigitada;     
        
        let valorVisor = parseInt($("#visorCalculadora").val());
        
        switch (operacao) {
            case "+":
                agregado = agregado == 0 ? valorVisor : agregado + valorVisor;
                $("#visorCalculadora").val("");
                break;
            case "-":
                agregado = agregado == 0 ? valorVisor : agregado - valorVisor;
                $("#visorCalculadora").val("");          
                break;
            case "x":
                agregado = agregado == 0 ? valorVisor : agregado * valorVisor;
                $("#visorCalculadora").val("");          
                break;
            case "/":
                agregado = agregado == 0 ? valorVisor : agregado / valorVisor;
                $("#visorCalculadora").val("");          
                break;
            case "CE":
                agregado = 0;
                operacao = "";
                $("#visorCalculadora").val("");
                break;                
    
            default:                
                $("#visorCalculadora").val(agregado);
                agregado = 0;
                break;
            }      
            
            if (mostrarResultado == true)
            {
                $("#visorCalculadora").val(agregado);
                agregado = 0;    
                operacao = "";        
            }
    });

 
});