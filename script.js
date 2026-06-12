console.log("Site da Sophia iniciado ❤️");
const elementos = document.querySelectorAll("section");

const observador = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
    entry.target.classList.add("aparecer");
}

    });

});

elementos.forEach(secao => {
    observador.observe(secao);
});
const cavalier = document.querySelector(".cavalier");

window.addEventListener("scroll", () => {

    const scrollAtual = window.scrollY;

    const alturaTotal =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progresso = scrollAtual / alturaTotal;

    const trilha = 290;

    cavalier.style.top =
        `${progresso * trilha}px`;
});
const secoes = document.querySelectorAll("section");

function revelar(){

    secoes.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            secao.classList.add("aparecer");
        }
    });
}

window.addEventListener("scroll", revelar);

revelar();

const inicio = new Date(2026, 3, 24);

function atualizar(){

    const hoje = new Date();

    const dias = Math.floor(
        (hoje - inicio) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("contador").innerHTML =
        dias + "<span> dias</span>";
}

atualizar();

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let offset = window.scrollY;

    hero.style.backgroundPositionY = offset * 0.4 + "px";
});

