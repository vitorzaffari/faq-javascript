const btns = document.querySelectorAll(".btn");
const respostas = document.querySelectorAll(".box-resposta")

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const span_menos = e.currentTarget.lastElementChild;
        const span_mais = e.currentTarget.firstElementChild;
        const resposta = e.currentTarget.parentElement.parentElement.lastElementChild;

        
        span_menos.classList.toggle('hide');
        span_mais.classList.toggle('hide');
        resposta.classList.toggle('hide');
    })})
