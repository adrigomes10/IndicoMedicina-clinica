
console.log("Bem-vindo à Clínica Endoscop!");



const formulario = document.getElementById("form-agendamento");
if (formulario) {
    formulario.addEventListener("submit", function (event) {
        const nome = document.querySelector("input[placeholder='Nome completo']").value.trim();
        const email = document.querySelector("input[placeholder='E-mail']").value.trim();
        const telefone = document.querySelector("input[placeholder='Telefone']").value.trim();

        if (nome.length < 3) {
            alert("Por favor, insira um nome válido.");
            event.preventDefault();
        } else if (!email.includes("@") || email.length < 5) {
            alert("Por favor, insira um e-mail válido.");
            event.preventDefault();
        } else if (telefone.length < 8) {
            alert("Por favor, insira um telefone válido.");
            event.preventDefault();
        }
    });
}

// JavaScript para mostrar o botão ao rolar a página
window.onscroll = () => {
    const btn = document.getElementById("btnTopo");
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const msg = document.querySelector('.whatsapp-message');
    setTimeout(() => {
        msg.classList.add('hidden');
    }, 8000); // 8 segundos
});
