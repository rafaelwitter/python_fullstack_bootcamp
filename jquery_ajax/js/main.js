 function consultaCep(){
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
            /*
            document.getElementById("logradouro").innerHTML = response.logradouro
            document.getElementById("bairro").innerHTML = response.bairro
            document.getElementById("localidade").innerHTML = response.localidade
            */
        }
     })
 }