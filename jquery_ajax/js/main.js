 function consultaCep(){
    $(".barra-progresso").show()
     var cep = document.getElementById("cep").value
     var url = "http://viacep.com.br/ws/" + cep + "/json"
     $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#titulo_cep").html("CEP " + response.cep)
            $(".cep").show()
            $(".barra-progresso").hide()
            /*
            document.getElementById("logradouro").innerHTML = response.logradouro
            document.getElementById("bairro").innerHTML = response.bairro
            document.getElementById("localidade").innerHTML = response.localidade
            */
        }
     })
 }

$(function(){
    $(".barra-progresso").hide()
    $(".cep").hide()
})