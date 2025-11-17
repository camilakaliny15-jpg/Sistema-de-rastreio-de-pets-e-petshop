const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toggleBtn = document.getElementById('toggleBtn');
const toggleHeading = document.getElementById('toggleheading');
const toggleText = document.getElementById('toggletext');
const wrapper = document.getElementById('wrapper');


toggleBtn.addEventListener('click', () => {
  if (loginForm.style.display !== 'none') {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    toggleHeading.textContent = 'Já possui uma conta?';
    toggleText.textContent = 'Faça login agora!';
    toggleBtn.textContent = 'Entrar';
    
    wrapper.style.transform = 'scale(1.02)';
    setTimeout(() => wrapper.style.transform = 'scale(1)', 200);
  } else {

    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    toggleHeading.textContent = 'Não possui uma conta?';
    toggleText.textContent = 'Cadastre-se agora!';
    toggleBtn.textContent = 'Cadastrar';
    
    wrapper.style.transform = 'scale(1.02)';
    setTimeout(() => wrapper.style.transform = 'scale(1)', 200);
  }
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input');
    const dados = {};
    inputs.forEach(input => {
      dados[input.placeholder] = input.value;
    });

    alert(`✅ ${form.parentElement.classList.contains('login') ? 'Login' : 'Cadastro'} realizado com sucesso!`);

    form.reset();
  });
});

const forgotPassword = document.querySelector('.forgot-password');
forgotPassword.addEventListener('click', () => {
  alert('Enviaremos um link de recuperação de senha para seu e-mail.');
});
