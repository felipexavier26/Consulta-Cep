function consultaCep(){
    let serach = document.getElementById('cep').value;
    if(serach == ''){
        alert("Por favor, preencha o campo".toLocaleUpperCase())
    }
    var $cep = document.getElementById('cep').value.replace(/\D/g, '');
    var url = 'https://viacep.com.br/ws/' + $cep + '/json/';
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.onerror = function (e){
        document.getElementById('return'.innerHTML = 'API OFFLINE OU CEP INVALIDO')
    }
    request.onload = () => {
        var response = JSON.parse(request.responseText);

        if (response.erro === true){
            document.getElementById('return').innerHTML = "CEP NAO ENCONTRADO";
        }
        else{
            document.getElementById('return').innerHTML = 
            '<strong >CEP</strong>: ' + response.cep + '<br>'+
            '<strong>Endereço</strong>: ' + response.logradouro + '<br>' +
            '<strong>BAIRRO</strong>: ' + response.bairro + '<br>' +
            '<strong>CIDADE</strong>: ' + response.localidade +  '</br>' + 
            '<strong>Estado</strong>: ' + response.uf + '<br>' ; 
                                                        
        }
    }
    request.send();
}
