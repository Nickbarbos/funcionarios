const funcionario = [
    {
        nome: "Jonh Doe",
        idade: 30,
        email: "john.doe@cv.com",
        url: "jubileu",
        moradia: "Monte Socego",
        numero: 964645654
    }
];

function mostrarAba(abaSelecionada) {
    // Remover a classe 'ativa' de todas as abas
    document.querySelectorAll(".aba").forEach(aba => aba.classList.remove("ativa"));
    
    // Adicionar a classe 'ativa' à aba selecionada
    const abaElement = document.getElementById(abaSelecionada);
    if (abaElement) {
        abaElement.classList.add("ativa");

        // Remover a classe 'ativa' de todos os conteúdos
        document.querySelectorAll(".conteudo").forEach(conteudo => conteudo.classList.remove("ativa"));

        // Mostrar o conteúdo associado à aba selecionada
        const abaConteudoId = abaElement.getAttribute("data-aba");
        const conteudoElement = document.getElementById(abaConteudoId);
        if (conteudoElement) {
            conteudoElement.classList.add("ativa");
        }
    }
}

function abrirModal(imgSrc, imgDescription) {
    const modalImg = document.getElementById("modal-img");
    const modalDescription = document.getElementById("modal-description");
    const myModal = document.getElementById("myModal");

    if (modalImg && modalDescription && myModal) {
        modalImg.src = imgSrc;
        modalDescription.innerHTML = imgDescription;
        myModal.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos campos de entrada
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        moradia: document.getElementById('moradia').value,
        numero: document.getElementById('numero').value
    };

    // Adiciona os dados à tabela
    addDataToTable(formData);
    
    // Limpa os campos do formulário
    clearForm();
});

// Função para adicionar uma nova linha de dados à tabela
function addDataToTable({ nome, email, idade, moradia, numero }) {
    const tableBody = document.getElementById('func');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${nome} (${idade})</td>
        <td>${email}</td>
        <td>${moradia}</td>
        <td>${numero}</td>
        <td><button id="btn2" class="btn btn-delete" onclick='deleteData(this)'>X</button></td>
    `;

    tableBody.appendChild(row);
}

// Função para limpar os campos do formulário
function clearForm() {
    document.querySelectorAll('#formulario input[type=text], #formulario input[type=email], #formulario input[type=number]').forEach(input => input.value = '');
}

// Função para remover uma linha específica da tabela
function deleteData(button) {
    button.closest('tr').remove();
}
