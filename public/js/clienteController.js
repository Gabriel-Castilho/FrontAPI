const api = axios.create({
    baseURL: "https://api-erp-tg.herokuapp.com"
})



api.get("/cliente").then(res => {
    criarTabela(res.data)
}).catch(err => {
    console.log(err)
})


function criarTabela(clientes) {
    var table = document.getElementById("tabelaCliente")
    for (var i = 0; i < clientes.length; i++) {

        //Sintaxe do qual insere o checkbox e oculta o id da tabela.
        var row = `<tr> 
                        <td><input type="checkbox" id="id-cliente" value=${clientes[i].id_clientes}></input></td> 
                        <td>${clientes[i].nome_clientes}</td>
                        <td>${clientes[i].telefone}</td>  
                    </tr>`;

        table.innerHTML += row

    }
    var id = document.getElementById("id-cliente").value
    console.log(id)

}
function criarCliente() {
    var nameInput = document.getElementById("nomeCliente")
    var telefoneInput = document.getElementById("telefoneCliente")

    var dados = {
        nome_clientes: nameInput.value,
        telefone: telefoneInput.value
    }
    api.post("/cliente", dados).then(res => {
        alert("Cadastro efetuado com sucesso")
        window.location.reload(true)
    }).catch(err => {
        console.log(err)
    })


}

function deletarCliente() {
        var lista = document.getElementsByTagName("input")
                for(i=0;i<lista.length;i++){
            var item = lista[i]
            if(item.type="radio" && item.checked){
                api.delete("/cliente/" + item.value).then(res=>{
                    alert("deletado")
                    window.location.reload(true)
                })
            }
        }


}
