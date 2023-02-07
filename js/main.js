async function consultaCep(cep){

    const campoErro = document.getElementById('campo__erro')
    campoErro.innerHTML = ''

    try{
        const buscaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const cepConvertido = await buscaCep.json()
        
        if(cepConvertido.erro){
            throw Error('O CEP informado não existe')
        }

        const endereco = document.getElementById('endereco')
        const bairro = document.getElementById('bairro')
        const cidade = document.getElementById('cidade')
        const estado = document.getElementById('estado')

        endereco.value = cepConvertido.logradouro
        bairro.value = cepConvertido.bairro
        cidade.value = cepConvertido.localidade
        estado.value = cepConvertido.uf
    }
    catch(erro){
        console.log(erro)
        campoErro.innerHTML = 'CEP inválido, se atente ao fomato do CEP inserido'
    }
}

const cep = document.getElementById('cep')

cep.addEventListener('focusout', () => {
    consultaCep(cep.value)
})
