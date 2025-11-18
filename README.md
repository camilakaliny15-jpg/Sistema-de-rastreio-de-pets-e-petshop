# 🐶 Sistema de Rastreio de Pets e Petshop

Este projeto tem como objetivo oferecer uma plataforma completa para **rastreio de pets perdidos** e também funcionalidades voltadas para **petshop**, integrando front-end, back-end e banco de dados em um único sistema funcional.

A ideia central é permitir que usuários cadastrem animais perdidos, visualizem informações importantes e utilizem ferramentas do petshop. O sistema foi desenvolvido com foco em organização, aprendizado e boas práticas.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- HTML5  
- CSS3  
- JavaScript  
- Páginas responsivas e organizadas para navegação simples

### **Backend**
- Python (Flask)
- Rotas organizadas para:
  - Cadastro de pets perdidos
  - Listagem e consulta no banco
  - Renderização das páginas
- Conexão com MySQL

### **Banco de Dados**
- MySQL  
- Arquivo SQL incluído no projeto (`pets_perdidos.sql`)  
- Tabelas para armazenar informações dos pets cadastrados

---

## 📂 Estrutura do Projeto
/frontend ├── index.html ├── estilos/ ├── imagens/ └── README.md
/backend ├── app.py ├── templates/ ├── requirements.txt ├── pets_perdidos.sql └── README.md
README.md (este arquivo)

- **Frontend** → Parte visual e páginas do site  
- **Backend** → CRUD + servidor Flask  
- **Banco** → Script SQL para criação de tabelas  

---

## 🐾 Funcionalidades do Sistema

### ✦ Rastreio de Pets
- Cadastro de pets perdidos  
- Visualização de pets cadastrados  
- Página dedicada com detalhes do animal  

### ✦ Petshop
- Páginas e informações da loja (frontend)  
- Pagina com serviços e produtos de petshop

### ✦ Backend com Flask
- Rotas para exibição das páginas
- Conexão com o banco usando MySQL Connector
- CRUD no servidor
- Organização por templates

---

## 🔗 Links Importantes

### 📘 Documentação do Frontend
➡️ [Clique aqui para acessar o README do Frontend](./frontend/README.md)

### 📙 Documentação do Backend
➡️ [Clique aqui para acessar o README do Backend](./backend/README.md)

---

## 🛠 Como Executar o Projeto
 1. Instale os requisitos do backend
bash
pip install -r backend/requirements.txt

2. Configure o banco de dados MySQL
Crie um banco
Importe o arquivo pets_perdidos.sql

3. Execute o servidor Flask
python backend/app.py

4. Acesse o site no navegador
http://127.0.0.1:5000

### ⭐ Possíveis Melhorias Futuras

• Implementar uma API externa (ex: mapas, clima ou localização)

• Melhorar o layout geral

• Criar área administrativa

### 👩‍💻 Desenvolvido por
Lucas Barroso

Camila Kaliny 

Maria Clara 


