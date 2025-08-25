console.log("Bem-vindo à Clínica Endoscop!");

// Validação do formulário de agendamento
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

//funcao que envia o formulário de agendamento via WhatsApp
  function enviarParaWhatsapp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const observacoes = document.getElementById('observacoes').value;

    const mensagem = `Olá! Meu nome é ${nome}.
Gostaria de agendar uma consulta para: ${servico}.
Telefone: ${telefone}
E-mail: ${email}
Observações: ${observacoes}`;

    const url = `https://wa.me/5511932614762?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  
// Mostrar botão 'Voltar ao topo' ao rolar a página
window.onscroll = () => {
  const btn = document.getElementById("btnTopo");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Ocultar mensagem WhatsApp após 8 segundos
window.addEventListener('DOMContentLoaded', () => {
  const msg = document.querySelector('.whatsapp-message');
  setTimeout(() => {
    msg.classList.add('hidden');
  }, 8000);
});

// Filtragem dos artigos por categoria
const botoesFiltro = document.querySelectorAll('#filtro-artigos button');
const artigos = document.querySelectorAll('#artigos article');

botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {
    // Atualiza botão ativo
    botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
    botao.classList.add('ativo');

    const categoriaSelecionada = botao.getAttribute('data-filter');

    // Exibe ou oculta artigos
    artigos.forEach(artigo => {
      const categoriaArtigo = artigo.getAttribute('data-category');
      if (categoriaSelecionada === 'todos' || categoriaArtigo === categoriaSelecionada) {
        artigo.style.display = 'block';
      } else {
        artigo.style.display = 'none';
      }
    });
  });
});


  function scrollConvenios(direction) {
    const container = document.getElementById('conveniosScroll');
    const scrollAmount = 250; // pode ajustar o valor aqui

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  // Função para alternar o menu no celular
  function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.classList.toggle("show");
}
