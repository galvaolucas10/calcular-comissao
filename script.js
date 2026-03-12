const nomeVendedor = document.getElementById("nomeVendedor")
const valorVenda = document.getElementById("valorVenda")
const resultado = document.getElementById("resultado")

const button = document.getElementById("button")

function calcularComissao(){
    const nome = nomeVendedor.value
    const valor = Number(valorVenda.value)

    let percentual
    if(valor <= 1000){
        percentual = 0.05
    }else if(valor <= 5000){
        percentual = 0.10
    }else{
        percentual = 0.15
    }

    const comissao = valor * percentual
    resultado.innerHTML =
    `Vendedor: ${nome} <br>
    Valor da venda: R$ ${valor} <br>
    Percentual aplicado: ${percentual * 100}% <br><br>
    Valor da comissão: R$ ${comissao.toFixed(2)}`

}
button.addEventListener("click", calcularComissao)