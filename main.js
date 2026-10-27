window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    // console.log(posicionObj1)
    let tamañoDePantalla = window.innerHeight/3;

    let animacion1 = document.getElementById('animado1')
    let animacion2 = document.getElementById('animado2')
    let animacion3 = document.getElementById('animado3')
    let animacion4 = document.getElementById('animado4')
    let cont_animados = document.getElementById('cont-spans')

    if(posicionObj1 < tamañoDePantalla){
        animacion1.classList.add("animate__animated", "animate__backInLeft")
        animacion2.classList.add("animate__animated", "animate__backInLeft")
        animacion3.classList.add("animate__animated", "animate__backInLeft")
        animacion4.classList.add("animate__animated", "animate__backInLeft")
        cont_animados.classList.remove("none")
    }
})

