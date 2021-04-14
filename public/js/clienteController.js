const api = axios.create({
    baseURL: "https://api-erp-tg.herokuapp.com"
})


api.get("/cliente").then(response => 
    {criarTabela(response.data)})
    .catch(err => {
        console.log(err)})

        function deixarOculto(){
            document.getElementById('').style.display = "none";
           }

function criarTabela(clientes) {
    var table = document.getElementById("tabelaCliente")
    
    for (var i = 0; i < clientes.length; i++) {
       
        //Sintaxe do qual insere o checkbox e oculta o id da tabela.
        var row = `<tr> 
                        <td> <input type="checkbox" id="id" value="id"> <input type="hidden" id="clientes" ${clientes[i].id_clientes}></td> 
                        <td>${clientes[i].nome_clientes}</td>
                        <td>${clientes[i].telefone}</td>  
                    </tr>`;

        table.innerHTML += row
        
    }
   
}

function criarCliente() {
    var nameInput = document.getElementById("nomeCliente")
    var telefoneInput = document.getElementById("telefoneCliente")

    var dados = {
        nome_clientes: nameInput.value,
        telefone: telefoneInput.value
    }
    api.post("/cliente",dados).then(res=>{
        alert("Cadastro efetuado com sucesso")
            window.location.reload(true)
    }).catch(err=>{
        console.log(err)
    }) 

  
}
