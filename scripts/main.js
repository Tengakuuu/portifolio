var textos = ["Não tente bancar o espertinho tu não vai fazer um joguinho 'rpg' logo de cara, é com o básico que se chega ao avançado... Tipo eu chegando no meu primeiro cursinho achando que ia programar um WoW da vida hahahahaha","Ao estudar uma linguagem de programação, o importante é manter a lógica, aprender as funções da linguagem é fundamental, mas é com a lógica que se faz um grande projeto","Rapaz, se tu quer mesmo ser um dev, algo que nunca deve lhe faltar, é disciplina, pareço até algum tipo de sensei falando isso, tipo o 'Mestre Kame' hahahahaha","Na minha opinião, creio que as I.As (Inteligencias Artificiais) não irão ter poder contra a humanidade, isso quebraria as 3 leis da robotica, e pra ser sincero... as I.As de hoje em dia estão sendo usadas pra jogar RPG e Criar historias de humor toscas... impossivel acontecer uma revolução das maquinas... né?"];
var para = document.querySelector('h4');
var randomtext = textos[Math.floor(Math.random() * textos.length)];
window.onload = function() {
    para.textContent = randomtext;
}
var btn = document.querySelector("button");

btn.onclick = function() {
    window.location.href = "hub.html"
}