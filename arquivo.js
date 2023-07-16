const formNum = document.getElementById("formNum");
const numA = document.getElementById('campoA');
const numB = document.getElementById('campoB');
let formEValido = false;

function validaForm (numA,numB){
    return numB > numA;
}

formNum.addEventListener('submit',function(e){
    e.preventDefault();
    if (formEValido) {
        document.querySelector('#mensagemSucesso').innerHTML = 'O número '+numB.value+' é maior que o número '+numA.value+', forms enviado.';
        document.querySelector('#mensagemSucesso').style.display = 'block';
        numA.value = '';
        numB.value = '';
    }

})


formNum.addEventListener('keyup',function(e){
    formEValido = validaForm (numA.value, numB.value)

    if (!formEValido) {
        document.querySelector('#mensagemErro').style.display = 'block';
        document.querySelector('#mensagemSucesso').style.display = 'none';
        numB.classList.add('campoB');
    }

    else {
        document.querySelector('#mensagemErro').style.display = 'none';
        numB.classList.remove('campoB');
    }
})

