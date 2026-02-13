const jogos = ['The last Of Us','Mario', 'Angry Birds'];

function add_jogo(jogo_nome){
    jogos.push(jogo_nome)
    return jogo_nome
}
const remove_game = (jogo_nome) => {
    jogos.splice(jogo_nome,'-')
}
const novo_jogo = add_jogo('Horizon Zero Down');
console.log(novo_jogo)