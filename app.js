function buscar() {
    const termo = document.getElementById('busca').value.toLowerCase().trim();
    if (!termo) {
        document.getElementById('resultados').innerHTML = '';
        return;
    }
    const resultados = bibliotecaGlobal.filter(item =>
        item.descricao.toLowerCase().includes(termo) ||
        item.codigo.includes(termo)   // busca por código
    );
    function exibirResultados(itens) {
    const ul = document.getElementById('resultados');
    ul.innerHTML = '';
    const maxExibir = 50;
    const itensExibir = itens.slice(0, maxExibir);
    itensExibir.forEach(item => { ... });
    if (itens.length > maxExibir) {
        ul.innerHTML += `<li>... e mais ${itens.length - maxExibir} resultados.</li>`;
    }
}