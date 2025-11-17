const petForm = document.getElementById("petForm");
const listaPets = document.getElementById("listaPets");

petForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;
    const fotoInput = document.getElementById("foto");

    let fotoURL = "";

    if (fotoInput.files && fotoInput.files[0]) {
        fotoURL = URL.createObjectURL(fotoInput.files[0]);
    }

    const li = document.createElement("li");
    li.classList.add("pet-item");

    li.innerHTML = `
        <div class="pet-card">
            ${fotoURL ? `<img src="${fotoURL}" class="pet-img">` : `<div class="no-img">Sem foto</div>`}
            <div class="pet-info">
                <h3>${nome}</h3>
                <p><strong>Espécie:</strong> ${especie}</p>
                <p><strong>Idade:</strong> ${idade ? idade : "Não informado"}</p>
                <p><strong>Sexo:</strong> ${sexo}</p>
            </div>
        </div>
    `;
    listaPets.appendChild(li);

    petForm.reset();
});
