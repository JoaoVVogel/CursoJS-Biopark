const STORAGE_ID = "tasks";
let index = 1;

        function storageRetorna() {
            let items = localStorage.getItem(STORAGE_ID);
            
            if (items) {
                return JSON.parse(items);
            }

            return [];
        }

        function storageInsere(texto) {
            let items = storageRetorna();
            items.push(texto),

            localStorage.setItem(STORAGE_ID, JSON.stringify(items));
        }

        function criarElemento(texto, index) {
            const linha = document.createElement("p");
            const numero = document.createElement("strong");
            const conteudo = document.createElement("span");
            const botao = document.createElement("button");

            botao.innerText = "Excluir";
            conteudo.innerText = texto;
            numero.innerText = index;

            linha.classList.add("linha");
            index++;
            linha.append(numero, conteudo, botao);
            tasks.append(linha);
        }

        window.addEventListener("load", () => {
            const form = document.forms.todo;
            const tasks = document.querySelector("div#tasks");

            const items = storageRetorna();
            items.forEach(criarElemento);

            form.addEventListener("submit", (event) => {
                event.preventDefault();

                storageInsere(form.texto.value);
                criarElemento(form.texto.value);

                form.texto.value = "";
            });
        });