let titulo = document.querySelector('#titulo');
let listaNaoOrdenada = document.querySelector('ul');
let ancora = document.querySelector('a');
let listaOrdenada = document.querySelector('#lista-ordenada');

console.log(titulo);
console.log(listaNaoOrdenada);
console.log(ancora);
console.log(listaOrdenada);

titulo.innerText = "Titulo da página";
ancora.innerText = "Clique aqui";

listaNaoOrdenada.innerHTML = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`

listaOrdenada.innerHTML = `
    <ol>
        <li>
            <a href="https://www.americanas.com.br/">
            Loja Americanas
            <a/>
        </li>

        <li>
            <a href="https://www.casasbahia.com.br/">
            Loja Casas Bahia
            <a/>
        </li>

        <li>
            <a href="https://www.pontofrio.com.br/">
            Loja Ponto Frio
            <a/>
        </li>
    </ol>     
`