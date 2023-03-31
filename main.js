const form = document.getElementById('form-exer');
const depositar = document.getElementById('deposit');
const sacar = document.getElementById('money');





form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemSucesso = `Valor de R$: <b>${sacar.value}</b> , retirado com sucesso!`
    if(depositar.value > sacar.value){
        const containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block'


            depositar.value = '';
            sacar.value = '';


    } else{ 
        sacar.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }


})
