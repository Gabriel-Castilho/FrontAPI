const api = axios.create({
    baseURL: "https://api-erp-tg.herokuapp.com"
})


api.get("/cliente").then(response => 
    {criarTabela(response.data)})
    .catch(err => {
        console.log(err)})



function criarTabela(clientes) {
    var table = document.getElementById("tabelaCliente")
    for (var i = 0; i < clientes.length; i++) {
        var row = `<tr> 
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
    }).catch(err=>{
        console.log(err)
    }) 

  
}
